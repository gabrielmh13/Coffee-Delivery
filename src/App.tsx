import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"

import { defaultTheme } from "./styles/themes/default"

import { Router } from './Router'
import { BrowserRouter } from "react-router-dom"

import { ProductContextProvider } from "./contexts/ProductContexts"
import { UserContextProvider } from "./contexts/UserContexts"





function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductContextProvider>
        <UserContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </UserContextProvider>
      </ProductContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
