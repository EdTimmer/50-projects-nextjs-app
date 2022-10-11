import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  max-width: 800px;
  margin-top: 3rem;
`

export const Card = styled.button`
  padding: 1.5rem;
  margin: 1rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;
  color: black;
  background: white;
  font-size: 2.2rem;
  cursor: pointer;
  font-family: 'Mulish', sans-serif;

  &:hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
`