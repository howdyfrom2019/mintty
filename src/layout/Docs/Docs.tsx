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
          content={"link with MetaMask"}
          btnType={"default"}
          animation
          onClick={(e) => console.log(window.ethereum.isMetaMask)} />
      </div>
    </DocsDivider>
  );
}

export default Docs;