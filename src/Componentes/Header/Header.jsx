import { CiLogout } from "react-icons/ci";
import "./header.css";
function Header() {
  return (
    <>
      <header className="header">
        <div className="search-container"></div>
        <div className="dropdown">
          <button className="dropdown-button">
            <CiLogout className="icon" />
          </button>
        </div>
      </header>
    </>
  );
}
export default Header;
