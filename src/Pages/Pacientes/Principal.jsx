import { useState } from "react";
import Header from "../../Componentes/Header/Header";
import Nav from "../../Componentes/Nav/Nav";
import "./principal.css";
import Tabla from "../../Componentes/TablaPacientes/Tabla";
import {eliminarPaciente, getListaPacientes} from '../../Api/Rule_Api_Pacientes'
import PacientesModal from '../../Componentes/ModalPacientes/ModalPacientes'
import { columnasPacientes } from "../../Componentes/TablaPacientes/columnasPacientes";

function Principal() {
  // eslint-disable-next-line no-unused-vars
  const [historial, setHistorial] = useState(false);
  const [paciente, setpaciente] = useState(true);
  return (
    <div className="cont-principal">
      <Nav />
      <div className="cont-header-main">
        <Header />
        <Tabla eliminarEntidad={eliminarPaciente} entityModal={<PacientesModal/>} generateColumns={columnasPacientes} getData={getListaPacientes} historial={historial} paciente={paciente} />
      </div>
    </div>
  );
}
export default Principal;
