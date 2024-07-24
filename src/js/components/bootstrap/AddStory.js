import { html } from 'lit'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'

class AddStoryButton extends LitWithoutShadowDom {
  constructor() {
    super()
  }

  render() {
    return html`
      <button
        type="button"
        class="btn btn-dark mb-3 d-flex justify-content-center align-items-center gap-1"
      >
        <i class="bi bi-plus fs-5"></i> <span class="fs-7">Add new story</span>
      </button>
    `
  }
}

customElements.define('add-story-btn', AddStoryButton)
