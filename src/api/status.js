import axios from "./axios";

export const getStatusesRequest = async() => axios.get('/status')
export const getPrioritiesRequest = async() => axios.get('/priority')
