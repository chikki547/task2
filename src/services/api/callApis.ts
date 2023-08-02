import api from "../api";

//get API call
export const getApi = async (path: string, params = {}) => {
  const response = await api.get(`${path}`, params);
  return response.data;
};

//post API call
export const postApi = async (path: string, payload = {}, options = {}) => {
  const response = await api.post(path, payload, options);
  return response.data;
};

//PUT API call
export const putApi = async (path: string, payload = {}, options = {}) => {
  const response = await api.put(path, payload, options);
  return response.data;
};
