import React from 'react';
import { DocsDivider } from "./styles";
import { ReactComponent as Logo } from "../../assets/svg/Logo.svg";
import Button from "../../component/button/button";
import {useMetaMask} from "../../utils/useMetaMask";

const Docs = () => {
  const [isMetaMaskInstalled, isChrome, isMobile] = useMetaMask();
  console.log(isMetaMaskInstalled, isChrome, isMobile);
  return (
    <DocsDivider>
      <div className={"nav"}>
        <Logo />
        <Button
          btnType={"default"}
          animation
          onClick={(e) => console.log(window.ethereum.isMetaMask)}>
          Link With MetaMsk
        </Button>
      </div>
    </DocsDivider>
  );
}

export default Docs;