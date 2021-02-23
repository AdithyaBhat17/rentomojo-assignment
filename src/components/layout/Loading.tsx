import { Flex, Image, Text } from "@chakra-ui/react";
import LoadingGif from "../../assets/gifs/loading.gif";

export interface LoadingProps {
  message: string;
  width?: number;
  height?: number;
}

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
      <Image src={LoadingGif} alt={message} width={width} height={height} />
      <Text mt={0}>{message}</Text>
    </Flex>
  );
}
