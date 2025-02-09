import axios from './axios'

export const registerRequest = (user) => axios.post(`/register`, user)

export const loginRequest = (user) => axios.post(`/login`, user)

export const verifyTokenRequest = () => axios.get('/verify')

export const updateUserRequest = (id,user) => axios.put(`/profile/${id}`, user)

export const getProfile = (id) => axios.get(`/profile/:id`)