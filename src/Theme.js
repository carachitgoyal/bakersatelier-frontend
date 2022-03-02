import { extendTheme } from '@chakra-ui/react';
import '@fontsource/cormorant';
import '@fontsource/mulish';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  colors: {
    brand: {
      lightBrown: '#D3B79E',
      brown: '#E99452',
      black: '#454545',
    },
  },
  fonts: {
    body: 'Mulish',
    heading: 'Cormorant',
  },
  styles: {
    global: {
      'html, body': {
        background: '#ffffff',
        color: '#454545',
      },
    },
  },
});

export default theme;
