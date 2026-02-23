import axios from "axios";

const api = axios.create({
  baseURL: "/user/profile/",
});

export const getUser = async (id = 6) => {
  const response = await api.get(`${id}`);
  return response.data;
};
