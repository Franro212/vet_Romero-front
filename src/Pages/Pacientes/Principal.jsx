import { useState } from "react";
import Header from "../../Componentes/Header/Header";
import Nav from "../../Componentes/Nav/Nav";
import TablaPacientes from "../../Componentes/TablaPacientes/TablaPacientes";
import "./principal.css";

function Principal() {
  // eslint-disable-next-line no-unused-vars
  const [historial, setHistorial] = useState(false)
  return (
    <div className="cont-principal">
      <Nav />
      <div className="cont-header-main">
        <Header />
        <TablaPacientes historial={historial}/>
      </div>
    </div>
  );
}
export default Principal;
