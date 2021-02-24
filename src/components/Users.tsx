import {
  Box,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
import { isDark } from "../styles/theme";
import { ChangeEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import { UsersData } from "../types";
import ErrorMessage from "./layout/Error";
import SearchBox from "./layout/SearchBox";

export default function Users() {
  const { colorMode } = useColorMode();

  const { data: users, error } = useSWR<UsersData[]>("users", fetcher, {
    suspense: true,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const usersList = useMemo(() => {
    const localeSearchTerm = searchTerm.toLocaleLowerCase();
    return (
      users
        ?.filter(
          (user) =>
            user.name.toLocaleLowerCase().includes(localeSearchTerm) ||
            user.company.name.toLocaleLowerCase().includes(localeSearchTerm)
        )
        .map((user) => user) ?? []
    );
  }, [users, searchTerm]);

  if (error)
    return <ErrorMessage message={error?.message || "Error fetching users"} />;

  function updateSearchTerm(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <Box mx="10">
      <SearchBox
        placeholder="Search for users / companies"
        updateSearchTerm={updateSearchTerm}
      />
      <Box
        my="5"
        overflowX="auto"
        borderRadius={10}
        borderColor={isDark(colorMode) ? "brand.400" : "brand.600"}
        borderWidth="1px"
        borderStyle="solid"
      >
        <Table variant="striped" px="10" size="md" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Company</Th>
              <Th>Blog Posts</Th>
            </Tr>
          </Thead>
          <Tbody>
            {usersList?.map((user) => (
              <Tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>{user.company.name}</Td>
                <Td fontWeight="medium">
                  <Link to={`/users/${user.id}/posts`}>
                    Read {user.name}&apos;s articles
                  </Link>
                </Td>
              </Tr>
            ))}
            {!usersList.length ? (
              <Tr>
                <Td colSpan={3} textAlign="center">
                  No users found 😢
                </Td>
              </Tr>
            ) : null}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
