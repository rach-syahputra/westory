import { css, html, LitElement } from 'lit'

class ProfileImage extends LitElement {
  constructor() {
    super()

    this.imageUrl = ''
  }

  static properties = {
    imageUrl: { type: String, reflect: true },
  }

  static styles = css`
    img {
      width: 160px;
      height: 160px;
      border-radius: 999px;
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }
  `

  render() {
    return html`
      <img
        src="${this.imageUrl
          ? this.imageUrl
          : 'https://picsum.photos/1200/700?random=3'}"
        alt=""
      />
    `
  }
}

customElements.define('profile-image', ProfileImage)
