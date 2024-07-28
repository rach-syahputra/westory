import axios from 'axios'
import config from './config'
import Utils from '../utils/Utils'

const basicAxios = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const authAxios = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${Utils.getUserToken()}`,
  },
})

export { basicAxios, authAxios }
