import axios from "axios";

const axiosCarppify = axios.create({
  baseURL: "http://localhost:3001/api",
});

const errorHandler = ({ request, response }) => {
  if (response) {
    if (!response.data?.error) {
      return {
        status: response.status,
        error: "Unexpected error ocurred",
      };
    }
    return {
      ...response.data,
      status: response.status,
    };
  } else if (request) {
    return {
      error: "The request was made but no response was received",
    };
  } else {
    return {
      error: "Unexpected error ocurred",
    };
  }
};

export { errorHandler, axiosCarppify };
