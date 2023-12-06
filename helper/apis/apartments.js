import axios from "axios";
// get all
export const getAll = async (params) => {
  const response = await axios({
    method: "GET",
    url: "/api/apartments",
    params,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

// get one
export const getOne = async (id) => {
  const response = await axios({
    method: "GET",
    url: `/api/apartments?id=${id}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

// create one
export const createOne = async (data) => {
  const response = await axios({
    method: "POST",
    url: '/api/apartments',
    data: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  });
  return response.data;
};

// delete one
export const deleteOne = async (id) => {
  const response = await axios({
    method: "DELETE",
    url: `/api/apartments?id=${id}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

// update one
export const updateOne = async (data, id) => {
  const response = await axios({
    method: "PUT",
    url: `/api/apartments?id=${id}`,
    data: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};