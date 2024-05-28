import { DataGrid } from "@mui/x-data-grid";

import pacientes from "../../../info.js";
import PacientesModal from "../ModalPacientes/ModalPacientes.jsx";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function TablaHistorial() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [hideButton, setHideButton] = useState(false);
  const navigate = useNavigate();
  const handleShowModal = (patient) => {
    setSelectedPatient(patient);
    setHideButton(true)
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPatient(null);
  };
  const columns = [
    {
      field: "propietario",
      headerName: "Propietario",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "nombre",
      headerName: "Nombre del Animal",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "especie",
      headerName: "Especie",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "sexo",
      disableColumnMenu: true,
      headerName: "Sexo",
      flex: 1,
      sortable: false,
    },
    {
      field: "action",
      headerName: "Acciones",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <div className="cont-button">
          <Button
            sx={{
              width: "80px",
              height: "35px",
              fontSize: "11px",
              color: "#ffffff",
              backgroundColor: "#000000",
              fontWeight: "bold",
              ":hover": {
                backgroundColor: "#6B7280",
              },
            }}
            className="action btn-login"
            onClick={() => {
              handleShowModal(params.row);
            }}
          >
            Perfil
          </Button>
          <Button
            sx={{
              width: "80px",
              height: "35px",
              fontSize: "11px",
              color: "#ffffff",
              marginLeft:"10px",
              backgroundColor: "#000000",
              fontWeight: "bold",
              ":hover": {
                backgroundColor: "#6B7280",
              },
            }}
            className="action btn-red btn-login"
            onClick={() => {
              navigate("historialClinico");
            }}
          >
            Historial
          </Button>
        </div>
      ),
    },
  ];

  const rows = pacientes.map((paciente) => ({
    id: paciente.id,
    propietario: paciente.propietario,
    nombre: paciente.nombre,
    especie: paciente.especie,
    sexo: paciente.sexo,
  }));
  const localeText = {
    footerTotalRows: "Filas Totales:",
    noRowsLabel: "No hay pacientes",
    errorOverlayDefaultLabel: "Ha ocurrido un error",
  };

  return (
    <div className="cont-tab">
      <PacientesModal
        open={showModal}
        handleClose={handleCloseModal}
        patientData={selectedPatient}
        isHistorial={true}
        hideButton={hideButton}
      />

      <DataGrid
        pageSize={rows.length}
        rows={rows}
        hideFooter={true}
        columns={columns}
        pagination={false}
        pageSizeOptions={[]}
        localeText={localeText}
        sx={{
          fontSize: "20px",
          "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
            {
              outline: "none",
            },
          " & .MuiDataGrid-cell": {
            textAlign: "center",
          },
          "& .MuiDataGrid-columnHeaderTitleContainer,": {
            justifyContent: "center",
          },
          "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
          "&.MuiDataGrid-filterForm css-1t5wrdm-MuiDataGrid-filterForm": {
            fontSize: "20px",
          },
          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "transparent",
          },
          "& .MuiDataGrid-row.Mui-selected:hover": {
            backgroundColor: "transparent",
          },
        }}
      />
    </div>
  );
}
export default TablaHistorial;
