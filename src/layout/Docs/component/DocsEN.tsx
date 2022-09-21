import React from 'react';
import {useMetaMask} from "../../../utils/useMetaMask";
import {ReactComponent as Logo} from "../../../assets/svg/Logo.svg";
import Button from "../../../component/button/button";
import {DocsDivider} from "../styles";

const DocsEN = () => {
  const [isMetaMaskInstalled, isChrome, isMobile] = useMetaMask();
  return (
    <DocsDivider>
      <div className={"nav"}>
        <Logo />
        <Button
          btnType={"default"}
          animation
          onClick={(e) => console.log(window.ethereum.isMetaMask)}>
          Link With MetaMask
        </Button>
      </div>
    </DocsDivider>
  );
}

export default DocsEN;