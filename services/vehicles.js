import { axiosCarppify, errorHandlerSWR } from "./axios.config";

const createVehicle = async data =>
  axiosCarppify
    .post("/vehicles", data)
    .then(({ data }) => data)
    .catch(errorHandlerSWR);

const editVehicle = async data =>
  axiosCarppify
    .put(`/vehicles/${vehile_id}`, data)
    .then(({ data }) => data)
    .catch(errorHandlerSWR);

const deleteVehicle = async vehile_id =>
  axiosCarppify
    .post(`/vehicles/${vehile_id}`, data)
    .then(({ data }) => data)
    .catch(errorHandlerSWR);

export { createVehicle, editVehicle, deleteVehicle };
