import { html } from 'lit'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'

class StoryCard extends LitWithoutShadowDom {
  static properties = {
    imageUrl: { type: String, reflect: true },
    description: { type: String, reflect: true },
    date: { type: String, reflect: true }
  }

  constructor() {
    super()

    this.imageUrl = ''
    this.description = ''
    this.date = ''
  }

  render() {
    return html`
      <div class="card mb-4">
        <img src="${this.imageUrl}" class="card-img-top" alt="" />
        <div class="card-body">
          <p class="card-text mb-2">${this.description}</p>
          <p class="card-text fs-8"><small class="text-muted">${this.date}</small></p>
        </div>
      </div>
    `
  }
}

customElements.define('story-card', StoryCard)
