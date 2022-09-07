import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ImageContainer, LeftNav, WallpaperLayout} from "./styles";
import Splash from "../Splash/splash";
import Background from "../../assets/img/original.jpg";
import Target from "../../assets/img/target.gif";
import {Tint} from "../Splash/SplashStyles";
import { ReactComponent as Frame } from "../../assets/svg/frame.svg";
import { ReactComponent as Logo } from "../../assets/svg/Logo_white.svg";
import Line from "../../component/line/Line";
import {NavLink} from "react-router-dom";
import Button from "../../component/button/button";

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
          <Button content={"scroll down"} className={"stencil-48"} style={{ position: "absolute", bottom: "4vw", zIndex: 100, border: "none", whiteSpace: "nowrap" }} />
        </div>
        <Line className={"verticalLine"} isVertical />
        <LeftNav>
          <NavLink className={"bold-24"} to={"/guide"}>GUIDE</NavLink>
          <NavLink className={"bold-24"} to={"/mintty"}>MINTTY</NavLink>
          <NavLink className={"bold-24"} to={"/sources"}>SOURCES</NavLink>
        </LeftNav>
      </ImageContainer>
    </WallpaperLayout>
  );
}

export default WallPaper;