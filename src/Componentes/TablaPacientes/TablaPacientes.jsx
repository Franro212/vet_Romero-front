import { DataGrid } from "@mui/x-data-grid";
import "./pacientes.css";
import pacientes from "../../../info.js";
import PacientesModal from "../ModalPacientes/ModalPacientes.jsx";
import { useState } from "react";
import { Box, Button } from "@mui/material";

function TablaPacientes() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [newPatient, setNewPatient]= useState(false);
  const handleShow = () =>{
    setNewPatient(true);
    setShowModal(true)
  }
  const handleShowModal = (patient) => {
    setSelectedPatient(patient);
    setNewPatient(false);
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
        <Box >
          <Button
            sx={{
              width: "80px",
              height: "35px",
              fontSize: "15px",
              color: "white",
              backgroundColor: "#000000",
              fontWeight: "bold",
              ":hover": {
                backgroundColor: "#6B7280",
              },
            }}
            onClick={() => {
              handleShowModal(params.row);
            }}
          >
            Ver
          </Button>
          <Button
            sx={{
              height: "35px",
              fontSize: "15px",
              backgroundColor: " rgb(251, 65, 65)",
              color: "white",
              fontWeight: "bold",
              marginLeft:"10px",
              ":hover": {
                backgroundColor: "#f56363",
              },
            }}
            onClick={() => {
              console.log("Button clicked:", params.row.id);
            }}
          >
            X
          </Button>
        </Box>
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
        newPatient={newPatient}
      />
      <Button
       onClick={() => {
        handleShow();
      }}
        sx={{
          width: "200px",
          alignSelf: "flex-end",
          fontSize: "15px",
          color: "white",
          backgroundColor: "#000000",
          fontWeight: "bold",
          marginBottom: "10px",
          ":hover": {
            backgroundColor: "#6B7280",
          },
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
