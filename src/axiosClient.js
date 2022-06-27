import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // timeout: 2500,
});

axiosClient.interceptors.request.use((config) => {
  config.params = {
    //default params to add apikey and so on.
    ts: "1",
    apikey: process.env.REACT_APP_API_KEY,
    hash: process.env.REACT_APP_API_HASH,
    // spread the request's params
    ...config.params,
  };
  return config;
});

export function getRequest(URL, payload) {
  console.log({ URL, payload });
  return axiosClient.get(`/${URL}`, payload).then((response) => response);
}

export function postRequest(URL, payload) {
  return axiosClient.post(`/${URL}`, payload).then((response) => response);
}

export function patchRequest(URL, payload) {
  return axiosClient.patch(`/${URL}`, payload).then((response) => response);
}

export function deleteRequest(URL) {
  return axiosClient.delete(`/${URL}`).then((response) => response);
}
