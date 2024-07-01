import { useState } from "react";
import Header from "../../Componentes/Header/Header";
import Nav from "../../Componentes/Nav/Nav";
import Tabla from "../../Componentes/TablaPacientes/Tabla";
import {
  getListaPropietarios,
  eliminarPropietarios,
} from "../../Api/Rule_Api_Propietario";
import PropietariosModal from "../../Componentes/ModalPropietarios/ModalPropietario";
import {columnasPropietarios} from "../../Componentes/TablaPacientes/columnasPropietarios";
import PacientesModal from "../../Componentes/ModalPacientes/ModalPacientes";

function Propietarios() {
  // eslint-disable-next-line no-unused-vars
  const [historial, setHistorial] = useState(false);
  return (
    <div className="cont-principal">
      <Nav />
      <div className="cont-header-main">
        <Header />
        <Tabla
        entityModalPatient={<PacientesModal/>}
          eliminarEntidad={eliminarPropietarios}
          entityModal={<PropietariosModal />}
          generateColumns={columnasPropietarios}
          getData={getListaPropietarios}
          historial={historial}
        />
      </div>
    </div>
  );
}
export default Propietarios;
