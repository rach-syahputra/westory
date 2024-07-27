import { basicAxios } from '../instance'
import API_ENDPOINTS from '../endpoint'
import Utils from '../../utils/Utils'

const Auth = {
  register: async ({ name, email, password }) => {
    try {
      const requestBody = {
        name,
        email,
        password,
      }
      const response = await basicAxios.post(API_ENDPOINTS.REGISTER, requestBody)

      return response.data
    } catch (error) {
      console.error(error)
    }
  },

  login: async ({ email, password }) => {
    try {
      const requestBody = {
        email,
        password,
      }
      const response = await basicAxios.post(API_ENDPOINTS.LOGIN, requestBody)

      if (!response?.data.error) {
        Utils.setUserToken('token', response.data.loginResult.token)
      }

      return response.data
    } catch (error) {
      console.error(error)
    }
  },
}

export default Auth
