import Auth from '../../network/services/auth'

const Register = {
  async init() {
    this._initialListener()
  },

  _initialListener() {
    const registerForm = document.querySelector('#registerForm')
    registerForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault()
        event.stopPropagation()

        registerForm.classList.add('was-validated')
        await this._getRegistered()
      },
      false
    )
  },

  async _getRegistered() {
    const formData = this._getFormData()

    if (this._validateFormData({ ...formData })) {
      console.log('formData')
      console.log(formData)

      this._showLoading()

      try {
        await Auth.register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        })

        this._goToLoginPage()
      } catch (error) {
        console.error(error.response.status)

        if (error.response.status === 400) {
          const validationFeedback = document.querySelector('#validationFeedback')
          validationFeedback.textContent = error.response.data.message
        }
      }

      this._hideLoading()
    }
  },

  _getFormData() {
    const name = document.querySelector('#validationName')
    const email = document.querySelector('#validationEmail')
    const password = document.querySelector('#validationPassword')

    return {
      name: name.value,
      email: email.value,
      password: password.value,
    }
  },

  _validateFormData(formData) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const validName = Boolean(formData.name)
    const validEmail = emailRegex.test(formData.email)
    const validPassword = formData.password.length >= 8

    return validName && validEmail && validPassword
  },

  _showLoading() {
    const registerBtn = document.querySelector('#registerBtn')
    const loadingSpinner = document.querySelector('loading-spinner-btn')
    registerBtn.style.display = 'none'
    loadingSpinner.style.display = 'block'
  },

  _hideLoading() {
    const registerBtn = document.querySelector('#registerBtn')
    const loadingSpinner = document.querySelector('loading-spinner-btn')
    registerBtn.style.display = 'block'
    loadingSpinner.style.display = 'none'
  },

  _goToLoginPage() {
    window.location.href = '/auth/login.html'
  },
}

export default Register
