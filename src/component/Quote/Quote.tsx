import React from "react";
import {QuoteWrapper} from "./QuoteStyles";

interface Props {
  className?: string;
  hlcolor?: string;
  children: React.ReactNode;
}

const Quote: React.FC<Props> = ({ className, hlcolor, children }) => {
  return (
    <QuoteWrapper className={className} hlcolor={hlcolor}>
      {children}
    </QuoteWrapper>
  )
}

export default Quote;