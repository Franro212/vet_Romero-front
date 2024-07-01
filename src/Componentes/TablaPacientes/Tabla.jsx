/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import ConfirmDeleteModal from "../ModalConfirm/ModalConfirm.jsx";
import "./tabla.css";

function Tabla({
  historial,
  getData,
  generateColumns,
  entityModal,
  eliminarEntidad,
  paciente,
  entityModalPatient,
}) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showOwnerModal, setShowOwnerModal] = useState(false);
  const [showPatientModal, setShowPatientModal] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [newEntity, setNewEntity] = useState(false);
  const [entities, setEntities] = useState([]);
  const [entityId, setEntityId] = useState("");

  const fetchData = async () => {
    if (typeof getData !== "function") {
      alert("getData is not a function");
      return;
    }
    try {
      const response = await getData();
      setEntities(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleShowNewEntity = () => {
    setSelectedEntity(null);
    setNewEntity(true);
    setShowOwnerModal(true);
  };
  const handleShowOwnerModal = (entity) => {
    setSelectedEntity(entity);
    setNewEntity(false);
    setShowOwnerModal(true);
  };

  const handleShowPatientModal = (entity) => {
    setSelectedEntity(entity);
    setNewEntity(true);
    setShowPatientModal(true);
  };

  const handleCloseOwnerModal = () => {
    setShowOwnerModal(false);
    fetchData();
    setSelectedEntity(null);
  };

  const handleClosePatientModal = () => {
    setShowPatientModal(false);
    fetchData();
    setSelectedEntity(null);
  };

  const handleDeleteModalOpen = () => {
    setDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
    setSuccessMessage("");
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await eliminarEntidad(entityId);
      setEntities(entities.filter((e) => e._id !== entityId));
      setSuccessMessage(response.message);
      setTimeout(() => {
        handleDeleteModalClose();
      }, 3000);
    } catch (error) {
      setSuccessMessage(error.message || "Error eliminando la entidad");
    }
  };

  const rows = entities.map((entity) => ({
    ...entity,
    id: entity._id,
  }));

  const localeText = {
    toolbarFilters: "Buscar",
    filterPanelInputLabel: "Filtro",
    filterPanelInputPlaceholder: "Buscar...",
    footerTotalRows: "Filas Totales:",
    noRowsLabel: "No hay datos",
    errorOverlayDefaultLabel: "Ha ocurrido un error",
  };

  if (typeof generateColumns !== "function") {
    console.error("generateColumns is not a function", generateColumns);
    return null;
  }

  return (
    <div className="cont-tab">
      <ConfirmDeleteModal
        open={deleteModalOpen}
        handleClose={handleDeleteModalClose}
        successMessage={successMessage}
        handleConfirm={handleDeleteConfirm}
      />
      {React.cloneElement(entityModal, {
        entityId: entityId,
        open: showOwnerModal,
        handleClose: handleCloseOwnerModal,
        ownerData: selectedEntity,
        newOwner: newEntity,
        hideButton: historial,
      })}
      {React.cloneElement(entityModalPatient, {
        entityId: entityId,
        open: showPatientModal,
        handleClose: handleClosePatientModal,
        newOwner: newEntity,
        hideButton: historial,
      })}
      {!historial && !paciente && (
        <Button
          onClick={handleShowNewEntity}
          sx={{
            width: "200px",
            alignSelf: "flex-end",
            fontSize: "15px",
            color: "white",
            fontWeight: "bold",
            marginBottom: "10px",
            backgroundColor: "var(--primario)",
            ":hover": {
              backgroundColor: "#35c4bf",
            },
          }}
        >
          Nuevo
        </Button>
      )}
      <DataGrid
        pageSize={rows.length}
        rows={rows}
        hideFooter={true}
        columns={generateColumns(
          handleShowPatientModal,
          handleShowOwnerModal,
          handleDeleteModalOpen,
          setEntityId,
          historial,
        )}
        pagination={false}
        localeText={localeText}
        sx={{
          fontSize: "20px",
          "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
            {
              outline: "none",
            },
          "& .MuiDataGrid-cell": {
            textAlign: "center",
          },
          "& .MuiDataGrid-columnHeaderTitleContainer,": {
            justifyContent: "center",
          },
          "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "transparent",
          },
          "& .MuiDataGrid-row.Mui-selected:hover": {
            backgroundColor: "transparent",
          },
        }}
      />
    </div>
  );
}

export default Tabla;
