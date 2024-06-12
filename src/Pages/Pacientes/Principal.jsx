import Header from "../../Componentes/Header/Header";
import Nav from "../../Componentes/Nav/Nav";
import TablaPacientes from "../../Componentes/TablaPacientes/TablaPacientes";
import "./principal.css";

function Principal() {
  return (
    <div className="cont-principal">
      <Nav />
      <div className="cont-header-main">
        <Header />
        <TablaPacientes />
      </div>
    </div>
  );
}
export default Principal;