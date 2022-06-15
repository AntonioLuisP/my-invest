import styled from "styled-components"

export const Button = styled.button`
  display: block;
  text-align: center;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 1px;
  padding: 0.5rem;
  color: hsl(216, 50%, 16%);
  border: 1px solid transparent;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.4s ease;
`


export const ButtonPrimary = styled(Button)`
  background-color: hsl(178, 100%, 50%);
`
export const ButtonWarning = styled(Button)`
  background-color: yellow;
`
export const ButtonDanger = styled(Button)`
  background-color: red;
  color: hsl(0, 0%, 100%);
`
