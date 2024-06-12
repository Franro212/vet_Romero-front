import { CiLogout } from "react-icons/ci";
import "./header.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const closeSesion = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <header className="header">
        <div className="search-container"></div>
        <div className="dropdown">
          <button onClick={closeSesion} className="dropdown-button">
            <CiLogout className="icon" />
          </button>
        </div>
      </header>
    </>
  );
}
export default Header;
