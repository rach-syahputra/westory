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

      const response = await Auth.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })

      if (response.data) {
        window.alert('Registered a new user')
      }
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
    const formDataFiltered = Object.values(formData).filter((item) => item === '')

    return formDataFiltered.length === 0
  },

  _goToLoginPage() {
    window.location.href = '/auth/login.html'
  },
}

export default Register
