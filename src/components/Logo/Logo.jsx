import React from "react";
import LogoCSS from "./Logo.module.css";
import LogoNavDark from "../../../public/images/LOGO_black.png";
import LogoNavLight from "../../../public/images/LOGO_white.png";
import LogoNavRedGray from "../../../public/images/LOGO_red_gray.png";

export const Logo = ({ type }) => {
  return (
    <div className={`${LogoCSS.logo}`}>
      <img
        src={
          type === "dark"
            ? LogoNavDark
            : type === "white"
            ? LogoNavLight
            : type === "redgray"
            ? LogoNavRedGray
            : ""
        }
        alt="Logo"
      />
    </div>
  );
};
