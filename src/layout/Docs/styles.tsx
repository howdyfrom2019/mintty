import styled from "@emotion/styled";

export const DocsDivider = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  
  & > svg {
    position: fixed;
    left: 50vw;
    top: 50vh;
    transform: translate(-50%, -50%);
    perspective: 1000px;
    
    & > path {
      fill: rgba(255, 255, 255, 0.16);
    }
  }
  
  & > header.nav {
    position: sticky;
    top: 0;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 16px 0;
    margin: 0 auto 5.6vw auto;
    //padding: 16px 0;
    transition: all ease-out 0.32s;
    background: var(--secondary);
    z-index: 100;
  }
  
  .update-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
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
  transform: translate(-50%, -50%);
`;

export const ArticleLayout = styled.section`
  display: flex;
  width: 75vw;
  margin: 0 auto;
  gap: clamp(12px, 2vw, 20px);
  
  .article-wrapper {
    display: flex;
    flex-direction: column;
    //gap: clamp(36px, 4.44vw, 64px);
    flex: 2;
    z-index: 1;
    
    .full-screen {
      width: 100%;
      margin: 0 0 clamp(24px, 3.333vw, 48px) 0;
      
      & > img {
        width: 100%;
      }
    }
    
    .margin-bottom-48 {
      margin: 0 0 clamp(24px, 3.333vw, 48px) 0;
    }
    
    .margin-bottom-24 {
      margin: clamp(12px, 1.667vw, 24px) 0;
    }

    .margin-top-down-64 {
      margin: clamp(36px, 4.44vw, 64px) 0;
    }
    
    .red-highlight {
      color: var(--secondary);
      text-decoration: underline;
      & > li {
        cursor: pointer;

        & > a {
          color: inherit;
        }
      }
      
      & > a {
        color: inherit;
      }
    }
    
    .flex-row {
      display: flex;
      align-items: center;
    }
    
    .label {
      border-radius: 4px;
      padding: 1px 8px;
      background: rgba(255, 255, 255, 0.2);
    }
  }
  
  .aside-nav {
    max-width: 355px;
    flex: 1 1 18.5vw;
    align-self: start;
    position: sticky;
    top: calc(64px + 16vh);
  }
`;