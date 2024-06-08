import { extendTheme } from "@chakra-ui/react";
import '@fontsource/noto-serif-tc/200.css';
import '@fontsource/noto-serif-tc/400.css';
import '@fontsource/noto-serif-tc/500.css';
import '@fontsource-variable/frank-ruhl-libre';

const colors = {
  primary: {
    100: "#0e3527", /* forest */
    200: "#231c17", /* dark brown */
    300: "#9de0fa", /* sky */
    400: "#90fdd5", /* seafoam  */
    500: "#2a2824", /* light brown */
    600: "#27c19d", /* more different seafoam */
    700: "#62e2d3", /* sky2 */
    800: "#075C37", /*  */
    900: "#064C2E", /*  */
  },
};

const fonts = {
  body: `'Frank Ruhl Libre Variable', serif`,
  // body: `'Noto Serif TC', serif`,
};


const customTheme = extendTheme({ colors, fonts });

export default customTheme;
