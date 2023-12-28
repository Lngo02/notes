import { animated } from "@react-spring/web";
import styled from "styled-components";

export const FolderStyle = styled(animated.div)`
  background: white;
  width: 100%;
  color: black;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  overflow: hidden;
  cursor: pointer;
  border-color: black;
  border-style: solid;
  z-index: 100;
  box-shadow: 0px -1px 2px 0px grey;
  background: black;
  @media (min-width: 800px){
    align-items: start;
    overflow-anchor: auto;
`;

export const Title = styled.div`
  font-size: 36px;
  margin-top: 6px;
  margin-bottom: 8px;
  width: 100%;
  color: white;
  font-weight: bold;
  padding-left: 16px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  width: 90%;
`;

  export const Input = styled.input`
  font-size: 24px;
  margin-top: 8px;
  margin-bottom: 12px;
  border: none;
  background-color: black;
  width: 100%;
`;

export const Button = styled.button`
  && {
    font-size: 16px;
    margin-bottom: 8px;
    margin-left: 8px;
    color: black;
    background-color: #fef800;
    border: 0;
    padding: 1px;
  }
`;