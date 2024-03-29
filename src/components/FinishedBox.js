import React, { useEffect } from "react"
import styled from "styled-components"
import Pie from "./Pie"
import Button from "./Button"
import { flexColumnCenter } from "./Flex"
import Container from "./Container"

const Title = styled.h4`
  margin: 1rem;
`

const Wrapper = styled(Container)`
  ${flexColumnCenter};
  margin: 0 auto;
`

const GoBackButton = styled(Button)`
  margin: 4rem 0;
  width: 60%;
`

const sendFinishedEvent = option => {
  window &&
    window.gtag &&
    window.gtag("event", "click", {
      event_category: "Finished",
      event_label: "Finished Round",
      value: 100 * option,
    })
}

const FinishedBox = ({ option }) => {
  useEffect(() => {
    sendFinishedEvent(option)
  }, [])

  return (
    <Wrapper>
      <Title>!סיימת את הסיבוב בהצלחה</Title>
      <Pie />
      <GoBackButton onClick={() => window.history.back()}>חזור</GoBackButton>
    </Wrapper>
  )
}

export default FinishedBox
