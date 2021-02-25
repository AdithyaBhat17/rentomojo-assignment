import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { formatWordCount } from "../../lib/wordCount";
import { PostProps } from "../../types/components";

export default function Post({ userId, id, title, children }: PostProps) {
  const to = `/users/${userId}/posts/${id}`;

  return (
    <Stack spacing="2">
      <Link to={to}>
        <Heading>{title}</Heading>
      </Link>
      <Text color="brand.700" size="sm">
        {formatWordCount(children)}
      </Text>
      <Text>{children}</Text>
    </Stack>
  );
}
