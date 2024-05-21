import { FaSearch,} from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import './header.css'
function Header() {
  return (
    <>
      <header className="header">
        <div className="search-container">
          <form>
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                className="search-input"
                placeholder="Buscar pacientes..."
                type="search"
              />
            </div>
          </form>
        </div>
        <div className="dropdown">
          <button className="dropdown-button">
            <CiLogout className="icon"/>
          </button>
        </div>
      </header>
    </>
  );
}
export default Header;
