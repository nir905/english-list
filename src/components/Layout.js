import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../style/GlobalStyle"
import Header from "./Header"
import theme from "../style/theme"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  </ThemeProvider>
)

export default Layout
