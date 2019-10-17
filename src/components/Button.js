import styled from "styled-components"

const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.13), 1px 2px 2px rgba(0, 0, 0, 0.1),
    -1px -2px 2px rgba(0, 0, 0, 0.05);
  text-decoration: none;
`

export default Button
