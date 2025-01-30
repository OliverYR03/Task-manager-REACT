import axios from "./axios";

export const getStatusesRequest = async() => axios.get('/status')

export const getPrioritiesRequest = async() => axios.get('/priority')

export const getPriorityRequest = async (id) => axios.get(`/priority/${id}`)

export const getStatusRequest = async (id) => axios.get(`/status/${id}`)