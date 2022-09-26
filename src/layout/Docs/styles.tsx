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

export const NotFoundDocs = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  height: 560px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
`;