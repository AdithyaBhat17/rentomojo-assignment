import { extendTheme, theme } from "@chakra-ui/react";

/**
 *
 * @param {'dark' | 'light'} colorMode
 * @returns boolean
 */
export function isDark(colorMode) {
  return colorMode === "dark";
}

const colors = {
  ...theme.colors,
  brand: {
    900: "#131e2b", // background-black
    800: "#182849", // dark-blue
    700: "#4a5766", // grey
    600: "#4b6397", // link-blue
    500: "#bec5c8", // light-grey,
    400: "#fbfcfc", // background-white
    300: "#e2e8f0", // border
  },
};

const mojoTheme = extendTheme({
  colors,
  styles: {
    global: ({ colorMode }) => ({
      "html/body": {
        color: isDark(colorMode) ? "brand.400" : "brand.900",
        backgroundColor: isDark(colorMode) ? "brand.900" : "brand.400",
        fonts: {
          heading: "Inter",
          body: "Inter",
        },
      },
      a: {
        color: isDark(colorMode) ? "brand.300" : "brand.600",
        cursor: "pointer",
      },
      "a:hover,a:focus": {
        textDecoration: "underline",
      },
      "::placeholder": {
        color: isDark(colorMode) ? "brand.500" : "gray.500",
      },
    }),
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export { mojoTheme };
