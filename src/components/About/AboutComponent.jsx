import React, { useRef } from "react";
import AboutCSS from "./About.module.css";
import Fade from "react-reveal/Fade";

const AboutComponent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`${AboutCSS.aboutContainer}`}>
      <Fade bottom>
        <div className={`${AboutCSS.textWrapper}`}>
          <div className={`${AboutCSS.aboutTitle}`}>
            <h1>Conocenos</h1>
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

            {/* <p>
            En RCAcc, entendemos que la satisfacción del cliente es la clave de
            nuestro éxito. Por eso, nos comprometemos a brindarte un servicio
            excepcional desde el momento en que eliges nuestros accesorios.
            Nuestro equipo dedicado está aquí para asistirte, responder a tus
            preguntas y garantizar que encuentres exactamente lo que necesitas.
            En RCAcc, no solo distribuimos accesorios para vehículos, sino
            también experiencias que transforman tu conducción. Descubre la
            calidad que nos distingue y experimenta la diferencia de elegir lo
            mejor para tu vehículo en RCAcc.
          </p> */}
          </div>
        </div>
      </Fade>
    </div>
  );
});

export default AboutComponent;
