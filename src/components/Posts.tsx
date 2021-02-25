import { Flex, Stack, Text } from "@chakra-ui/react";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR, { cache } from "swr";
import { fetcher } from "../lib/fetcher";
import { MatchProps, PostsData } from "../types/components";
import ErrorMessage from "./layout/Error";
import Post from "./layout/Post";
import SearchBox from "./layout/SearchBox";

export default function Posts() {
  const { userId } = useParams<MatchProps>();

  const [searchTerm, setSearchTerm] = useState("");

  const updateSearchTerm = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value.toLocaleLowerCase());
    },
    []
  );

  const cachedPosts = cache.get(`postsByUser${userId}`);

  const queryParams = `?userId=${userId}`;

  const { data: posts, error } = useSWR<PostsData[]>(
    `postsByUser${userId}`,
    // skip network requests if the user's posts are already in cache.
    cachedPosts ? null : () => fetcher(`posts${queryParams}`),
    {
      suspense: true,
    }
  );

  const postsList = useMemo(() => {
    return (
      posts
        ?.filter((post) => post.title.toLocaleLowerCase().includes(searchTerm))
        .map((post) => post) ?? []
    );
  }, [posts, searchTerm]);

  if (error)
    return <ErrorMessage message={error.message ?? "Error fetching posts"} />;

  return (
    <Stack spacing="10" px={{ base: "10", lg: "96" }} py="10">
      <SearchBox
        isFullWidth
        placeholder="Search posts by title."
        updateSearchTerm={updateSearchTerm}
        disabled={!posts?.length}
      />
      {postsList?.map((post) => {
        return (
          <Post userId={userId} id={post.id} key={post.id} title={post.title}>
            {post.body}
          </Post>
        );
      })}
      {!postsList.length ? (
        <Flex
          height="60vh"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="red.500">No posts found 😢</Text>
        </Flex>
      ) : null}
    </Stack>
  );
}
