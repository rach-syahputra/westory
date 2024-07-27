import { basicAxios } from '../instance'
import API_ENDPOINTS from '../endpoint'

const Auth = {
  register: async ({ name, email, password }) => {
    try {
      const requestBody = {
        name,
        email,
        password,
      }
      const response = await basicAxios.post(API_ENDPOINTS.REGISTER, requestBody)

      console.log(response)

      return response.data
    } catch (error) {
      console.error(error)
    }
  },
}

export default Auth
