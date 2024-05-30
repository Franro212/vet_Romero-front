import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import Header from "../../../Componentes/Header/Header";
import Nav from "../../../Componentes/Nav/Nav";
import "./historialClinico.css";

import { useState } from "react";
import ModalHistorial from "../../../Componentes/ModalHistorial/ModalHistorial";

function HistorialClinico() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const [consultas, setConsultas] = useState([
    {
      fecha: "15/05/2023",
      motivo: "Dolor de cabeza",
      diagnostico: "Migraña",
      tratamiento: "Medicación recetada",
    },
    {
      fecha: "10/03/2023",
      motivo: "Tos y fiebre",
      diagnostico: "Resfriado común",
      tratamiento: "Medicación recetada",
    },
    {
      fecha: "20/01/2023",
      motivo: "Dolor de espalda",
      diagnostico: "Lumbalgia",
      tratamiento: "Fisioterapia",
    },
  ]);
  const handleSaveConsulta = (newConsulta) => {
    setConsultas([...consultas, newConsulta]);
  };
  return (
    <div className="cont-principal">
      <Nav />
      <div className="cont-header-main">
        <Header />
        <Box
          className="text-p"
          sx={{
            gridColumn: "span 2",
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 2,
            p: 4,
            margin: "20px",
            height: "115vh",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ModalHistorial
            open={showModal}
            handleClose={handleCloseModal}
            handleSave={handleSaveConsulta}
          />
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Historial Clínico
          </Typography>
          <Button
            sx={{
              width: "200px",
              alignSelf: "flex-end",
              fontSize: "15px",
              color: "white",
              backgroundColor: "black",
              fontWeight: "bold",
              marginBottom: "10px",
              ":hover": {
                backgroundColor: "#6B7280",
              },
            }}
            onClick={() => {
              handleShowModal();
            }}
          >
            Nueva ficha
          </Button>
          <Box id="fichas">
            {consultas.map((consulta, index) => (
              <Paper
                key={index}
                sx={{ p: 2, mb: 2, bgcolor: "grey.100", borderRadius: 2 }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body1" fontWeight="medium">
                    Consulta del {consulta.fecha}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {consulta.fecha}
                  </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2" mt={2}>
                  Motivo de consulta: {consulta.motivo}
                </Typography>
                <Typography variant="body2" mt={1}>
                  Diagnóstico: {consulta.diagnostico}
                </Typography>
                <Typography variant="body2" mt={1}>
                  Tratamiento: {consulta.tratamiento}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </div>
    </div>
  );
}
export default HistorialClinico;
