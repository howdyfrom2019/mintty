import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useMetaMask } from "../../../utils/useMetaMask";
import { ReactComponent as Logo } from "../../../assets/svg/Logo_white.svg";
import { ReactComponent as MetaMask } from "../../../assets/svg/MetaMask.svg";
import Button from "../../../component/button/button";
import { ArticleLayout, DocsDivider } from "../styles";
import ArticleNav from "../../../component/articlenav/ArticleNav";
import useMouseInteractive from "../../../utils/useMouseInteractive";
import Line from "../../../component/line/Line";
import MetaMask1 from "../../../assets/img/metamask1.png";
import MetaMask2 from "../../../assets/img/metamask2.png";

const DocsEN = () => {
  const [isMetaMaskInstalled, isChrome, isMobile] = useMetaMask();
  const [metaMaskAddress, setMetaMaskAddress] = useState("0x0");
  const svgRef = useRef<SVGSVGElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  useMouseInteractive(svgRef, 16, true,0.02);
  
  const showHeader = useCallback((e: React.WheelEvent) => {
    if (!headerRef.current) return;
    if (e.deltaY > 0) {
      headerRef.current.style.transform = "translateY(calc(-100% - 5.6vw))";
    } else {
      headerRef.current.style.transform = "translateY(0)";
    }
  }, []);

  const connectWithMetaMaskMobile = useCallback(() => {
    const metaMaskAppDeepLink = "https://metamask.app.link/dapp/howdyfrom2019.github.io/mintty/";
    window.open(metaMaskAppDeepLink, "_self");
  }, []);

  const connectWithMetaMask = useCallback(async() => {
    if (isMobile) connectWithMetaMaskMobile();
    if (!isMetaMaskInstalled && !isMobile) return;
    try {
      const account = await window.ethereum.request({ method: "eth_requestAccounts" });
      setMetaMaskAddress(account[0]);
    } catch (e: any) {
      if (e.code === 4001) console.log("user rejected.");
      else console.log("please install ethereum");
    }
  }, [connectWithMetaMaskMobile, isMetaMaskInstalled, isMobile]);

  const clearAccount = useCallback(() => {
    setMetaMaskAddress("0x0");
    console.log("address cleared");
  }, []);

  // useEffect(() => {
  //   if (isMobile) return () => {};
  //   else return () => {
  //     window.ethereum.on("connect", connectWithMetaMask);
  //     window.ethereum.on("disconnect", clearAccount);
  //   }
  // }, [isMobile, clearAccount, connectWithMetaMask, connectWithMetaMaskMobile]);

  return (
    <DocsDivider onWheel={showHeader}>
      <Logo ref={svgRef} />
      <header className={"nav"} ref={headerRef}>
        <div className={"update-container"}>
          <span className={"bold-24"} style={{ letterSpacing: -0.17 }}>Last Updated</span>
          <span className={"normal-24"}>04 October, 2022</span>
        </div>
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
          <span className={`stencil-64 margin-bottom-48`}>Ahoooy!🥌</span>
          <span className={`normal-24`}>This web provides you with free minting functions very easily WITHOUT any difficult words.
            <br />I hope this web would be a bunch of kinder service than any other Web3.0 sites.</span>
          <span className={`bold-36 margin-bottom-24`}>♻️ Environment</span>
          <span className={"normal-24"}>
            We recommend you prepare these kind of environment setting. <br />
            <ul className={"red-highlight"}>
              <li><a href={"https://www.google.com/intl/ko_kr/chrome/"}>Chrome</a></li>
              <li><a href={"https://remix-project.org/"}>Remix</a></li>
              <li><a href={"https://ko.reactjs.org/"}>React v18.0 (If you need your smart contract on website.)</a></li>
            </ul>
            <br />
            <span className={"normal-24"}>
              If you wanna set up such a kind of above envs, please click each
              hyperlink and read a full guide. </span>
          </span>
          <Line height={1} className={`divider margin-top-down-64`} color={"rgba(229, 229, 229, 0.42)"} />
          <span className={`bold-48 flex-row margin-bottom-48`}>1. Ready to MetaMask
            <MetaMask style={{ marginLeft: 8 }} />
          </span>
          <span className={"normal-24 margin-bottom-24"}>When you access to a web 3.0 project, you have to have a
            account. Surprisingly, This can be easily added to extension
            of Chrome. Please follow me😊</span>
          <div className={"flex-row margin-bottom-48"} style={{ gap: 30 }}>
            <span className={`label normal-24`}>[Download Link]</span>
            <span className={`red-highlight normal-24`}>
              <a href={"https://metamask.io/"}>HERE WE GO!</a>
            </span>
          </div>
          <figure className={"full-screen"}>
            <img src={MetaMask1} alt={"metamask1"} />
          </figure>
          <span className={"normal-24 margin-bottom-48"}>Just add this app in your chrome.
            And then you can see this in your chrome extension plug-in.</span>
          <figure className={"full-screen margin-bottom-48"}>
            <img src={MetaMask2} alt={"metamask2"} />
          </figure>
          <span className={"bold-36 margin-bottom-24"}>💠 For test-net setting.</span>
          <span className={"normal-24"}>As you know, we should pay a gas fee when we deploy or
            modify data. So, we will use and test by Rinkeby(test-net).
            <br /><br />
            Let’s direct to MetaMask and move to<strong> [setting] - [advanced]</strong>
            and just activate “show test network”</span>
        </section>
        <ArticleNav
          className={"aside-nav"}
          glowEffect
          upperLine
          underLine
          contents={[]} />
      </ArticleLayout>
    </DocsDivider>
  );
}

export default DocsEN;