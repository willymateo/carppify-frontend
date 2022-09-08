import { axiosCarppify, errorHandler } from "./axios.config";

const getDriverById = async driver_id =>
  axiosCarppify
    .get(`/driver/${driver_id}`)
    .then(({ data }) => data)
    .catch(errorHandler);

const getAllVehicles = async ({ driver_id, offset, limit }) =>
  axiosCarppify
    .get(`/driver/${driver_id}/vehicles`, {
      params: {
        offset,
        limit,
      },
    })
    .then(({ data }) => data)
    .catch(errorHandler);

export { getAllVehicles, getDriverById };
