import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#0f3d2d", /* forest */
    200: "#352d25", /* dark brown */
    300: "#9de0fa", /* sky */
    400: "##90fdd5", /* seafoam  */
    500: "#b9ae87", /* light brown */
    600: "#0A864F", /*  */
    700: "#086F42", /*  */
    800: "#075C37", /*  */
    900: "#064C2E", /*  */
  },
};

const customTheme = extendTheme({ colors });

export default customTheme;
