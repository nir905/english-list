import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../style/GlobalStyle"
import Header from "./Header"
import theme from "../style/theme"

const Layout = ({ backButton, children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header backButton={backButton} />
      {children}
    </>
  </ThemeProvider>
)

export default Layout
