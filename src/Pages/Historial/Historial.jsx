import { useState } from "react";
import Header from "../../Componentes/Header/Header";
import Nav from "../../Componentes/Nav/Nav";
import TablaPacientes from "../../Componentes/TablaPacientes/TablaPacientes";


function Historial() {
  // eslint-disable-next-line no-unused-vars
  const [historial, setHistorial] = useState(true)
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
export default Historial;
