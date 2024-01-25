import HeroCSS from "./Hero.module.css";
import { Logo } from "../Logo/Logo";

export const HeroContainer = () => {
  return (
    <div className={`${HeroCSS.heroContainer}`}>
      <div className={`${HeroCSS.heroTextWrapper}`}>
        <div className={`${HeroCSS.bgLogo}`}>
          <Logo type={"white"} />
        </div>
        <div className={`${HeroCSS.heroText}`}>
          <h1>Autoaccesorios de la más alta calidad en un solo lugar</h1>
        </div>
      </div>
      <div className={`${HeroCSS.heroFigures}`}>
        <span className={`${HeroCSS.span1}`}></span>
        <span className={`${HeroCSS.span2}`}></span>
        <span className={`${HeroCSS.span3}`}></span>
      </div>
    </div>
  );
};
