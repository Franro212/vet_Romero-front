import { useState } from "react";
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

// eslint-disable-next-line react/prop-types
const PacientesModal = ({ open, handleClose, patientData, isHistorial }) => {
  // eslint-disable-next-line no-unused-vars
  const [historial, setHistorial] = useState (isHistorial)
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(patientData);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Lógica para guardar los datos
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(patientData);
    setIsEditing(false);
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
          Información del Paciente
        </Typography>
        <Box component="form" sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Propietario"
                name="propietario"
                value={formData?.propietario}
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
                value={formData?.telefono}
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
                    checked={formData?.socio}
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
                value={formData?.id}
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
                value={formData?.nombre}
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
                value={formData?.especie}
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
                value={formData?.fechaNacimiento}
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
                value={formData?.sexo}
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
                    checked={formData?.castrado}
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
                    checked={formData?.vacunado}
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
                  value={formData?.fechaVacunado}
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
                    checked={formData?.desparasitado}
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
                  value={formData?.fechaDesparasitado}
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
                    checked={formData?.antipulgas}
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
                  value={formData?.fechaAntipulgas}
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
        {historial? (""
        ) : (

          <Box sx={{ mt: 3, textAlign: "right" }}>
          {isEditing ? (
            <>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCancel}
                sx={{ mr: 1 }}
                >
                Cancelar
              </Button>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Guardar
              </Button>
            </>
          ) : (
            <Button variant="contained" color="primary" onClick={handleEdit}>
              Editar
            </Button>
          )}
        </Box>
              )}
      </Box>
    </Modal>
  );
};

export default PacientesModal;
