import API from "./Rule_Api";

const handleApiError = (error) => {
  console.log(error);
  throw error.response.data.message || "Error procesando la solicitud";
};

const makeApiRequest = async (method, url, data = null, config = {}) => {
  try {
    const response = await API[method](url, data, config);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getListaPacientes = async () => {
  const url = "/api/pacientes";

  return await makeApiRequest("get", url);
};

export const getFichaPorId = async (id_paciente) => {
  const url = `/api/pacientes/${id_paciente}`;
  return await makeApiRequest("get", url);
};

export const agregarPacientes = async (formData, config) => {
  const url = "/api/pacientes";
  return await makeApiRequest("post", url, formData, config);
};

export const modificarPaciente = async (ficha, id_paciente) => {
  const url = `/api/pacientes/${id_paciente}`;
  return await makeApiRequest("put", url, ficha);
};

export const eliminarPaciente = async (id) => {
  const url = `/api/pacientes/${id}`;
  return await makeApiRequest("delete", url);
};
