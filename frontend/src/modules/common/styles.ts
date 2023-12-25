import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    margin: 0;
    padding: 0;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
    font-synthesis: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    font-weight: normal;
    display: flex;
    place-items: center;
    min-height: 100vh;
  }
  h1 {
    font-weight: normal;
  }
`


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: 100vw;
  background: white;
  color: black;
  @media (min-width: 800px){
    flex-direction:row;
    justify-content: start;
    min-height: 100vh;
  }
`

export const WalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 800px){
    align-items: start;
    justify-content: end;
  }
`