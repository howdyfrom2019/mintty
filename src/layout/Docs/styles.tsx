import styled from "@emotion/styled";

export const DocsDivider = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  width: 100vw;
  
  & > header.nav {
    width: 75vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 5.6vw auto;
  }
  
  .button-container {
    display: flex;
    gap: ${({ theme }) => theme.fontSizes.sm};
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

export const ArticleLayout = styled.section`
  display: flex;
  width: 75vw;
  margin: 0 auto;
  gap: clamp(12px, 2vw, 20px);
  
  .article-wrapper {
    display: flex;
    flex-direction: column;
    gap: clamp(36px, 4.44vw, 64px);
    flex: 2;
    
    .stencil-64 {
      margin-bottom: clamp(24px, 3.333vw, 48px);
    }
    
    .bold-36 {
      margin-bottom: clamp(12px, 1.667vw, 24px);
    }
    
    .bold-48 {
      margin-bottom: clamp(24px, 3.333vw, 48px);
    }
  }
  
  .aside-nav {
    
  }
`;