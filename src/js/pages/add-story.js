const Add = {
  async init() {
    this._initialListener()
  },

  _initialListener() {
    const addStoryForm = document.querySelector('#addStoryForm')
    addStoryForm.addEventListener(
      'submit',
      (event) => {
        event.preventDefault()
        event.stopPropagation()

        addStoryForm.classList.add('was-validated')
        this._sendPost()
      },
      false
    )
  },

  _sendPost() {
    const formData = this._getFormData()

    if (this._validateFormData({ ...formData })) {
      console.log('formData')
      console.log(formData)

      // this._goToDashboardPage();
    }
  },

  _getFormData() {
    const descriptionInput = document.querySelector('#validationDescription')
    const photoInput = document.querySelector('#validationPhoto')

    return {
      description: descriptionInput.value,
      photo: photoInput.value
    }
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '')

    return formDataFiltered.length === 0
  },

  _goToDashboardPage() {
    window.location.href = '/'
  }
}

export default Add
