import {
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";

export const columnasPropietarios = (
  handleShowModalPatient,
  handleShowModal,
  handleDeleteModalOpen,
  setPacienteId,
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return [
    {
      field: "propietario",
      headerName: "Propietario",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "telefono",
      headerName: "Numero de teléfono",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "telefonoSecundario",
      headerName: "Teléfono secundario",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "email",
      headerName: "Correo electronico",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "action",
      headerName: "Acciones",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => (
        <GridToolbarContainer>
          <GridToolbarFilterButton />
        </GridToolbarContainer>
      ),
      renderCell: (params) => (
        <Box>
          <Box>
            <Button
              sx={{
                height: "35px",
                fontSize: "15px",
                color: "white",
                fontWeight: "bold",
                backgroundColor: "var(--primario)",
                ":hover": {
                  backgroundColor: "#35c4bf",
                },
              }}
              onClick={() => {
                setPacienteId(params.row.id);
                handleShowModalPatient(params.row);
              }}
            >
              + paciente
            </Button>
            <Button
              sx={{
                height: "35px",
                fontSize: "15px",
                color: "white",
                fontWeight: "bold",
                marginLeft: "10px",
                backgroundColor: "var(--primario)",
                ":hover": {
                  backgroundColor: "#35c4bf",
                },
              }}
              onClick={() => {
                setPacienteId(params.row.id);
                handleShowModal(params.row);
              }}
            >
              Ver
            </Button>

            <Button
              sx={{
                height: "35px",
                fontSize: "15px",
                color: "white",
                fontWeight: "bold",
                marginLeft: "10px",
                backgroundColor: " rgb(251, 65, 65)",
                ":hover": {
                  backgroundColor: "#f56363",
                },
              }}
              onClick={() => {
                setPacienteId(params.row.id);
                handleDeleteModalOpen();
              }}
            >
              X
            </Button>
          </Box>
        </Box>
      ),
    },
  ];
};
