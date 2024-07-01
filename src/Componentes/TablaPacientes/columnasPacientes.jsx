import {
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";

export const columnasPacientes = (
  handleShowModal,
  handleDeleteModalOpen,
  setPacienteId,
) => {
  return [
    {
      field: "nombreAnimal",
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
      headerName: "Sexo",
      flex: 1,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "fechaNacimiento",
      headerName: "Fecha de Nacimiento ",
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
                width: "80px",
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
