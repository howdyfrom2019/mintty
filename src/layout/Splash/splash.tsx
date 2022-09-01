import React from 'react';
import { SplashWrapper, Tint } from "./SplashStyles";
import SplashBackground from "../../assets/img/original.jpg";
import CountUp from "react-countup";

const Splash = () => {
  return (
    <SplashWrapper>
      <Tint>
        <CountUp className={"stencil-128"} end={100} duration={3} />
      </Tint>
      <img className={`side left`} src={SplashBackground} alt={"background"} />
      <img src={SplashBackground} alt={"background"} />
      <img className={`side right`} src={SplashBackground} alt={"background"} />
    </SplashWrapper>
  );
}

export default Splash;