import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: #e4e4e4;
  width: 10rem;
  height: 3rem;
  border-radius: 2rem;
  padding: 0.2rem;
  box-sizing: border-box;
`

const Value = styled.div`
  background-color: ${({ theme }) => theme.primary};
  border-radius: 2rem;
  width: 40%;
  height: 100%;
  margin-left: ${({ value }) => (value ? 0 : 60)}%;
  transition: 200ms;
`

const Toggle = ({ value, onChange }) => (
  <Wrapper onClick={onChange}>
    <Value value={value} />
  </Wrapper>
)

export default Toggle
