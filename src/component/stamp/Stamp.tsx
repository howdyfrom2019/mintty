import React from 'react';
import {StampWrapper} from "./StampStyles";
import { ReactComponent as Arrow } from "../../assets/svg/stamp_border.svg";

const Stamp = () => {
   return (
     <StampWrapper>
       <Arrow className={"svg-arrow"} />
       <span className={"normal-24"}>Issued By</span>
       <span className={`bold-36 hover-effect`}>@Jaake</span>
       <Arrow className={`svg-arrow bottom`} />
     </StampWrapper>
   );
}

export default Stamp;