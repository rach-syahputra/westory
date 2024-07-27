import { basicAxios } from '../instance'
import API_ENDPOINTS from '../endpoint'

const Auth = {
  register: async ({ name, email, password }) => {
    const requestBody = {
      name,
      email,
      password,
    }

    return await basicAxios.post(API_ENDPOINTS.REGISTER, requestBody)
  },

  login: async ({ email, password }) => {
    const requestBody = {
      email,
      password,
    }

    return await basicAxios.post(API_ENDPOINTS.LOGIN, requestBody)
  },
}

export default Auth
