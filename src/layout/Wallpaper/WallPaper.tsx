import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ImageContainer, WallpaperLayout} from "./styles";
import Splash from "../Splash/splash";
import Background from "../../assets/img/original.jpg";
import Target from "../../assets/img/target.gif";

const WallPaper = () => {
  const [splashLoadingProgress, setSplashLoadingProgress] = useState(0);
  const [imgWidth, setImgWidth] = useState(720);
  const scrollRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const onChangeLoading = useCallback((progress: number) => {
      setSplashLoadingProgress(progress);
  }, [setSplashLoadingProgress]);

  const onSetImgWidth = useCallback((width: number) => {
    setImgWidth(width);
  }, [setImgWidth]);

  useEffect(() => {
    if (!scrollRef.current) return;
    if (splashLoadingProgress === 1) {
      window.scrollTo({ top: 720, behavior: "smooth"})
    }
  }, [splashLoadingProgress]);

  return (
    <WallpaperLayout ref={scrollRef}>
      {/*{splashLoadingProgress !== 1 && <Splash*/}
      {/*  callbackProgress={progress => onChangeLoading(progress)}*/}
      {/*  callbackImgWidth={width => onSetImgWidth(width)}/>}*/}
      <Splash
          callbackProgress={progress => onChangeLoading(progress)}
          callbackImgWidth={width => onSetImgWidth(width)}/>
      <ImageContainer
        width={imgWidth}
        height={imgRef.current?.clientHeight}
        progress={splashLoadingProgress}>
        <img className={`left side`} src={Background} alt={"background"} />
        <img src={Background} alt={"background"} ref={imgRef}/>
        <img className={`right side`} src={Background} alt={"background"} />
        <img className={"target"} src={Target} alt={"target"} />
      </ImageContainer>
    </WallpaperLayout>
  );
}

export default WallPaper;