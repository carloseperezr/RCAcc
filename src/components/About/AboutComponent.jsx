import React, { useRef } from "react";
import AboutCSS from "./About.module.css";
import { Slide } from "react-awesome-reveal";

const AboutComponent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`${AboutCSS.aboutContainer}`}>
      <Slide direction="up" triggerOnce={true}>
        <div className={`${AboutCSS.textWrapper}`}>
          <div className={`${AboutCSS.aboutTitle}`}>
            <h1>RCAutoacc</h1>
          </div>
          <div className={`${AboutCSS.aboutText}`}>
            <p>
              Bienvenido a RCAcc, la casa matriz de Aderco y Naoevo, donde la
              excelencia y la pasión por los accesorios para vehículos se
              encuentran. En RCAcc, nos enorgullece ofrecer productos de la más
              alta calidad diseñados para mejorar y personalizar tu experiencia
              de conducción. Nos destacamos por la cuidada selección de nuestros
              productos, garantizando durabilidad, funcionalidad y estilo
              inigualable.
            </p>
          </div>
        </div>
      </Slide>
    </div>
  );
});

export default AboutComponent;
