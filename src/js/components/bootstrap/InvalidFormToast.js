import { html } from 'lit'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'

class InvalidFormToast extends LitWithoutShadowDom {
  static properties = {
    toastId: { type: String, reflect: true },
  }

  constructor() {
    super()

    this.toastId = ''
  }

  render() {
    return html`
      <div class="toast-container end-0 p-3">
        <div
          id="${this.toastId}"
          class="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <strong class="me-auto">Invalid Form</strong>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div class="toast-body">
            Please fill out all required fields correctly before submitting.
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('invalid-form-toast', InvalidFormToast)
