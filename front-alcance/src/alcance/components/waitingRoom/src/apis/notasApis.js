import axios from 'axios'
import { getEnvVariables } from '../../../../../helpers'
const { VITE_API_URL } = getEnvVariables()

export const getUsers = async () =>  
    await axios.get(VITE_API_URL + "/users/list/")
