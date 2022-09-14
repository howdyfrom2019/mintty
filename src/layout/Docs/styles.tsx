import styled from "@emotion/styled";

export const DocsDivider = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  width: 100vw;
  
  & > div.nav {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;