import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"
import Layout from "./Layout"
import SEO from "./SEO"
import { FlexCenter } from "./Flex"
import Container from "./Container"
import QuestionBox from "./QuestionBox"
import FinishedBox from "./FinishedBox"
import dictionary from "../data/dictionary"
import { loadWords, saveWords } from "../utils/wordsInLocalStorage"

const sendButtonEvent = eventType => {
  window &&
    window.gtag &&
    window.gtag("event", "click", {
      event_category: "Click Button",
      event_label: eventType,
      value: 1,
    })
}

const shuffleDictionary = o => {
  for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o
}

const Title = styled(FlexCenter)`
  position: relative;
  margin: 1rem 0 0;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.13), 1px 2px 2px rgba(0, 0, 0, 0.1), -1px -2px 2px rgba(0, 0, 0, 0.05);

  > h5 {
    position: absolute;
    left: 1rem;
  }
`

const Round = ({ pageContext: { option } }) => {
  const [wordsInRound, setWordsInRounds] = useState([])
  const [index, setIndex] = useState(null)
  const [roundNumber, setRoundNumber] = useState(1)
  const [knownWords, setKnownWords] = useState([])
  const [hideWords, setHideWords] = useState([])
  const [isFinished, setIsFinished] = useState(false)

  // initial getting words
  useEffect(() => {
    const hiddenWords = loadWords()
    const wordsToShow = Object.keys(dictionary).filter(key => !hiddenWords.includes(key))
    const wordsInRound = shuffleDictionary(wordsToShow).slice(0, option)

    setWordsInRounds(wordsInRound)
    setIndex(0)

    wordsInRound.length === 0 && setIsFinished(true)
  }, []) // eslint-disable-line

  //after each round remove words
  useEffect(() => {
    if (wordsInRound.length === 0) {
      return
    }

    const wordsToShow = wordsInRound.filter(key => !knownWords.includes(key) && !hideWords.includes(key))
    setWordsInRounds(wordsToShow)
    setIndex(0)

    wordsToShow.length === 0 && setIsFinished(true)
  }, [roundNumber]) // eslint-disable-line

  //save to localStorage
  useEffect(() => {
    isFinished && saveWords(hideWords)
  }, [isFinished]) // eslint-disable-line

  const nextWord = useCallback(() => {
    if (index === wordsInRound.length - 1) {
      setIndex(0)
      setRoundNumber(roundNumber + 1)
    } else {
      setIndex(index + 1)
    }
  }, [index, roundNumber, wordsInRound])

  const DontKnowWord = useCallback(() => {
    nextWord()
    sendButtonEvent("Don't Know")
  }, [nextWord])

  const handleKnowWord = useCallback(() => {
    setKnownWords([...knownWords, wordsInRound[index]])
    nextWord()
    sendButtonEvent("Know")
  }, [index, knownWords, wordsInRound, nextWord])

  const handleHideWord = useCallback(() => {
    setHideWords([...hideWords, wordsInRound[index]])
    nextWord()
    sendButtonEvent("Hide")
  }, [index, hideWords, wordsInRound, nextWord])

  return (
    <Layout backButton>
      <SEO title={`${option} מילים`} />
      <Container>
        {isFinished ? (
          <FinishedBox option={option} />
        ) : (
          <>
            <Title>
              <h3>{`סיבוב ${roundNumber}`}</h3>
              <h5>{`${index + 1}/${wordsInRound.length}`}</h5>
            </Title>

            <QuestionBox
              wordsInRound={wordsInRound}
              index={index}
              onDontKnowWord={DontKnowWord}
              onKnowWord={handleKnowWord}
              onHideWord={handleHideWord}
            />
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Round
