import axios from './axios'

export const registerRequest = (user) => axios.post(`/register`, user)

export const loginRequest = (user) => axios.post(`/login`, user)

export const verifyTokenRequest = () => axios.get('/verify')

export const updateUserRequest = (user) => axios.patch(`/profile/`, user)

export const getProfile = () => axios.get(`/profile/`)