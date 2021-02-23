import { Flex, Text } from "@chakra-ui/react";

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="50vh"
    >
      <Text color="red.500">{message}</Text>
    </Flex>
  );
}
