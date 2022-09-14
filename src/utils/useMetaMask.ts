import {useState, useEffect, useCallback} from "react";
// return => [isMetaMaskInstalled, isChromeBrowser, isMobile];
export const useMetaMask = (): [boolean, boolean, boolean] => {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const [isChrome, setIsChrome] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkMetaMaskSetting = useCallback(() => {
    if (window.ethereum.isMetaMask) {
      setIsMetaMaskInstalled(true);
    }

    const env = navigator.userAgent.toLowerCase();
    setIsChrome(env.indexOf("chrome") > -1);
    setIsMobile(/iphone|ipad|ipod|android|mobi/i.test(env));
  }, []);

  useEffect(() => {
    checkMetaMaskSetting();
  }, []);

  return [isMetaMaskInstalled, isChrome, isMobile];
};