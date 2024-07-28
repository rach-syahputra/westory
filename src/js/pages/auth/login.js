import Auth from '../../network/services/auth'
import Utils from '../../utils/Utils'

const Login = {
  async init() {
    this._initialListener()
  },

  _initialListener() {
    const loginForm = document.querySelector('#loginForm')
    loginForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault()
        event.stopPropagation()

        loginForm.classList.add('was-validated')
        await this._getLoggedIn()
      },
      false
    )
  },

  async _getLoggedIn() {
    const formData = this._getFormData()

    if (this._validateFormData({ ...formData })) {
      console.log('formData')
      console.log(formData)

      this._showLoading()

      try {
        const response = await Auth.login({
          email: formData.email,
          password: formData.password,
        })

        Utils.setUserName(response.data.loginResult.name)
        Utils.setUserToken(response.data.loginResult.token)

        this._goToDashboardPage()
      } catch (error) {
        console.error(error.response.status)

        if (error.response.status === 401) {
          const validationFeedback = document.querySelector('#validationFeedback')
          validationFeedback.textContent = error.response.data.message
        }
      }

      this._hideLoading()
    }
  },

  _getFormData() {
    const email = document.querySelector('#validationEmail')
    const password = document.querySelector('#validationPassword')

    return {
      email: email.value,
      password: password.value,
    }
  },

  _validateFormData(formData) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const validEmail = emailRegex.test(formData.email)
    const validPassword = formData.password.length >= 8

    return validEmail && validPassword
  },

  _showLoading() {
    const loginBtn = document.querySelector('#loginBtn')
    const loadingSpinner = document.querySelector('loading-spinner-btn')
    loginBtn.style.display = 'none'
    loadingSpinner.style.display = 'block'
  },

  _hideLoading() {
    const loginBtn = document.querySelector('#loginBtn')
    const loadingSpinner = document.querySelector('loading-spinner-btn')
    loginBtn.style.display = 'block'
    loadingSpinner.style.display = 'none'
  },

  _goToDashboardPage() {
    window.location.href = '/'
  },
}

export default Login
