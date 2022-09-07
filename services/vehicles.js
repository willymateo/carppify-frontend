import { axiosCarppify, errorHandler } from "./axios.config";

const createVehicle = async data =>
  axiosCarppify
    .post("/vehicles", data)
    .then(({ data }) => data)
    .catch(errorHandler);

const editVehicle = async data =>
  axiosCarppify
    .put(`/vehicles/${vehile_id}`, data)
    .then(({ data }) => data)
    .catch(errorHandler);

const deleteVehicle = async vehile_id =>
  axiosCarppify
    .post(`/vehicles/${vehile_id}`, data)
    .then(({ data }) => data)
    .catch(errorHandler);

export { createVehicle, editVehicle, deleteVehicle };
