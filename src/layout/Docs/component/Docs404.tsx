import React, {useEffect} from 'react';
import {NotFoundDocs} from "../styles";
import {useNavigate} from "react-router-dom";

const Docs404: React.FC<{ language?: string }> = ({ language }) => {
  const navigator = useNavigate();
  useEffect(() => {
    if (!language) navigator("/docs/kr", { replace: true });
  }, [language, navigator]);
  return (
    <NotFoundDocs>
      <span className={"logo-128"}>OOOOPS!</span>
      <span className={"normal-24"}>We don't provide {language || "NULL"} lang. sorry..😥</span>
    </NotFoundDocs>);
}

export default Docs404;