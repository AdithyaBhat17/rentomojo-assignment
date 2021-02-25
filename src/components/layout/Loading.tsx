import { Flex, Image, Text } from "@chakra-ui/react";
import LoadingGif from "../../assets/gifs/loading_compressed.gif";
import { LoadingProps } from "../../types/components";

export default function Loading({
  message,
  width = 200,
  height = 200,
}: LoadingProps) {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="50vh"
    >
      <Image
        loading="eager"
        src={LoadingGif}
        alt="Loading gif..."
        width={width}
        height={height}
      />
      <Text mt={0}>{message}</Text>
    </Flex>
  );
}
