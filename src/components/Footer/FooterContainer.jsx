import React, { useRef } from "react";
import FooterCSS from "./Footer.module.css";
import { Logo } from "../Logo/Logo";
import Fade from "react-reveal/Fade";
import Aderco from "../../../public/images/aderco.png";
import ProLed from "../../../public/images/naoevo.png";

export const FooterContainer = React.forwardRef((props, ref) => {
  return (
    <Fade bottom>
      <div className={`${FooterCSS.footerContainer}`}>
        <div className={`${FooterCSS.footerLogo}`}>
          <Logo type={"redgray"} />
        </div>
        <div className={`${FooterCSS.footerInfoWrapper}`}>
          <div ref={ref} className={`${FooterCSS.footerInfo}`}>
            <div className={`${FooterCSS.footerContact}`}>
              <p className={`${FooterCSS.footerTitle}`}>CONTACTANOS</p>
              <p className={`${FooterCSS.footerTextDetails}`}>
                +1 786 862 3868
              </p>
              <p className={`${FooterCSS.footerTextDetails}`}>
                rcautoacc@gmail.com
              </p>
            </div>
          </div>
          <div className={`${FooterCSS.footerInfo}`}>
            <div className={`${FooterCSS.footerAddress}`}>
              <p className={`${FooterCSS.footerTitle}`}>DIRECCION</p>
              <p className={`${FooterCSS.footerTextDetails}`}>
                8200 NW 41ST STREET SUITE 315 DORAL, FL 33166
              </p>
            </div>
          </div>
          <div className={`${FooterCSS.footerInfo}`}>
            <div className={`${FooterCSS.footerSocial}`}>
              <p className={`${FooterCSS.footerTitle}`}>REDES SOCIALES</p>
              <p className={`${FooterCSS.footerTextDetails}`}>
                <div className={`${FooterCSS.iconLogo}`}>
                  <a href="https://www.instagram.com/aderco.ve">
                    <img src={Aderco} alt="AdercoLogo" />
                  </a>
                </div>
                <div className={`${FooterCSS.iconLogo}`}>
                  <a href="https://www.instagram.com/proledgroupve/">
                    <img src={ProLed} alt="NaoEvoLogo" />
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
});

export default FooterContainer;
