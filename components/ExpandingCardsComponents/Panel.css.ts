import styled from 'styled-components'

export const PanelContainer = styled.div<{ isActive: boolean}>`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 5rem;
  color: #fff;
  cursor: pointer;
  flex: ${({ isActive }) => (isActive ? 5 : 0.5)};
  margin: 2rem;
  position: relative;
  transition: flex 0.7s ease-in;
  
  @media(max-width: 480px) {
    &:nth-of-type(4),
    &:nth-of-type(5) {
      display: none;
   }
`

export const PanelHeader = styled.h3<{ isActive: boolean }>`
  font-size: 2rem;
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  margin: 0;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity 0.3s ease-in 0.4s;
`
