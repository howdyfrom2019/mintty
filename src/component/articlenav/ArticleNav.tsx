import React, { CSSProperties } from 'react';
import {ArticleNavDivider, BorderLine} from "./ArticleNavStyles";
import { NavHashLink } from "react-router-hash-link"
import {useLocation, useParams} from "react-router-dom";
/**
 * @children: if you want to add some els inside of nav.
 * @contents: [NOTICE] If you want to use text for nav. please input text array in this props.
 */

interface Props {
  className?: string;
  upperLine?: boolean;
  underLine?: boolean;
  glowEffect?: boolean;
  hlColor?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  baseUrl: string;
  contents: { hash: string; content: string }[];
}

const ArticleNav: React.FC<Props> = (
  {
    className,
    upperLine,
    underLine,
    glowEffect,
    hlColor,
    style,
    children,
    baseUrl,
    contents = []
  }) => {
  const { hash: currentHash } = useLocation();
  console.log(currentHash);
  return (
    <ArticleNavDivider className={className} style={style}>
      {upperLine && <BorderLine hlColor={hlColor} glowEffect={glowEffect}/>}
      <NavHashLink smooth to={`${baseUrl}#ahoooy`} className={ currentHash === "#ahoooy" ? `bold-24` : `normal-24 blur` }>Ahoooy!</NavHashLink>
      <NavHashLink smooth to={`${baseUrl}#hey`} className={ currentHash === "#hey" ? `bold-24` : `normal-24 blur` }>Ready to MetaMask</NavHashLink>
      {
        contents.map((v) => {
          const { content, hash } = v;
          return <NavHashLink smooth to={`${baseUrl}${hash}`} className={ currentHash === `#${hash}` ? `bold-24` : `normal-24 blur` }>{content}</NavHashLink>
        })
      }
      {children}
      {underLine && <BorderLine hlColor={hlColor} glowEffect={glowEffect}/>}
    </ArticleNavDivider>
  );
}

export default ArticleNav;