import Header from "../../Componentes/Header/Header";
import Nav from "../../Componentes/Nav/Nav";
import TablaHistorial from "../../Componentes/TablaHistorial/TablaHistorial";


function Historial() {
  return (
    <div className="cont-principal">
      <Nav />
      <div className="cont-header-main">
        <Header />
        <TablaHistorial />
      </div>
    </div>
  );
}
export default Historial;
