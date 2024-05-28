import { DataGrid } from "@mui/x-data-grid";
import "./pacientes.css";
import pacientes from "../../../info.js";
import PacientesModal from "../ModalPacientes/ModalPacientes.jsx";
import { useState } from "react";
import { Button } from "@mui/material";

function TablaPacientes() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const handleShowModal = (patient) => {
    setSelectedPatient(patient);
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
          <button
            className="action btn-login"
            onClick={() => {
              handleShowModal(params.row)
            }}
          >
            Ver
          </button>
          <button
            className="action btn-red btn-login"
            onClick={() => {
              console.log("Button clicked:", params.row.id);
            }}
          >
            X
          </button>
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
    vacunado: paciente.vacunado,
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
      />
      <Button
        sx={{
          width: "200px",
          alignSelf: "flex-end",
          fontSize: "15px",
          color: "white",
          backgroundColor: "black",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Nuevo Paciente
      </Button>
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
export default TablaPacientes;
