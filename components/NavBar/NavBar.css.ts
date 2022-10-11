import styled from 'styled-components'
import colors from '../../styles/colors'

export const NavBarContainer = styled.div`
  background: ${colors.grey02};
  width: 100%;
  height: 7rem;
  padding: 1rem 2rem;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 3fr 1fr;
  flex-direction: row;
  align-items: center;
`

export const NavLinkButton = styled.button`
  border: 1px solid white;
  border-radius: 5px;
  background: ${colors.grey02};  
  cursor: pointer;  
  padding: 0.4rem 1.2rem;  
  grid-column: 3 / 4;
  place-self: center end;
  display: grid;
`

export const ButtonLabel = styled.p`
  padding: 0;
  margin: 0;
  font-family: 'Mulish', sans-serif;
  color: white;
  font-size: 2.2rem;
  place-self: center;
`

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;
  grid-column: 2 / 3;
  place-self: center;
  color: white;
  text-transform: capitalize;
`
