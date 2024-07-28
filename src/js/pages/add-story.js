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

        addStoryForm.classList.add('was-validated')

        this._sendPost()
      },
      false
    )
  },

  _sendPost() {
    const formData = this._getFormData()

    if (this._validateFormData({ ...formData })) {
      this._goToDashboardPage()
    } else {
      this._showInvalidFormToast()
    }
  },

  _getFormData() {
    const descriptionInput = document.querySelector('#validationDescription')
    const photoInput = document.querySelector('#validationPhoto')

    return {
      description: descriptionInput.value,
      photo: photoInput.value,
    }
  },

  _validateFormData(formData) {
    const validDescription = formData.description
    const validPhoto = formData.photo

    return validDescription && validPhoto
  },

  _showLoading() {
    const addStoryBtn = document.querySelector('#addStoryBtn')
    const loadingSpinner = document.querySelector('loading-spinner-btn')
    addStoryBtn.style.display = 'none'
    loadingSpinner.style.display = 'block'
  },

  _hideLoading() {
    const addStoryBtn = document.querySelector('#addStoryBtn')
    const loadingSpinner = document.querySelector('loading-spinner-btn')
    addStoryBtn.style.display = 'block'
    loadingSpinner.style.display = 'none'
  },

  _showInvalidFormToast() {
    const invalidFormToast = document.getElementById('invalidFormToast')
    const toast = new bootstrap.Toast(invalidFormToast)

    toast.show()
  },

  _goToDashboardPage() {
    window.location.href = '/'
  },
}

export default Add
