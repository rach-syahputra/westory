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

      try {
        await Auth.login({
          email: formData.email,
          password: formData.password,
        })

        this._goToDashboardPage()
      } catch (error) {
        console.error(error.response.status)

        if (error.response.status === 401) {
          const validationFeedback = document.querySelector('#validationFeedback')
          validationFeedback.textContent = error.response.data.message
        }
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
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const validEmail = emailRegex.test(formData.email)
    const validPassword = formData.password.length >= 8

    return validEmail && validPassword
  },

  _goToDashboardPage() {
    window.location.href = '/'
  },
}

export default Login
