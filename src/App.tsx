import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { Home } from "./pages/Home";
import { CartContextProvider } from "./contexts/CartContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <Home />
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
