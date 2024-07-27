import { css, html, LitElement } from 'lit'

class NavBrandName extends LitElement {
  static properties = {
    brandName: { type: String, reflect: true },
  }

  constructor() {
    super()
  }

  static styles = css`
    .brand-name {
      color: #ff76d8;
      font-size: 21px;
      font-weight: 600;
    }
  `

  render() {
    return html` <span class="brand-name">${this.brandName}</span> `
  }
}

customElements.define('nav-brand-name', NavBrandName)
