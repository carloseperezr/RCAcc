import FooterCSS from "./Footer.module.css";
import { Logo } from "../Logo/Logo";

export const FooterContainer = () => {
  return (
    <div className={`${FooterCSS.footerContainer}`}>
      <div className={`${FooterCSS.footerLogo}`}>
        <Logo type={"redgray"} />
      </div>
      <div className={`${FooterCSS.footerInfoWrapper}`}>
        <div className={`${FooterCSS.footerInfo}`}>
          <div className={`${FooterCSS.footerContact}`}>
            <p className={`${FooterCSS.footerTitle}`}>CONTACTANOS</p>
            <p className={`${FooterCSS.footerTextDetails}`}>+1 786 862 3868</p>
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
            <p className={`${FooterCSS.footerTextDetails}`}>iconos</p>
          </div>
        </div>
      </div>
    </div>
  );
};
