import { html } from 'lit'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'

class StoryCard extends LitWithoutShadowDom {
  static properties = {
    userName: { type: String, reflect: true },
    imageUrl: { type: String, reflect: true },
    description: { type: String, reflect: true },
    date: { type: String, reflect: true },
    height: { type: String, reflect: true },
  }

  constructor() {
    super()

    this.userName = ''
    this.imageUrl = ''
    this.description = ''
    this.date = ''
    this.height = '250'
  }

  render() {
    return html`
      <div class="card mb-5" id="storyCard">
        <img src="${this.imageUrl}" height="${this.height}" class="card-img-top" alt="" style="object-fit: cover; object-position: center; margin-bottom: 8px; />
        <div class="card-body">
          <h5 class="card-title fw-bold">${this.userName}</h5>
          <p class="card-text mb-2 lh-base">${this.description}</p>
          <p class="card-text fs-8">
            <small class="text-muted">${this.date}</small>
          </p>
        </div>
      </div>
    `
  }
}

customElements.define('story-card', StoryCard)
