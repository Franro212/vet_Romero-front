import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// eslint-disable-next-line react/prop-types
const ModalHistorial = ({ open, handleClose, handleSave }) => {
  const [formData, setFormData] = useState({
    fechaConsulta: "",
    tomoMedicamento: false,
    cualesMedicamentos: "",
    motivoConsulta: "",
    sistemaComprometido: "",
    examenesColaterales: false,
    tipoExamen: "",
    evolucion: "",
    proximaConsulta: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFormSave = () => {
    handleSave(formData);
    handleClose();
  };

  const handleFormCancel = () => {
    setFormData({
      fechaConsulta: "",
      tomoMedicamento: false,
      cualesMedicamentos: "",
      motivoConsulta: "",
      sistemaComprometido: "",
      examenesColaterales: false,
      tipoExamen: "",
      evolucion: "",
      proximaConsulta: "",
    });
    handleClose();
  };

  return (
    <Modal id="modal" open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2" gutterBottom>
          Agregar Nueva Consulta
        </Typography>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Fecha de Consulta"
            type="date"
            name="fechaConsulta"
            value={formData.fechaConsulta}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />
          <FormControlLabel
            sx={{ width: "100%" }}
            control={
              <Checkbox
                name="tomoMedicamento"
                checked={formData.tomoMedicamento}
                onChange={handleInputChange}
              />
            }
            label="Tomó algún medicamento en los últimos días?"
          />
          {formData.tomoMedicamento && (
            <TextField
              label="Cuáles?"
              name="cualesMedicamentos"
              value={formData.cualesMedicamentos}
              onChange={handleInputChange}
              multiline
              rows={2}
            />
          )}
          <TextField
            label="Motivo de la Consulta"
            name="motivoConsulta"
            value={formData.motivoConsulta}
            onChange={handleInputChange}
            multiline
            rows={2}
          />
          <TextField
            label="Sistema Comprometido"
            name="sistemaComprometido"
            value={formData.sistemaComprometido}
            onChange={handleInputChange}
            multiline
            rows={2}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="examenesColaterales"
                checked={formData.examenesColaterales}
                onChange={handleInputChange}
              />
            }
            label="Exámenes colaterales?"
          />
          {formData.examenesColaterales && (
            <TextField
              label="Tipo de Examen"
              name="tipoExamen"
              value={formData.tipoExamen}
              onChange={handleInputChange}
              multiline
              rows={2}
            />
          )}
          <TextField
            label="Evolución"
            name="evolucion"
            value={formData.evolucion}
            onChange={handleInputChange}
            multiline
            rows={2}
          />
          <TextField
            label="Próxima Consulta"
            type="date"
            name="proximaConsulta"
            value={formData.proximaConsulta}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}
          >
            <Button
              sx={{
                fontSize: "1.7rem",
                backgroundColor: " rgb(251, 65, 65)",
                ":hover": {
                  backgroundColor: "#f56363",
                },
              }}
              variant="contained"
              color="secondary"
              onClick={handleFormCancel}
            >
              Cancelar
            </Button>
            <Button
              sx={{
                fontSize: "1.7rem",
                backgroundColor: "var(--primario)",
                ":hover": {
                  backgroundColor: "#35c4bf",
                },
              }}
              variant="contained"
              onClick={handleFormSave}
            >
              Guardar
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalHistorial;
