/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, Controller } from "react-hook-form";
import {
  agregarPropietarios,
  modificarPropietarios,
} from "../../Api/Rule_Api_Propietario";

const PropietariosModal = ({
  open,
  handleClose,
  ownerData,
  newOwner,
  hideButton,
  entityId,
}) => {
  const { control, handleSubmit, reset } = useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (ownerData) {
      reset(ownerData);
      setIsEditing(false);
    } else if (newOwner) {
      reset({
        propietario: "",
        telefono: "",
        socio: false,
        numeroSocio: "",
        telefonoSecundario: "",
        email: ""
      });
      setIsEditing(true);
    }
  }, [ownerData, newOwner, reset]);

  const handleEdit = async (data) => {
    try {
      await modificarPropietarios(data, entityId);
      setSuccessMessage("Propietario modificado con éxito");
      setIsEditing(false);
      setTimeout(() => {
        handleClose();
        handleCloseSnackbar();
      }, 3000);
    } catch (error) {
      setErrorMessage("Error al modificar propietario");
      console.error("Error al modificar propietario:", error);
    }
  };

  const onSubmit = async (data) => {
    try {
      await agregarPropietarios(data);
      setSuccessMessage("Propietario agregado con éxito");
      setIsEditing(false);
      setTimeout(() => {
        handleClose();
        handleCloseSnackbar();
      }, 3000);
    } catch (error) {
      setErrorMessage("Error al agregar propietario");
      console.error("Error al agregar propietario:", error);
    }
  };

  const handleCancel = () => {
    if (newOwner) {
      reset({});
    } else {
      reset(ownerData);
    }
    setIsEditing(false);
    handleClose();
  };

  const handleCloseSnackbar = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box
          className="text-modal"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ fontSize: 30 }} variant="h6" component="h2">
            {newOwner
              ? "Agregar Nuevo Propietario"
              : "Información del Propietario"}
          </Typography>
          <Box
            component="form"
            sx={{ mt: 2 }}
            onSubmit={handleSubmit(newOwner ? onSubmit : handleEdit)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="propietario"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Propietario"
                      InputProps={{
                        readOnly: !isEditing,
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="telefono"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Teléfono"
                      type="number"
                      InputProps={{
                        readOnly: !isEditing,
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="telefonoSecundario"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Teléfono Secundario"
                      type="number"
                      InputProps={{
                        readOnly: !isEditing,
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Correo Electronico"
                      type="email"
                      InputProps={{
                        readOnly: !isEditing,
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="socio"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...field}
                          checked={field.value || false}
                          disabled={!isEditing}
                        />
                      }
                      label="Socio"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="numeroSocio"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Número de Socio"
                      type="number"
                      InputProps={{
                        readOnly: !isEditing,
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>
            {!hideButton && (
              <Box sx={{ mt: 3, textAlign: "right" }}>
                {newOwner || isEditing ? (
                  <>
                    <Button
                      variant="contained"
                      onClick={handleCancel}
                      sx={{
                        mr: 1,
                        backgroundColor: "rgb(251, 65, 65)",
                        ":hover": {
                          backgroundColor: "#f56363",
                        },
                      }}
                    >
                      Cancelar
                    </Button>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        mr: 1,
                        backgroundColor: "var(--primario)",
                        ":hover": {
                          backgroundColor: "#35c4bf",
                        },
                      }}
                    >
                      {newOwner ? "Guardar" : "Actualizar"}
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="contained"
                    onClick={() => setIsEditing(true)}
                    sx={{
                      backgroundColor: "var(--primario)",
                      ":hover": {
                        backgroundColor: "#35c4bf",
                      },
                    }}
                  >
                    Editar
                  </Button>
                )}
              </Box>
            )}
          </Box>
        </Box>
      </Modal>
      <Snackbar open={!!successMessage} onClose={handleCloseSnackbar}>
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ fontSize: "15px", height: "70px" }}
        >
          {successMessage}
        </Alert>
      </Snackbar>
      <Snackbar open={!!errorMessage} onClose={handleCloseSnackbar}>
        <Alert
          sx={{ fontSize: "15px", height: "70px" }}
          onClose={handleCloseSnackbar}
          severity="error"
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default PropietariosModal;
