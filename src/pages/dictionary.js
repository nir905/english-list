import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import BaseContainer from "../components/Container"
import Button from "../components/Button"
import { FlexMiddle, FlexColumn } from "../components/Flex"

const Container = styled(BaseContainer)`
  text-align: center;
  margin: 3rem auto;
`

const Title = styled.h3`
  margin: 2rem auto;
`

const Option = styled(Button)`
  width: 100%;
  font-size: 1.3rem;
`

const Note = styled(FlexColumn)`
  margin: 4rem -1px;
  font-size: 0.8rem;
  direction: rtl;
`

const Background = styled.div`
  background-color: ${({ theme, type }) => theme[type]};
  color: ${({ theme }) => theme.white};
  padding: 4px 10px;
  margin: 3px 5px;
`

const options = [10, 20, 30, 50]

const Dictionary = () => {
  return (
    <Layout backButton>
      <Container small>
        <Title>בחר מספר מילים לסיבוב</Title>
        {options.map(option => (
          <Option key={option}>{option}</Option>
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
