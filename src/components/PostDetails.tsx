import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  ButtonGroup,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useSWR, { cache } from "swr";
import { fetcher } from "../lib/fetcher";
import { formatWordCount } from "../lib/wordCount";
import Comments from "./layout/Comments";
import ErrorMessage from "./layout/Error";
import { MatchProps, PostsData } from "../types/components";

export default function PostDetails() {
  const { postId, userId } = useParams<MatchProps>();
  const history = useHistory();

  const [showComments, toggleComments] = useState(false);
  const [showDeleteDialog, toggleDeleteDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  // when the delete alert dialog pops up, we don't want the "Delete" action
  // to be accidently focused. So we focus to the least destructive action instead.
  const cancelRef = useRef<HTMLButtonElement>(null);

  function onClose() {
    toggleDeleteDialog(false);
  }

  async function deletePost() {
    // Skipping verifying response since typicode fakes the deletion
    // and returns an empty object instead.
    setLoading(true);
    await fetcher(`posts/${postId}`, {
      method: "DELETE",
    });
    // delete the post from cache.
    cache.delete(`post-${postId}`);

    history.push(`/users/${userId}/posts/`);
  }

  const { data: post, error } = useSWR<PostsData>(
    `post-${postId}`,
    () => fetcher(`posts/${postId}`),
    {
      suspense: true,
    }
  );

  if (error)
    return (
      <ErrorMessage message={error.message ?? "Failed to fetch post details"} />
    );

  return (
    <Box px={{ base: "10", lg: "96" }} py="10">
      <Stack spacing="2">
        <Heading>{post?.title}</Heading>
        <Text size="sm">{formatWordCount(post?.body)}</Text>
        <Text>{post?.body}</Text>
      </Stack>
      <Spacer height="5" />
      <ButtonGroup>
        <Button onClick={() => toggleComments((prevState) => !prevState)}>
          {!showComments ? "View" : "Hide"} comments
        </Button>
        <Button
          onClick={() => toggleDeleteDialog(true)}
          colorScheme="red"
          variant="outline"
        >
          Delete Post
        </Button>
      </ButtonGroup>
      {showComments ? <Comments postId={postId} /> : null}

      <AlertDialog
        isOpen={showDeleteDialog}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay />
        <AlertDialogContent px="5">
          <AlertDialogHeader>Delete Post?</AlertDialogHeader>
          <AlertDialogBody>
            Are you sure you want to delete this post?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} isDisabled={loading} onClick={onClose}>
              Cancel
            </Button>
            <Button
              isLoading={loading}
              isDisabled={loading}
              colorScheme="red"
              onClick={deletePost}
              ml={3}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
}
