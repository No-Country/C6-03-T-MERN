import axios from 'axios'
import { getEnvVariables } from '../../../../../helpers'
const { VITE_API_URL } = getEnvVariables()

export const getUsers = async () =>
  await axios.get(VITE_API_URL + '/users/list/')

export const getProjects = async () =>
  await axios.get(VITE_API_URL + '/projects/list/')

export const createProjects = async (project) =>
  await axios.post(VITE_API_URL + '/projects/create', project)

export const editProjects = async (project) => 
  await axios.put(VITE_API_URL + '/projects/:id')