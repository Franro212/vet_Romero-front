import { useForm } from "react-hook-form";
import {
  Container,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  Box,
} from "@mui/material";
import "./app.css";
import { loginUser } from "./Api/Rule_user";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const submit = async (data) => {
    await loginUser(data)
      .then(() => {
        navigate("/pagePropietarios");
      })
      .catch((message) => {
        alert(message);
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Container sx={{ marginTop: "150px" }} maxWidth="sm">
      <Card>
        <CardContent>
          <Box display="flex" justifyContent="center" mb={2}>
            <img
              className="logo"
              src="\asets\logo_veterinaria-sinFondo.png"
              alt="Logo Veterinaria"
              style={{ width: "150px" }}
            />
          </Box>
          <Typography variant="h5" component="h2" align="center" gutterBottom>
            Inicio de sesión
          </Typography>
          <form onSubmit={handleSubmit(submit)}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              id="email"
              type="email"
              autoComplete="email"
              {...register("email", { required: "El email es obligatorio" })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              id="password"
              type="password"
              autoComplete="current-password"
              {...register("password", {
                required: "La contraseña es obligatoria",
              })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
            />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={2}
            >
              <Button
                sx={{
                  width: "100%",
                  height: "40px",
                  fontSize: "16px",
                  backgroundColor: "var(--primario)",
                }}
                type="submit"
                variant="contained"
                color="primary"
              >
                Enviar
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
