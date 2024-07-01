import { FaDog, FaCalendarAlt} from "react-icons/fa";
import { FaRegClipboard } from "react-icons/fa6";
import { IoPersonAddSharp } from "react-icons/io5";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="sidebar-header">
            <img
              className="sidebar-logo"
              src="/asets/logo_veterinaria-sinFondo.png"
              alt="logo"
            />
          </div>
          <div className="sidebar-body">
            <nav className="nav">
            <Link style={{ textDecoration: "none" }} to={"/pagePropietarios"}>
                <a className="nav-link" href="#">
                  <IoPersonAddSharp className="icon" />
                  Propietarios
                </a>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/pagePacientes"}>
                <a className="nav-link" href="#">
                  <FaDog className="icon" />
                  Pacientes
                </a>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/pageHistorial"}>
                <a className="nav-link" href="#">
                  <FaRegClipboard className="icon" />
                  Historial Clínico
                </a>
              </Link>
              <Link to={"/pageCitas"} style={{ textDecoration: "none" }}>
                <a className="nav-link" href="#">
                  <FaCalendarAlt className="icon" />
                  Citas
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="main-content"></div>
    </div>
  );
}

export default Nav;
