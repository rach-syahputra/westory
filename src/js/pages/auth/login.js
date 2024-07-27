import Auth from '../../network/services/auth'

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

      const response = await Auth.login({
        email: formData.email,
        password: formData.password,
      })

      if (!response?.error) {
        this._goToDashboardPage()
      }
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
    const formDataFiltered = Object.values(formData).filter((item) => item === '')

    return formDataFiltered.length === 0
  },

  _goToDashboardPage() {
    window.location.href = '/'
  },
}

export default Login
