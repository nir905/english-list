import React from "react"
import styled, { keyframes } from "styled-components"
import dictionary from "../data/dictionary"

const Title = styled.h3`
  margin-bottom: 3rem;
`

const animate = ({ percentage }) => keyframes`
  to {
    stroke-dashoffset: ${440 - (percentage * 440) / 100};
  }
`

const Svg = styled.svg`
  transform: rotate(-90deg);

  circle {
    stroke-dashoffset: 440;
    stroke-dasharray: 440;

    &:first-child {
      stroke-dashoffset: 0;
    }

    &:last-child {
      animation: ${animate} 1s ease-out forwards;
    }
  }

  text {
    transform: rotate(90deg);
    font-size: 2rem;
    fill: #6b6666;
  }
`

const Pie = () => {
  const wordsProgress = (localStorage.getItem("words") || []).length
  const total = Object.keys(dictionary).length
  const percentage = (wordsProgress * 100) / total

  return (
    <>
      <Title>ההתקדמות שלך</Title>
      <Svg
        width="160"
        height="160"
        xmlns="http://www.w3.org/2000/svg"
        percentage={percentage}
      >
        <g>
          <circle
            r="69.85699"
            cy="81"
            cx="81"
            strokeWidth="8"
            stroke="#efefef"
            fill="none"
          />
          <text x="50%" y="-44%" text-anchor="middle">{`${percentage}%`}</text>

          <circle
            r="69.85699"
            cy="81"
            cx="81"
            strokeWidth="8"
            stroke="#69aff4"
            fill="none"
          />
        </g>
      </Svg>
    </>
  )
}

export default Pie
