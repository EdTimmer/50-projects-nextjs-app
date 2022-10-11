import styled from 'styled-components'
import colors from './colors'

const Container = styled.div`
  background: ${colors.lightBeige01};
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 7rem);
`

const Main = styled.main`
  padding: 3rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Title = styled.h1`
  margin: 0 0 2rem 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;
`

const WebLink = styled.a`
  color: ${colors.darkPurple};
  text-decoration: none;
  &:hover,
  :focus,
  :active {
    text-decoration: underline;
  }
`

const Description = styled.p`
  padding: 0;
  margin: 0;
  text-align: center;
  line-height: 1.5;
  font-size: 2rem;
`

export { Container, Main, Title, Description, WebLink }
