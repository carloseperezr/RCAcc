import React, { useRef } from "react";
import HeroCSS from "./Hero.module.css";
import { Logo } from "../Logo/Logo";
import { Fade, Slide } from "react-awesome-reveal";

const HeroContainer = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`${HeroCSS.heroContainer}`}>
      <div className={`${HeroCSS.heroTextWrapper}`}>
        <div className={`${HeroCSS.bgLogo}`}>
          <Logo type={"white"} />
        </div>
        <div className={`${HeroCSS.heroText}`}>
          <Fade triggerOnce={true}>
            <h1>Autoaccesorios de la más alta calidad en un solo lugar.</h1>
          </Fade>
        </div>
      </div>
      <Slide direction="right" triggerOnce={true}>
        <div className={`${HeroCSS.heroFigures}`}>
          <span className={`${HeroCSS.span1}`}></span>
          <span className={`${HeroCSS.span2}`}></span>
          <span className={`${HeroCSS.span3}`}></span>
        </div>
      </Slide>
    </div>
  );
});

export default HeroContainer;
