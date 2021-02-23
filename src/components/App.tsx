import { ChakraProvider } from "@chakra-ui/react";
import { mojoTheme } from "../styles/theme";
import Routes from "./Routes";

export default function App() {
  return (
    <ChakraProvider theme={mojoTheme}>
      <Routes />
    </ChakraProvider>
  );
}
