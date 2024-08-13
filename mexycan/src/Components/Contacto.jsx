// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Contacto.css";

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h1 className="contacto-heading">
        Para sus pedidos pulse{" "}
        <a
          href="https://wa.me/524497781615?text=Hola%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20de%20comida%20para%20llevar"
          target="_blank"
          rel="noopener noreferrer"
          className="contacto-link"
        >
          aquí
        </a>
      </h1>
      <div className="imagenes">
        <div className="croqueta"></div>
        <div className="tortilla"></div>
        <div className="torta"></div>
        <div className="tumaca"></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Contacto;
