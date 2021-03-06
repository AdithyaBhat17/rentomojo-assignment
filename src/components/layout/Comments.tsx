import { Box, Stack, Text } from "@chakra-ui/react";
import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import { CommentsData } from "../../types/components";
import ErrorMessage from "./Error";
import Loading from "./Loading";

export default function Comments({ postId }: { postId: string }) {
  // fetch comments
  const { data: comments, error } = useSWR<CommentsData[]>(
    `commentsForPost${postId}`,
    () => fetcher(`comments?postId=${postId}`)
  );

  // handle errors
  if (error)
    return <ErrorMessage message="Failed to fetch comments for this post" />;

  // add a loading state to the UI since we are not using suspense here.
  if (!comments) return <Loading message="Fetching comments..." />;

  return (
    <Stack spacing="2" mt="10">
      {comments?.map((comment) => (
        <Box
          key={comment.id}
          py="5"
          borderBottomColor="brand.500"
          borderBottomWidth="1px"
          borderBottomStyle="solid"
        >
          <Text fontWeight="semibold">{comment.email}</Text>
          <Text>{comment.body}</Text>
        </Box>
      ))}
    </Stack>
  );
}
