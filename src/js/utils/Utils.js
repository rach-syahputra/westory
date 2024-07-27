const USER_NAME_KEY = 'user-name'
const USER_TOKEN_KEY = 'token'

const Utils = {
  setUserToken(value) {
    return sessionStorage.setItem(USER_TOKEN_KEY, value)
  },
  getUserToken() {
    return sessionStorage.getItem(USER_TOKEN_KEY)
  },
  destroyUserToken() {
    return sessionStorage.removeItem(USER_TOKEN_KEY)
  },
  setUserName(value) {
    return sessionStorage.setItem(USER_NAME_KEY, value)
  },
  getUserName() {
    const userName = sessionStorage.getItem(USER_NAME_KEY)
    return userName?.replace(' ', '+')
  },
}

export default Utils
