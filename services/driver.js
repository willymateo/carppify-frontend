import { axiosCarppify, errorHandlerSWR } from "./axios.config";

const getAllVehicles = async driver_id =>
  axiosCarppify
    .get(`/driver/${driver_id}/vehicles`)
    .then(({ data }) => data)
    .catch(errorHandlerSWR);

export { getAllVehicles };
