import { Link } from "react-router-dom";
import "./app.css";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

function App() {
  return (
    <div className="container_main">
      <div className="container_card">
        <img
          className="logo"
          src="/asets/logo_veterinaria-sinFondo.png"
          alt="Logo Veterinaria"
        />
        <h2 className="title-form">Inicio de sesion</h2>

        <div className="container_form">
          <form className="form-login" action="#" method="POST">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className=""
            />

            <label htmlFor="password" className="">
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className=""
            />

            <a href="#" className="">
              Forgot password?
            </a>

            <Link to={"/pagePrincipal"}>
              <button type="submit" className="btn-login">
                Enviar
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
