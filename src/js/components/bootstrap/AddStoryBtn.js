import { html } from 'lit'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'
import { msg, updateWhenLocaleChanges } from '@lit/localize'

class AddStoryButton extends LitWithoutShadowDom {
  constructor() {
    super()
    updateWhenLocaleChanges(this)
  }

  render() {
    return html`
      <a
        class="btn btn-dark mb-3 d-flex justify-content-center align-items-center gap-1"
        href="/add-story.html"
        style="width: fit-content;"
      >
        <i class="bi bi-plus fs-5"></i> <span class="fs-7">${msg(`Add new story`)}</span>
      </a>
    `
  }
}

customElements.define('add-story-btn', AddStoryButton)
