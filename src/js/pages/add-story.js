import * as bootstrap from 'bootstrap'

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

        const addStoryBtn = document.querySelector('#addStoryBtn')
        const loadingSpinner = document.querySelector('loading-spinner')
        addStoryBtn.style.display = 'none'
        loadingSpinner.style.display = 'block'

        setTimeout(() => {
          addStoryBtn.style.display = 'block'
          loadingSpinner.style.display = 'none'
          addStoryForm.classList.add('was-validated')

          this._sendPost()
        }, 2000)
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
    } else {
      this._showInvalidFormToast()
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

  _showInvalidFormToast() {
    const invalidFormToast = document.getElementById('invalidFormToast')
    const toast = new bootstrap.Toast(invalidFormToast)

    toast.show()
  },

  _goToDashboardPage() {
    window.location.href = '/'
  }
}

export default Add
