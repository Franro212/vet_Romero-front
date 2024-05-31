import Calendario from "../../Componentes/Calendario/Calendario";
import Header from "../../Componentes/Header/Header";
import Nav from "../../Componentes/Nav/Nav";


function Citas() {
  return (
    <div className="cont-principal">
      <Nav />
      <div className="cont-header-main">
        <Header />
        <Calendario />
      </div>
    </div>
  );
}
export default Citas;
