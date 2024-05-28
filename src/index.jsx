import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Principal from "./Pages/Principal/Principal.jsx";
import Historial from "./Pages/Historial/Historial.jsx";
import HistorialClinico from "./Pages/Historial/HistorialClinico/HistorialClinico.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "pagePrincipal",
    element: <Principal />,
  },
  {
    path: "pageHistorial",
    element: <Historial/>,
  },
  {
    path: "pageHistorial/historialClinico",
    element: <HistorialClinico />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
