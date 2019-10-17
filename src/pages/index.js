import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BaseContainer from "../components/Container"
import { FlexColumnCenter, FlexMiddle } from "../components/Flex"
import Button from "../components/Button"
import Pie from "../components/Pie"

const Container = styled(BaseContainer)`
  text-align: center;
  margin: 3rem auto;
`

const TogglePanel = styled(FlexMiddle)`
  margin: 1rem auto;

  > h5 {
    margin: 0 1rem;
  }
`
const GoToDictionaryButton = styled(Button)`
  width: 70%;
  max-width: 20rem;
  margin: 4rem auto;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <Container>
        <FlexColumnCenter>
          <Pie />
          <GoToDictionaryButton>המשך למילון</GoToDictionaryButton>
        </FlexColumnCenter>
      </Container>
    </Layout>
  )
}
export default IndexPage
