import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Principal from "./Pages/Pacientes/Principal.jsx";
import Historial from "./Pages/Historial/Historial.jsx";
import HistorialClinico from "./Pages/Historial/HistorialClinico/HistorialClinico.jsx";
import Citas from "./Pages/Citas/Citas.jsx";
import Propietarios from "./Pages/Propietarios/Propietarios.jsx";

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "pagePacientes",
    element: (
      <ProtectedRoute>
        <Principal />
      </ProtectedRoute>
    ),
  },
  {
    path: "pagePropietarios",
    element: (
      <ProtectedRoute>
        <Propietarios />
      </ProtectedRoute>
    ),
  },
  {
    path: "pageHistorial",
    element: (
      <ProtectedRoute>
        <Historial />
      </ProtectedRoute>
    ),
  },
  {
    path: "pageHistorial/historialClinico",
    element: (
      <ProtectedRoute>
        <HistorialClinico />
      </ProtectedRoute>
    ),
  },
  {
    path: "pageCitas",
    element: (
      <ProtectedRoute>
        <Citas />
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
