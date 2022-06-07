import styled from "styled-components"

export const Button = styled.button`
  display: inline-block;
  position: static;
  padding: 0.7rem;
  background-color: ${props => `${props.backgroundColor}`};
  color: ${props => `${props.color}`};
  cursor: pointer;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1.5px;
`
