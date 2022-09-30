import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useMetaMask} from "../../../utils/useMetaMask";
import {ReactComponent as Logo} from "../../../assets/svg/Logo_white.svg";
import Button from "../../../component/button/button";
import {ArticleLayout, DocsDivider} from "../styles";
import ArticleNav from "../../../component/articlenav/ArticleNav";
import useMouseInteractive from "../../../utils/useMouseInteractive";

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
  }, [clearAccount, connectWithMetaMask]);

  return (
    <DocsDivider onWheel={showHeader}>
      <Logo ref={svgRef} />
      <header className={"nav"} ref={headerRef}>
        <div className={"update-container"}>
          <span className={"bold-24"} style={{ letterSpacing: -0.17 }}>Last Updated</span>
          <span className={"normal-24"}>30 September, 2022</span>
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
          <span className={`stencil-64`}>Ahoooy!🥌</span>
          <span className={`normal-24`}>This web provides you with free minting functions very easily WITHOUT any difficult words.
            <br />I hope this web would be a bunch of kinder service than any other Web3.0 sites.</span>
          <span className={"bold-36"}>♻️ Environment</span>
          <span className={"normal-24"}>
            We recommend you prepare these kind of environment setting. <br />
            <ul className={"red-highlight"}>
              <li>Chrome</li>
              <li>Remix</li>
              <li>React v18.0 (If you need your smart contract on website.)</li>
            </ul>
            <br />
            <span className={"normal-24"}>
              If you wanna set up such a kind of abvoe envs, please click each
              hyperlink and read a full guide. </span>
          </span>
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