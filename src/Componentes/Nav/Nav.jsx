import { FaDog, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { FaRegClipboard } from "react-icons/fa6";
import "./nav.css";

function Nav() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="sidebar-header">
            <a className="sidebar-link" href="#">
              <img  className='sidebar-logo' src="asets/logo_veterinaria-sinFondo.png" alt="logo" />
            </a>
          </div>
          <div className="sidebar-body">
            <nav className="nav">
              <a className="nav-link" href="#">
                <FaDog className="icon" />
                Pacientes
              </a>
              <a className="nav-link" href="#">
                <FaCalendarAlt className="icon" />
                Citas
              </a>
              <a className="nav-link" href="#">
                <FaRegClipboard className="icon" />
                Fichas
              </a>
              <a className="nav-link" href="#">
                <FaUsers className="icon" />
                Empleados
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="main-content"></div>
    </div>
  );
}

export default Nav;
