import { useState } from "react";
import Header from "../../Componentes/Header/Header";
import Nav from "../../Componentes/Nav/Nav";
import Tabla from "../../Componentes/TablaPacientes/Tabla";

function Historial() {
  // eslint-disable-next-line no-unused-vars
  const [historial, setHistorial] = useState(true);
  return (
    <div className="cont-principal">
      <Nav />
      <div className="cont-header-main">
        <Header />
        <Tabla historial={historial} />
      </div>
    </div>
  );
}
export default Historial;
