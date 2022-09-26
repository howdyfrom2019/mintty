import React, { useCallback, useEffect, useRef, useState } from 'react';
import {ImageContainer, LeftNav, RightNav, WallpaperLayout} from "./styles";
import Splash from "../Splash/splash";
import Background from "../../assets/img/original.jpg";
import Target from "../../assets/img/target.gif";
import {Tint} from "../Splash/SplashStyles";
import { ReactComponent as Frame } from "../../assets/svg/frame.svg";
import { ReactComponent as Logo } from "../../assets/svg/Logo_white.svg";
import { ReactComponent as Discord } from "../../assets/svg/discord.svg";
import { ReactComponent as Github } from "../../assets/svg/github.svg";
import { ReactComponent as Twitter } from "../../assets/svg/twitter.svg";
import Line from "../../component/line/Line";
import {NavLink, Routes, Route, useLocation, useNavigate} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Button from "../../component/button/button";
import Docs from "../Docs/Docs";
import Stamp from "../../component/stamp/Stamp";
import useMouseInteractive from "../../utils/useMouseInteractive";

const WallPaper = () => {
  const navigator = useNavigate();
  const location = useLocation();
  const [splashLoadingProgress, setSplashLoadingProgress] = useState(0);
  const [imgWidth, setImgWidth] = useState(720);
  const scrollRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const frameRef = useRef<SVGSVGElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  useMouseInteractive(frameRef, 16);
  useMouseInteractive(logoRef, 9);

  const onChangeLoading = useCallback((progress: number) => {
      setSplashLoadingProgress(progress);
  }, [setSplashLoadingProgress]);

  const onSetImgWidth = useCallback((width: number) => {
    setImgWidth(width);
  }, [setImgWidth]);

  const moveToGuide = useCallback(() => {
    navigator("/docs");
  }, [navigator]);

  // useEffect(() => {
  //   if (!scrollRef.current) return;
  //   if (splashLoadingProgress === 1) {
  //     window.scrollTo({ top: 720, behavior: "smooth"})
  //   }
  // }, [splashLoadingProgress]);

  return (
    <WallpaperLayout ref={scrollRef}>
      <TransitionGroup className={"transition-wrapper"}>
        <CSSTransition key={location.pathname} timeout={300} classNames={"right"}>
          <Routes location={location}>
            <Route path={"/"} element={
              <div style={{ position: "absolute" }}>
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
                      <Frame ref={frameRef} />
                      <Logo className={"logo-128"} ref={logoRef}/>
                    </div>
                    <img className={"target"} src={Target} alt={"target"} />
                    <span className={"stencil-title-24"}>THE LITTEST AND EASIEST NFT GUIDE</span>
                    <Button
                      className={"stencil-48"}
                      style={{ position: "absolute", bottom: "4vw", zIndex: 100, border: "none", whiteSpace: "nowrap" }}
                      onClick={moveToGuide}
                    >
                      Next -&gt;
                    </Button>
                  </div>
                  <Line className={"verticalLine"} isVertical />
                  <LeftNav>
                    <NavLink className={"bold-24"} to={"/docs"}>GUIDE</NavLink>
                    <NavLink className={"bold-24"} to={"/mintty"}>MINTTY</NavLink>
                    <NavLink className={"bold-24"} to={"/sources"}>SOURCES</NavLink>
                  </LeftNav>
                  <RightNav>
                    <Stamp />
                    <div className={"flex-row"}>
                      <Github />
                      <Discord />
                      <Twitter />
                    </div>
                  </RightNav>
                </ImageContainer>
              </div>
            } />
            <Route path={"/docs"} element={<Docs />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>

    </WallpaperLayout>
  );
}

export default WallPaper;