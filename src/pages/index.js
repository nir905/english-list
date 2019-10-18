import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BaseContainer from "../components/Container"
import { FlexColumnCenter } from "../components/Flex"
import Button from "../components/Button"
import Pie from "../components/Pie"

const Container = styled(BaseContainer)`
  text-align: center;
  margin: 3rem auto;
`

const GoToDictionaryButton = styled(Button)`
  width: 70%;
  max-width: 20rem;
  margin: 4rem auto;
`

const IndexPage = () => (
  <Layout>
    <SEO title="דף בית"/>

    <Container>
      <FlexColumnCenter>
        <Pie />
        <GoToDictionaryButton as={Link} to="/dictionary">
          המשך למילון
        </GoToDictionaryButton>
      </FlexColumnCenter>
    </Container>
  </Layout>
)

export default IndexPage
