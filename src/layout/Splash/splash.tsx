import React, {useCallback, useEffect, useRef, useState} from 'react';
import { SplashWrapper, Tint } from "./SplashStyles";
import SplashBackground from "../../assets/img/splash-background.png";
import CountUp from "../../utils/CountUp";
import ProgressBar from "../../component/progressbar/ProgressBar";

const IceBreakingTexts = [
  {
    title: "나를 보여줄 수 있는 NFT를 찾아보세요!",
    desc: "나의 취향/정체성을 잘 반영하는 NFT를 찾는다면 당신도 Web3.0 인☆싸"
  },
  {
    title: "알고 계셨나요?",
    desc: "한국의 레게 힙합 뮤지션 ‘스컬’은 샌드박스의 Land를 9개 인수했습니다. 매입한 ‘사자랜드’에서 콘서트도 열고 팬미팅도 연다고 합니다.",
  },
  {
    title: "알고 계셨나요?",
    desc: "샌드박스의 Voxel 캐릭터를 만들 수 있는 VoxEdit은 무료배포 중 입니다. 나만의 NFT를 만들고 판매해서 수익을 낼 수 도 있다고 합니다.",
  },
  {
    title: "알고 계셨나요?",
    desc: "삼성은 13개의 Web3 기업에 투자하면서 상위 100개 기업 중 가장 많은 수로 투자했습니다. -2022.08 기준",
  },
  {
    title: "알고 계셨나요?",
    desc: "NFT 담보로 대출을 도와주는 밴드다오도 있습니다! 최저가의 30~40%를 대출할 수 있다고 합니다.",
  }
];

interface Props {
  className?: string;
  callbackProgress?: (progress: number) => void;
  callbackImgWidth: (width: number) => void;
}
const Splash: React.FC<Props> = ({ className, callbackProgress, callbackImgWidth }) => {
  const [progress, setProgress] = useState(0);
  const [iceBreakingIndex , setIceBreakingIndex] = useState(0);
  const tintRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const onLoadingProgress = useCallback((currentProgress: number) => {
    setProgress(currentProgress);
  }, []);

  const getRandomIceBrakingObject = useCallback(() => {
    const n = IceBreakingTexts.length;
    setIceBreakingIndex(Math.floor(Math.random() * n));
  }, []);

  useEffect(() => {
    return () => {
      getRandomIceBrakingObject();
    }
  }, [getRandomIceBrakingObject, iceBreakingIndex]);

  useEffect(() => {
    callbackProgress && callbackProgress(progress);
    callbackImgWidth(imgRef.current?.clientWidth || 0);
  }, [callbackProgress, progress, callbackImgWidth]);

  useEffect(() => {
    if (tintRef.current && progress === 1) {
      tintRef.current.className += " hidden";
    }
  }, [progress]);

  return (
    <SplashWrapper className={className}>
      <Tint ref={tintRef}>
        <CountUp
          className={"stencil-128"}
          end={100}
          duration={10000}
          suffix={" %"}
          callback={(progress) => {
            onLoadingProgress(progress);
          }}
        />
        <div className={"bottomContainer"}>
          <div className={"progressBar"}>
            <ProgressBar progress={progress * 100} />
          </div>
          <div className={"IceBreaking"}>
            <span className={"bold-36"}>{IceBreakingTexts[iceBreakingIndex]?.title}</span>
            <span className={"normal-24"}>{IceBreakingTexts[iceBreakingIndex]?.desc}</span>
          </div>
        </div>
      </Tint>
      <img className={`side left`} src={SplashBackground} alt={"background"} />
      <img src={SplashBackground} alt={"background"} ref={imgRef} />
      <img className={`side right`} src={SplashBackground} alt={"background"} />
    </SplashWrapper>
  );
}

export default Splash;