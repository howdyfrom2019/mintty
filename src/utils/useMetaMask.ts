import {useState, useEffect, useCallback} from "react";
// return => [isMetaMaskInstalled, isChromeBrowser, isMobile];
export const useMetaMask = (): [boolean, boolean, boolean] => {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const [isChrome, setIsChrome] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkMetaMaskSetting = useCallback(() => {
    const env = navigator.userAgent.toLowerCase();
    const mobile = /iphone|ipad|ipod|android|mobi/i.test(env);
    setIsChrome(env.indexOf("chrome") > -1);
    setIsMobile(mobile);
    if (!mobile && window.ethereum.isMetaMask) {
      setIsMetaMaskInstalled(true);
    }
  }, []);

  useEffect(() => {
    checkMetaMaskSetting();
  }, [checkMetaMaskSetting]);

  return [isMetaMaskInstalled, isChrome, isMobile];
};