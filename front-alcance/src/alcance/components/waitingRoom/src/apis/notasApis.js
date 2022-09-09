import axios from 'axios'
import { getEnvVariables } from '../../../../../helpers'
const { VITE_API_URL } = getEnvVariables()

export const getUsers = async () =>
  await axios.get(VITE_API_URL + '/users/list/')

  export const getUserDetail = async () =>
  await axios.get(VITE_API_URL + '/users/:id')

export const getProjects = async () =>
  await axios.get(VITE_API_URL + '/projects/list/')

export const createProjects = async (project) =>
  await axios.post(VITE_API_URL + '/projects/create', project)

export const editProjects = async (idProject) => 
  await axios.put(VITE_API_URL + '/projects/' + idProject)