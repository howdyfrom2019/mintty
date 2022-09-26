import React from 'react';
import { useParams } from "react-router-dom";
import DocsEN from "./component/DocsEN";
import Docs404 from "./component/Docs404";

const Docs = () => {
  const params = useParams();
  switch (params.language) {
    case "kr":
      return <DocsEN />;
    case "en" || undefined:
      return <DocsEN />;
    default:
      return <Docs404 language={params.language} />;
  }
}

export default Docs;