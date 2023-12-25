import styled from "styled-components";

export const FolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  @media (min-width: 800px){
    align-items: start;
    width: 70vw;
  }
`;