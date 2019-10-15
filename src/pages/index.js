import React, { useContext } from "react"
import styled from "styled-components"
import LangContext from "../context/langContext"
import withLang from "../context/withLang"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BaseContainer from "../components/Container"
import Toggle from "../components/Toggle"
import { FlexColumn, FlexMiddle } from "../components/Flex"
import Button from "../components/Button"

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
  const { lang, toggleLang, data } = useContext(LangContext)

  return (
    <Layout>
      <SEO title="Home" />

      <Container>
        <FlexColumn>
          <h4>{data.want_to_learn}</h4>

          <TogglePanel>
            <h5>{data.english}</h5>
            <Toggle value={lang === "he"} onChange={toggleLang} />
            <h5>{data.hebrew}</h5>
          </TogglePanel>

          <GoToDictionaryButton>{data.go_to_dictionary}</GoToDictionaryButton>
        </FlexColumn>
      </Container>
    </Layout>
  )
}
export default withLang(IndexPage)
