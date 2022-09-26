import React from 'react';
import {NotFoundDocs} from "../styles";

const Docs404: React.FC<{ language?: string }> = ({ language }) => {
  return (
    <NotFoundDocs>
      <span className={"logo-128"}>OOOOPS!</span>
      <span className={"normal-24"}>We don't provide {language || "NULL"} lang. sorry..😥</span>
    </NotFoundDocs>);
}

export default Docs404;