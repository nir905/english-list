import React from "react"
import styled from "styled-components"
import BaseContainer from "./Container"
import ArrowIcon from "../static/icons/arrow.svg"

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

const Container = styled(BaseContainer)`
  position: relative;
`

const Arrow = styled(ArrowIcon)`
  position: absolute;
  top: -2px;
  left: 10px;
  padding: 1rem;
`

const Header = ({ backButton }) => (
  <Wrapper>
    <Container>
      {backButton && <Arrow onClick={() => window.history.back()} />}

      <h2>מילון באנגלית</h2>
    </Container>
  </Wrapper>
)
export default Header
