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
} from "@mui/material";
import "./modalPacientes.css";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, Controller } from "react-hook-form";
import {
  agregarPacientes,
  modificarPaciente,
} from "../../Api/Rule_Api_Pacientes";

const PacientesModal = ({
  open,
  handleClose,
  patientData,
  newPatient,
  hideButton,
  pacienteId,
}) => {
  const { control, handleSubmit, reset, watch } = useForm();
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    if (patientData) {
      const formattedData = {
        ...patientData,
        fechaNacimiento: patientData.fechaNacimiento
          ? format(new Date(patientData.fechaNacimiento), "yyyy-MM-dd")
          : "",
        fechaVacunado: patientData.fechaVacunado
          ? format(new Date(patientData.fechaVacunado), "yyyy-MM-dd")
          : "",
        fechaDesparasitado: patientData.fechaDesparasitado
          ? format(new Date(patientData.fechaDesparasitado), "yyyy-MM-dd")
          : "",
        fechaAntipulgas: patientData.fechaAntipulgas
          ? format(new Date(patientData.fechaAntipulgas), "yyyy-MM-dd")
          : "",
      };
      reset(formattedData);
      setIsEditing(false);
    } else if (newPatient) {
      reset({
        propietario: "",
        telefono: "",
        socio: false,
        numeroSocio: "",
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
      setIsEditing(true);
    }
  }, [patientData, newPatient, reset]);
  const handleEdit = async (data) => {
    try {
      await modificarPaciente(data, pacienteId);
      setIsEditing(false);
      handleClose();
    } catch (error) {
      console.error("Error al modificar paciente:", error);
    }
  };

  const onSubmit = async (data) => {
    try {
      await agregarPacientes(data);
      setIsEditing(false);
      handleClose();
    } catch (error) {
      console.error("Error al agregar paciente:", error);
    }
  };

  const handleCancel = () => {
    if (newPatient) {
      reset({});
    } else {
      reset(patientData);
    }
    setIsEditing(false);
    handleClose();
  };

  const vacunado = watch("vacunado");
  const desparasitado = watch("desparasitado");
  const antipulgas = watch("antipulgas");

  return (
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
          {newPatient ? "Agregar Nuevo Paciente" : "Información del Paciente"}
        </Typography>
        <Box
          component="form"
          sx={{ mt: 2 }}
          onSubmit={handleSubmit(newPatient ? onSubmit : handleEdit)}
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
                    InputProps={{
                      readOnly: !isEditing,
                    }}
                  />
                )}
              />
            </Grid>
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
              {newPatient || isEditing ? (
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
                    {newPatient ? "Guardar" : "Actualizar"}
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
  );
};

export default PacientesModal;
