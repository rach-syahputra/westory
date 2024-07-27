const USER_NAME_KEY = 'user-name'

const Utils = {
  setUserToken(key, value) {
    return sessionStorage.setItem(key, value)
  },
  getUserToken(key) {
    return sessionStorage.getItem(key)
  },
  destroyUserToken(key) {
    return sessionStorage.removeItem(key)
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
