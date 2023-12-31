import { animated } from '@react-spring/web'
import styled from 'styled-components'

export const Add = styled(animated.div)`
  display: flex;
  flex-direction: column;
  background: black;
  margin-bottom: 20px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: bold;
  padding-top: 4px;
  width: 100%;
  flex-basis: 100%;
  @media (min-width: 800px){
    min-width: 66vw;
`

export const Title = styled(animated.div)`
  color: white;
  padding-left: 16px;
`

export const Form = styled(animated.form)`
`


export const Button = styled.button`
  visibility: hidden;
`

export const TitleInput = styled.input`
  height: 100%;
  font-size: 24px;
  width: 85%;
  background: black;
  border: none;
  margin-top: 16px;
  padding-left: 16px;
  margin-left: 16px;
  margin-right: 16px;
  color: white;
`

export const BodyInput = styled.input`
  min-height: 10vh;
  font-size: 16px;
  width: 85%;
  background: black;
  border: none;
  margin-top: 16px;
  padding-left: 16px;
  margin-left: 16px;
  margin-right: 16px;
  color: white;
`