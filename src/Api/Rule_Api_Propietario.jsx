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

export const getListaPropietarios = async () => {
  const url = "/api/propietarios";
  return await makeApiRequest("get", url);
};
export const getPropietariosById = async (id_propietario) => {
  const url = `/api/propietarios/${id_propietario}`;
  return await makeApiRequest("get", url);
};

export const agregarPropietarios = async (formData, config) => {
  const url = "/api/propietarios";
  return await makeApiRequest("post", url, formData, config);
};

export const modificarPropietarios = async (ficha, id_propietario) => {
  const url = `/api/propietarios/${id_propietario}`;
  return await makeApiRequest("put", url, ficha);
};

export const eliminarPropietarios = async (id) => {
  const url = `/api/propietarios/${id}`;
  return await makeApiRequest("delete", url);
};
