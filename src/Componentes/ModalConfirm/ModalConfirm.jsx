/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

const ConfirmDeleteModal = ({
  open,
  handleClose,
  handleConfirm,
  patientName,
  successMessage,
}) => {
  return (
    <Dialog sx={{ textAlign: "center" }} open={open} onClose={handleClose}>
      <DialogTitle
        sx={{
          fontSize: "30px !important",
          width: "500px",
        }}
      >
        Confirmar Eliminación
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            fontSize: "20px !important",
            width: "500px",
            marginTop: "30px",
            height: "100px",
          }}
        >
          ¿Está seguro que desea eliminar el paciente {patientName}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{
            width: "120px",
            height: "35px",
            fontSize: "15px",
            color: "#ffffff",
            marginLeft: "10px",
            fontWeight: "bold",
            backgroundColor: " rgb(251, 65, 65)",
            ":hover": {
              backgroundColor: "#f56363",
            },
          }}
          onClick={handleClose}
        >
          Cancelar
        </Button>
        <Button
          sx={{
            width: "120px",
            height: "35px",
            fontSize: "15px",
            color: "#ffffff",
            marginLeft: "10px",
            fontWeight: "bold",
            backgroundColor: "var(--primario)",
            ":hover": {
              backgroundColor: "#35c4bf",
            },
          }}
          onClick={handleConfirm}
        >
          Confirmar
        </Button>
      </DialogActions>
      <Snackbar open={!!successMessage} onClose={handleClose}>
        <Alert
          sx={{ fontSize: "15px", height: "70px" }}
          onClose={handleClose}
          severity="success"
        >
          {successMessage}
        </Alert>
      </Snackbar>
    </Dialog>
  );
};

export default ConfirmDeleteModal;
