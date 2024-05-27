import { Box, Divider, Paper, Typography } from "@mui/material";
import Header from "../../Componentes/Header/Header";
import Nav from "../../Componentes/Nav/Nav";

function HistorialClinico() {
    const consultas = [
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
      ];
  return (
    <div className="cont-principal">
      <Nav />
      <div className="cont-header-main">
        <Header />
        <Box>
        <Box sx={{ gridColumn: "span 2", bgcolor: "white", borderRadius: 2, boxShadow: 2, p: 4 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Historial Clínico
      </Typography>
      {consultas.map((consulta, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2, bgcolor: "grey.100", borderRadius: 2 }}>
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
