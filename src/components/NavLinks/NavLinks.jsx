import React from "react";
import NavCSS from "./NavLinks.module.css";

export const NavLinks = ({
  scrollToSection,
  heroRef,
  aboutRef,
  brandsRef,
  productRef,
  contactRef,
}) => {
  return (
    <>
      <div className={`${NavCSS.navBarLinks}`}>
        <button
          onClick={() => scrollToSection(heroRef)}
          className={`${NavCSS.navLink}`}
        >
          INICIO
        </button>
        <button
          onClick={() => scrollToSection(aboutRef)}
          className={`${NavCSS.navLink}`}
        >
          CONÓCENOS
        </button>
        <button
          onClick={() => scrollToSection(brandsRef)}
          className={`${NavCSS.navLink}`}
        >
          MARCAS
        </button>
        <button
          onClick={() => scrollToSection(productRef)}
          className={`${NavCSS.navLink}`}
        >
          PRODUCTOS
        </button>
        <button
          onClick={() => scrollToSection(contactRef)}
          className={`${NavCSS.navLink}`}
        >
          CONTÁCTANOS
        </button>
      </div>
    </>
  );
};
