import axios from "axios";

const API =  `https://rickandmortyapi.com/api/character/`



export const fetchPosts = (page) => axios.get(`${API}?page=${page}`)
export const fetchPostsById = (id) => axios.get(`${API}${id}`)
export const filterByName = (page, name) => axios.get(`${API}?page=${page}&name=${name}`)
export const signIn = (formData) => API.post('/users/signin', formData)
export const signUp = (formData) => API.post('/users/signup', formData)
