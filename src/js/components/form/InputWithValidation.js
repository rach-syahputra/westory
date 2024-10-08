import { html, nothing } from 'lit'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'

class InputWithValidation extends LitWithoutShadowDom {
  static properties = {
    value: { type: String, reflect: true },
    type: { type: String, reflect: true },
    inputId: { type: String, reflect: true },
    minLength: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
  }

  constructor() {
    super()
    this._checkAvailabilityProperty()

    this.required = false
    this.minLength = 0
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('invalidFeedbackMessage')) {
      throw new Error(
        `Atribut "invalidFeedbackMessage" harus diterapkan pada elemen ${this.localName}`
      )
    }
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
        @input=${(e) => (this.value = e.target.value)}
      ></input>

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

customElements.define('input-with-validation', InputWithValidation)
