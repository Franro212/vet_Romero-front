/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./modalPacientes.css";
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
import CloseIcon from "@mui/icons-material/Close";

const PacientesModal = ({
  open,
  handleClose,
  patientData,
  newPatient,
  hideButton,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(patientData || {});

  useEffect(() => {
    setFormData(patientData || {});
    setIsEditing(false);
  }, [patientData]);

  useEffect(() => {
    if (newPatient) {
      setIsEditing(true);
      setFormData({});
    }
  }, [newPatient]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Lógica para guardar los datos
    setIsEditing(false);
    handleClose();
  };

  const handleCancel = () => {
    if (newPatient) {
      setFormData({});
    } else {
      setFormData(patientData);
    }
    setIsEditing(false);
    handleClose();
  };

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
        <Box component="form" sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Propietario"
                name="propietario"
                value={formData?.propietario || ""}
                onChange={handleInputChange}
                InputProps={{
                  readOnly: !isEditing,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Teléfono"
                name="telefono"
                value={formData?.telefono || ""}
                onChange={handleInputChange}
                InputProps={{
                  readOnly: !isEditing,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="socio"
                    checked={formData?.socio || false}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                }
                label="Socio"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Número de Socio"
                name="numeroSocio"
                value={formData?.id || ""}
                onChange={handleInputChange}
                InputProps={{
                  readOnly: !isEditing,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nombre del Animal"
                name="nombreAnimal"
                value={formData?.nombre || ""}
                onChange={handleInputChange}
                InputProps={{
                  readOnly: !isEditing,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Especie"
                name="especie"
                value={formData?.especie || ""}
                onChange={handleInputChange}
                InputProps={{
                  readOnly: !isEditing,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Fecha de Nacimiento"
                type="date"
                name="fechaNacimiento"
                value={formData?.fechaNacimiento || ""}
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  readOnly: !isEditing,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Sexo"
                name="sexo"
                value={formData?.sexo || ""}
                onChange={handleInputChange}
                InputProps={{
                  readOnly: !isEditing,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="castrado"
                    checked={formData?.castrado || false}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                }
                label="Castrado"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="vacunado"
                    checked={formData?.vacunado || false}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                }
                label="Vacunado"
              />
              {formData?.vacunado && (
                <TextField
                  fullWidth
                  type="date"
                  name="fechaVacunado"
                  value={formData?.fechaVacunado || ""}
                  onChange={handleInputChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    readOnly: !isEditing,
                  }}
                />
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="desparasitado"
                    checked={formData?.desparasitado || false}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                }
                label="Desparasitado"
              />
              {formData?.desparasitado && (
                <TextField
                  fullWidth
                  type="date"
                  name="fechaDesparasitado"
                  value={formData?.fechaDesparasitado || ""}
                  onChange={handleInputChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    readOnly: !isEditing,
                  }}
                />
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="antipulgas"
                    checked={formData?.antipulgas || false}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                }
                label="Antipulgas/Garrapatas"
              />
              {formData?.antipulgas && (
                <TextField
                  fullWidth
                  type="date"
                  name="fechaAntipulgas"
                  value={formData?.fechaAntipulgas || ""}
                  onChange={handleInputChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    readOnly: !isEditing,
                  }}
                />
              )}
            </Grid>
          </Grid>
        </Box>
        {hideButton ? (
          ""
        ) : (
          <Box sx={{ mt: 3, textAlign: "right" }}>
            {newPatient ? (
              <>
                <Button
                  variant="contained"
                  onClick={handleCancel}
                  sx={{
                    mr: 1,
                    backgroundColor: " rgb(251, 65, 65)",
                    ":hover": {
                      backgroundColor: "#f56363",
                    },
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "var(--primario)",
                    ":hover": {
                      backgroundColor: "#35c4bf",
                    },
                  }}
                  onClick={handleSave}
                >
                  Guardar
                </Button>
              </>
            ) : (
              <>
                {isEditing ? (
                  <>
                    <Button
                      variant="contained"
                      onClick={handleCancel}
                      sx={{
                        mr: 1,
                        backgroundColor: " rgb(251, 65, 65)",
                        ":hover": {
                          backgroundColor: "#f56363",
                        },
                      }}
                    >
                      Cancelar
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "var(--primario)",
                        ":hover": {
                          backgroundColor: "#35c4bf",
                        },
                      }}
                      onClick={handleSave}
                    >
                      Guardar
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "var(--primario)",
                      ":hover": {
                        backgroundColor: "#35c4bf",
                      },
                    }}
                    onClick={handleEdit}
                  >
                    Editar
                  </Button>
                )}
              </>
            )}
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default PacientesModal;
