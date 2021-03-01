import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <img src={isDark ? '/images/couscous/LogoTextNewDark.png' : '/images/couscous/LogoTextNewWhite.png'}/>
  )
};

export default Logo;
