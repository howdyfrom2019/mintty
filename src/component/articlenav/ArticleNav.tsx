import React, { CSSProperties } from 'react';
import {ArticleNavDivider, BorderLine} from "./ArticleNavStyles";
import {NavLink} from "react-router-dom";
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
  contents: { urlParams: string; content: string }[];
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
    contents = []
  }) => {
  return (
    <ArticleNavDivider className={className} style={style}>
      {upperLine && <BorderLine hlColor={hlColor} glowEffect={glowEffect}/>}
      <NavLink to={"/docs"} className={({isActive}) => isActive ? `bold-24` : `normal-24 blur` }>Ahoooy!</NavLink>
      <NavLink to={"/docs/meta"} className={({isActive}) => isActive ? `bold-24` : `normal-24 blur` }>Ready to MetaMask</NavLink>
      {
        contents.map((v) => {
          const { content, urlParams } = v;
          return <NavLink to={urlParams} className={({ isActive }) => isActive ? `bold-24` : `normal-24 blur` }>{content}</NavLink>
        })
      }
      {children}
      {underLine && <BorderLine hlColor={hlColor} glowEffect={glowEffect}/>}
    </ArticleNavDivider>
  );
}

export default ArticleNav;