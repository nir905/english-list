import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BaseContainer from "../components/Container"
import Button from "../components/Button"
import { FlexMiddle, FlexColumn } from "../components/Flex"
import rounds from "../data/rounds"

const Container = styled(BaseContainer)`
  text-align: center;
  margin: 3rem auto;
`

const Title = styled.h3`
  margin: 2rem auto;
`

const Option = styled(Button)`
  display: block;
  font-size: 1.3rem;
`

const Note = styled(FlexColumn)`
  margin: 4rem -1px 0;
  font-size: 0.8rem;
  direction: rtl;
`

const Background = styled.div`
  background-color: ${({ theme, type }) => theme[type]};
  color: ${({ theme }) => theme.white};
  padding: 4px 10px;
  margin: 3px 5px;
`

const Dictionary = () => {
  return (
    <Layout backButton>
      <SEO title="מילון" />

      <Container small>
        <Title>בחר מספר מילים לסיבוב</Title>
        {rounds.map(option => (
          <Option key={option} as={Link} to={`/dictionary/${option}`}>
            {option}
          </Option>
        ))}

        <Note>
          <FlexMiddle>
            <Background type="dontKnow">לא יודע</Background> - עובר למילה הבאה
          </FlexMiddle>
          <FlexMiddle>
            <Background type="know">יודע</Background> - המילה תופיע בסיבובים
            הבאים
          </FlexMiddle>
          <FlexMiddle>
            <Background type="dontShow">אל תציג יותר</Background> - המילה לא
            תופיע בסיבובים הבאים
          </FlexMiddle>
        </Note>
      </Container>
    </Layout>
  )
}

export default Dictionary
