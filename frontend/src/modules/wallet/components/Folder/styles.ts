import styled from 'styled-components'
import { animated } from '@react-spring/web';

// Using react spring requres it to be an animated.div element
export const FolderStyle = styled(animated.div)`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: white;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  overflow: hidden;
  cursor: pointer;
  padding-bottom: 8px;
  margin-bottom: -20px;
  border-color: black;
  border-style: 0.1 solid #000000;
  z-index: 50;
  box-shadow: 0px -1px 1px 0px grey;
  @media (min-width: 800px){
    overflow-anchor: auto;
`

export const Container = styled(animated.div)`
  padding-right: 16px;
  padding-left: 16px;
`

export const Title = styled.div`
  font-size: 36px;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  font-weight: bold;
  color: black;
  font-kerning: none;
`