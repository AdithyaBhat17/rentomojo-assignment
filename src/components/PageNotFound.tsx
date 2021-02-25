import { Button, Flex, Image, Text, Link } from "@chakra-ui/react";
import FourOhFour from "../assets/images/page_not_found.svg";

export default function PageNotFound() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <Image
        src={FourOhFour}
        loading="eager"
        alt="Page not found"
        title="page not found"
        width="200"
        height="200"
      />
      <Text fontSize="1.25rem" fontWeight="semibold" mb="5">
        Page not found
      </Text>
      <Link href="/" _hover={{ textDecoration: "none" }}>
        <Button variant="ghost" colorScheme="facebook">
          &lt;- Go back home
        </Button>
      </Link>
    </Flex>
  );
}
