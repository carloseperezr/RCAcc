import React from "react";
import WSButton from "../../../public/images/whatsapp.png";
import WhatsAppButtonCSS from "./WhatsApp.module.css";

const WhatsAppButton = ({ phoneNumber }) => {
  const handleClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className={`${WhatsAppButtonCSS.whatsapButton}`} onClick={handleClick}>
      <img src={WSButton} alt="WhatsApp" />
    </div>
  );
};

export default WhatsAppButton;
