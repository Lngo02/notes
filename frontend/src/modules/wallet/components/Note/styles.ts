import styled from 'styled-components'


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  color: white;
  border-radius: 8px;
  justify-content: center;
  align-items: start;
  margin-bottom: 16px;
  flex-basis: 100%;
  width: 100%;
  &:last-child {
    margin-bottom: 32px;
 }
`

export const TextArea = styled.p`
  margin: 4px;
  margin-left: 16px;
  margin-right: 16px;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  margin: 8px 16px 8px 16px;
`

export const Title = styled.div`
  text-transform: uppercase;
  font-size: 12px;
`

export const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-left: 16px;
  margin-right: 16px;
`

export const Delete = styled.div`
`

export const Edit = styled.div`
  margin-right: 8px;
`

export const Icons = styled.div`
  display: flex;
  margin-right: 28px;
  font-size: 12px;
`