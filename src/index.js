import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import theme from './Theme';

export const newTheme = {
  ...theme,
  shadows: { ...theme.shadows, outline: '0 !important' },
  colors: { ...theme.colors, primary: '#ffffff' },
};

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={newTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);