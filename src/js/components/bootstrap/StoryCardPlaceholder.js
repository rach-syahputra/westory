import { html } from 'lit'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'

class StoryCardPlaceholder extends LitWithoutShadowDom {
  static properties = {
    height: { type: String, reflect: true },
    imageUrl: { type: String, reflect: true },
  }

  constructor() {
    super()

    this.height = '250'
  }

  render() {
    return html`
      <div class="card" aria-hidden="true">
        <img src="${this.imageUrl}" class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-12"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-12"></span>
            <span class="placeholder col-12"></span>
            <span class="placeholder col-6"></span>
          </p>
        </div>
      </div>
    `
  }
}

customElements.define('story-card-placeholder', StoryCardPlaceholder)
