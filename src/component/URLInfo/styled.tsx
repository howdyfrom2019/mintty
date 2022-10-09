import styled from "@emotion/styled";

export const URLWrapper = styled.figure`
  margin: 0;
  width: 100%;
  display: flex;
  gap: 46px;
  cursor: pointer;
  
  & > img {
    max-width: 208px;
    flex: 1;
    object-fit: cover;
  }
  
  .flex-column {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    .bold-24 {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .normal-16 {
      height: 57px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
`;