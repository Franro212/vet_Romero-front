/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { format } from "date-fns";
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
  agregarPacientes,
  modificarPaciente,
} from "../../Api/Rule_Api_Pacientes";
import "./modalPacientes.css";

const PacientesModal = ({
  open,
  handleClose,
  ownerData,
  newOwner,
  hideButton,
  entityId,
}) => {
  const { control, handleSubmit, reset, watch, setValue } = useForm();
  const [isEditing, setIsEditing] = useState(newOwner);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (ownerData) {
      const formattedData = {
        ...ownerData,
        fechaNacimiento: ownerData.fechaNacimiento
          ? format(new Date(ownerData.fechaNacimiento), "yyyy-MM-dd")
          : "",
        fechaVacunado: ownerData.fechaVacunado
          ? format(new Date(ownerData.fechaVacunado), "yyyy-MM-dd")
          : "",
        fechaDesparasitado: ownerData.fechaDesparasitado
          ? format(new Date(ownerData.fechaDesparasitado), "yyyy-MM-dd")
          : "",
        fechaAntipulgas: ownerData.fechaAntipulgas
          ? format(new Date(ownerData.fechaAntipulgas), "yyyy-MM-dd")
          : "",
      };
      reset(formattedData);
      setIsEditing(false);
    } else if (newOwner) {
      reset({
        nombreAnimal: "",
        especie: "",
        fechaNacimiento: "",
        sexo: "",
        castrado: false,
        vacunado: false,
        fechaVacunado: "",
        desparasitado: false,
        fechaDesparasitado: "",
        antipulgas: false,
        fechaAntipulgas: "",
      });
      setValue("propietarioId", entityId);
      setIsEditing(true);
    }
  }, [ownerData, newOwner, reset, setValue, entityId]);

  const handleEdit = async (data) => {
    try {
      await modificarPaciente(data, entityId);
      setSuccessMessage("Paciente modificado con éxito");
      setIsEditing(false);
      setTimeout(() => {
        handleClose();
        handleCloseSnackbar();
      }, 3000);
    } catch (error) {
      setErrorMessage("Error al modificar paciente");
      console.error("Error al modificar paciente:", error);
    }
  };

  const onSubmit = async (data) => {
    try {
      await agregarPacientes(data);
      setSuccessMessage("Paciente agregado con éxito");
      setIsEditing(false);
      setTimeout(() => {
        handleClose();
        handleCloseSnackbar();
      }, 3000);
    } catch (error) {
      setErrorMessage("Error al agregar paciente");
      console.error("Error al agregar paciente:", error);
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

  const vacunado = watch("vacunado");
  const desparasitado = watch("desparasitado");
  const antipulgas = watch("antipulgas");

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
            {newOwner ? "Agregar Nuevo Paciente" : "Información del Paciente"}
          </Typography>
          <Box
            component="form"
            sx={{ mt: 2 }}
            onSubmit={handleSubmit(newOwner ? onSubmit : handleEdit)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="nombreAnimal"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Nombre del Animal"
                      InputProps={{
                        readOnly: !isEditing,
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="especie"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Especie"
                      InputProps={{
                        readOnly: !isEditing,
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="fechaNacimiento"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Fecha de Nacimiento"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        readOnly: !isEditing,
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="sexo"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Sexo"
                      InputProps={{
                        readOnly: !isEditing,
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="castrado"
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
                      label="Castrado"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="vacunado"
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
                      label="Vacunado"
                    />
                  )}
                />
                {vacunado && (
                  <Controller
                    name="fechaVacunado"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        type="date"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{
                          readOnly: !isEditing,
                        }}
                      />
                    )}
                  />
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="desparasitado"
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
                      label="Desparasitado"
                    />
                  )}
                />
                {desparasitado && (
                  <Controller
                    name="fechaDesparasitado"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        type="date"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{
                          readOnly: !isEditing,
                        }}
                      />
                    )}
                  />
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="antipulgas"
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
                      label="Antipulgas/Garrapatas"
                    />
                  )}
                />
                {antipulgas && (
                  <Controller
                    name="fechaAntipulgas"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        type="date"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        InputProps={{
                          readOnly: !isEditing,
                        }}
                      />
                    )}
                  />
                )}
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
      <Snackbar
        open={!!successMessage}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ fontSize: "15px", height: "70px" }}
        >
          {successMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        open={!!errorMessage}
        onClose={handleCloseSnackbar}
      >
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

export default PacientesModal;
