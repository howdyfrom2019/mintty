import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ImageContainer, WallpaperLayout} from "./styles";
import Splash from "../Splash/splash";
import Background from "../../assets/img/original.jpg";
import Target from "../../assets/img/target.gif";
import {Tint} from "../Splash/SplashStyles";
import { ReactComponent as Frame } from "../../assets/svg/frame.svg";
import { ReactComponent as Logo } from "../../assets/svg/Logo_white.svg";

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
      <Splash
        className={`${splashLoadingProgress === 1 && "zoomAnimation"}`}
        callbackProgress={progress => onChangeLoading(progress)}
        callbackImgWidth={width => onSetImgWidth(width)}/>
      <ImageContainer
        className={`${splashLoadingProgress === 1 && "bottomUpAnimation"}`}
        width={imgWidth}
        height={imgRef.current?.clientHeight}
        progress={splashLoadingProgress}>
        <Tint style={{ backgroundColor: "rgba(0, 0, 0, 0.34)", zIndex: 98 }} />
        <img className={`left side`} src={Background} alt={"background"} style={{ marginRight: "10vw"}}/>
        <img src={Background} alt={"background"} ref={imgRef}/>
        <img className={`right side`} src={Background} alt={"background"} style={{ marginLeft: "10vw"}} />
        <div className={"centerImageDivision"}>
          <div className={"logoContainer"}>
            <Frame />
            <Logo className={"logo-128"}/>
          </div>
          <img className={"target"} src={Target} alt={"target"} />
          <span className={"stencil-title-24"}>THE LITTEST AND EASIEST NFT GUIDE</span>
        </div>
      </ImageContainer>
    </WallpaperLayout>
  );
}

export default WallPaper;