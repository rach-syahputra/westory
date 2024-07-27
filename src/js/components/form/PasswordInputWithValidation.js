import { html, nothing } from 'lit'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'

class PasswordInputWithValidation extends LitWithoutShadowDom {
  static properties = {
    value: { type: String, reflect: true },
    type: { type: String, reflect: true },
    inputId: { type: String, reflect: true },
    minLength: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
    visible: { type: Boolean, reflect: true },
  }

  constructor() {
    super()
    this._checkAvailabilityProperty()

    this.required = false
    this.minLength = 0
    this.type = 'password'
    this.imageSrc = '../image/eye-regular.svg'
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('invalidFeedbackMessage')) {
      throw new Error(
        `Atribut "invalidFeedbackMessage" harus diterapkan pada elemen ${this.localName}`
      )
    }
  }

  _handleInputChange(e) {
    e.preventDefault()
    this.value = e.target.value
  }

  _togglePasswordVisibility() {
    this.visible = !this.visible
    this.type = this.visible ? 'text' : 'password'
  }

  render() {
    return html`
      <input
        id=${this.inputId || nothing}
        class="form-control"
        type=${this.type}
        value=${this.value || nothing}
        minlength=${this.minLength}
        ?required=${this.required}
        @input=${this._handleInputChange}
      />

      <div class="form-check mt-2">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="togglePasswordVisibility"
          ?checked=${this.visible}
          @change=${this._togglePasswordVisibility}
        />
        <label class="form-check-label p-1 fs-7" for="togglePasswordVisibility"
          >Show password</label
        >
      </div>

      ${this._validFeedbackTemplate()}
      <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
    `
  }

  _validFeedbackTemplate() {
    if (this.validFeedbackMessage) {
      return html` <div class="valid-feedback">${this.validFeedbackMessage}</div> `
    }

    return html``
  }
}

customElements.define('password-input-with-validation', PasswordInputWithValidation)
