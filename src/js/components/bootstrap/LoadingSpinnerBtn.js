import { html } from 'lit'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'

class LoadingSpinnerBtn extends LitWithoutShadowDom {
  constructor() {
    super()
  }

  render() {
    return html`
      <button class="btn btn-dark w-100" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
      </button>
    `
  }
}

customElements.define('loading-spinner-btn', LoadingSpinnerBtn)
