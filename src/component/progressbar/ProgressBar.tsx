import React from 'react';
import {FillingLine, TransparentLine} from "./ProgressBarStyles";

const ProgressBar = () => {
  return (
    <TransparentLine>
      <FillingLine />
    </TransparentLine>
  );
};

export default ProgressBar;