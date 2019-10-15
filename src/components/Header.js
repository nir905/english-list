import React, { useContext } from "react"
import styled from "styled-components"
import Container from "./Container"
import LangContext from "../context/langContext"

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding: 0.2rem;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.13), 1px 2px 2px rgba(0, 0, 0, 0.1),
    -1px -2px 2px rgba(0, 0, 0, 0.05);

  > div {
    text-align: center;
    > h2 {
      color: ${({ theme }) => theme.white};
      font-weight: 400;
    }
  }
`

const Header = () => {
  const { data } = useContext(LangContext)

  return (
    <Wrapper>
      <Container>
        <h2>{data.title}</h2>
      </Container>
    </Wrapper>
  )
}
export default Header
