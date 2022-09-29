import React, {useCallback, useEffect, useState} from 'react';
import {useMetaMask} from "../../../utils/useMetaMask";
import {ReactComponent as Logo} from "../../../assets/svg/Logo.svg";
import Button from "../../../component/button/button";
import {ArticleLayout, DocsDivider} from "../styles";
import ArticleNav from "../../../component/articlenav/ArticleNav";

const DocsEN = () => {
  const [isMetaMaskInstalled, isChrome, isMobile] = useMetaMask();
  const [metaMaskAddress, setMetaMaskAddress] = useState("0x0");

  const connectWithMetaMask = useCallback(async() => {
    if (!isMetaMaskInstalled && !isMobile) return;
    try {
      const account = await window.ethereum.request({ method: "eth_requestAccounts" });
      setMetaMaskAddress(account[0]);
    } catch (e: any) {
      if (e.code === 4001) console.log("user rejected.");
      else console.log("please install ethereum");
    }
  }, [isMetaMaskInstalled, isMobile]);

  const clearAccount = useCallback(() => {
    setMetaMaskAddress("0x0");
    console.log("address cleared");
  }, []);

  useEffect(() => {
    return () => {
      window.ethereum.on("connect", connectWithMetaMask);
      window.ethereum.on("disconnect", clearAccount);
    }
  });

  return (
    <DocsDivider>
      <header className={"nav"}>
        <Logo />
        <div className={"button-container"}>
          <Button btnType={"default"} animation>
            EN
          </Button>
          <Button
            btnType={"default"}
            animation
            style={{ maxWidth: 300 }}
            onClick={connectWithMetaMask}>
            {metaMaskAddress === "0x0" ? "Link With MetaMask" : metaMaskAddress}
          </Button>
        </div>
      </header>
      <ArticleLayout>
        <section className={"article-wrapper"}>
          <span className={`stencil-64`}>Ahoooy!🥌</span>
          <span className={`normal-24`}>This web provides you with free minting functions very easily WITHOUT any difficult words.
            <br /><br />I hope this web would be a bunch of kinder service than any other Web3.0 sites.</span>
        </section>
        <ArticleNav
          className={"aside-nav"}
          style={{ flex: 1 }}
          glowEffect
          upperLine
          underLine
          contents={[]} />
      </ArticleLayout>
    </DocsDivider>
  );
}

export default DocsEN;