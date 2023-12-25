import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 70vw;
  margin-top: 6vh;
  margin-bottom: 5vh;
  padding-left: 16px;
  @media (min-width: 800px){
    width: 30vw;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: end;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: black;
`;
export const H1 = styled.div`
  font-size: 48px;
  font-weight: bold;
  line-height: 48px;
  color: black;
`;