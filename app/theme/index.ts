import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    primary: '#F56565', // Red 400 from Chakra UI defaults
    secondary: '#333333', // Dark Gray
  },
  gray: {
    50: '#F5F5F5',
    100: '#EEEEEE',
    200: '#E0E0E0',
    300: '#D2D2D2',
    400: '#C4C4C4',
    500: '#999999',
    600: '#7A7A7A',
    700: '#666666',
    800: '#4D4D4D',
    900: '#333333',
  },
};

const theme = extendTheme({
  colors,
  config: {
    initialColorMode: 'dark', // Set initial color mode to dark
  },
});

export default theme;
