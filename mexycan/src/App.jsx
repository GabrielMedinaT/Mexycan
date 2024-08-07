// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./App.css";
import Inicio from "./Components/Inicio";
import Contacto from "./Components/Contacto";
import Menu from "./Components/Menu";

function App() {
  const [activeComponent, setActiveComponent] = useState("Inicio");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Inicio":
        return <Inicio />;
      case "Contacto":
        return <Contacto />;
      case "Menu":
        return <Menu />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div className="container">
      <div className="nav">
        <div className="Logo"></div>
        <h1>Mexycan</h1>
        <nav>
          <ul>
            <li onClick={() => setActiveComponent("Inicio")}>Inicio</li>
            <li onClick={() => setActiveComponent("Menu")}>Menu</li>
            <li onClick={() => setActiveComponent("Contacto")}>Contacto</li>
          </ul>
        </nav>
      </div>
      <div className="cuerpo">{renderComponent()}</div>
    </div>
  );
}

export default App;
