import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img style={{ width: 32, height: 32 }} src="/images/couscous/logo.png" alt="logo" />
  );
};

export default Icon;
