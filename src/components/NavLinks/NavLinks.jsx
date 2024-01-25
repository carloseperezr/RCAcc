import React from "react";
import NavCSS from "./NavLinks.module.css";

export const NavLinks = ({ text, direction }) => {
  return (
    <a className={`${NavCSS.navLink}`} href={direction}>
      {text}
    </a>
  );
};
