import React, { useState, useEffect } from "react"
import styled, { css, keyframes } from "styled-components"
import { FlexColumn } from "./Flex"
import Button from "./Button"
import dictionary from "../data/dictionary"

const Wrapper = styled(FlexColumn)`
  margin: 0.5rem 0;
`
const box = css`
  margin: 0;
  color: ${({ theme }) => theme.white};
  padding: 1.5rem 0.5rem;
  font-weight: 400;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`

const Question = styled.h1`
  ${box};
  background: ${({ theme }) => theme.primary};
`

const flyIn = keyframes`
	0%{
		transform: translateY(10rem);
		opacity: 0;
	}
	100%{
		transform: translateY(0);
		opacity: 1;
	}
`
const AnimatedPanel = styled.div`
  animation: ${flyIn} ease 300ms forwards;
`

const Answer = styled.h2`
  ${box};
  background: ${({ theme }) => theme.light};
  direction: rtl;
`

const AnswerButton = styled(Button)`
  background: ${({ theme, type }) => theme[type]};
  grid-area: ${({ type }) => type};
`

const AnswerButtonArea = styled.div`
  margin: 1rem;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-areas:
    "dontKnow know"
    "dontShow dontShow";
`

const QuestionBox = ({
  wordsInRound,
  index,
  onDontKnowWord,
  onKnowWord,
  onHideWord,
}) => {
  const [show, setShow] = useState(false)

  useEffect(() => setShow(false), [index])

  return (
    <Wrapper>
      <Question onClick={() => setShow(true)}>{wordsInRound[index]}</Question>

      {show && (
        <AnimatedPanel>
          <Answer>{dictionary[wordsInRound[index]]}</Answer>

          <AnswerButtonArea>
            <AnswerButton type="dontKnow" onClick={onDontKnowWord}>
              לא יודע
            </AnswerButton>
            <AnswerButton type="know" onClick={onKnowWord}>
              יודע
            </AnswerButton>
            <AnswerButton type="dontShow" onClick={onHideWord}>
              אל תציג יותר
            </AnswerButton>
          </AnswerButtonArea>
        </AnimatedPanel>
      )}
    </Wrapper>
  )
}

export default QuestionBox