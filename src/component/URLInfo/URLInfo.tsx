import React, {useCallback} from 'react';
import {URLWrapper} from "./styled";

interface Props {
  className?:string;
  imgUrl: string;
  title: string;
  description: string;
  url: string;
}

const URLInfo: React.FC<Props> = ({ className, imgUrl, title, description, url }) => {
  const moveToURL = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = url;
  }, [url]);

  return (
    <URLWrapper className={className} onClick={moveToURL}>
      <img src={imgUrl} alt={"thumbnail"} />
      <div className={"flex-column"}>
        <span className={"bold-24"}>{title}</span>
        <span className={"normal-16"}>{description}</span>
      </div>
    </URLWrapper>
  );
}

export default URLInfo;