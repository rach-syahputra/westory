import { msg, updateWhenLocaleChanges } from '@lit/localize'
import { css, html, LitElement } from 'lit'

class FooterText extends LitElement {
  constructor() {
    super()
    updateWhenLocaleChanges(this)
  }

  static styles = css`
    .footer-text {
      color: #fff;
      font-size: 14px;
    }
  `

  render() {
    return html`
      <span class="footer-text"
        >${msg(`Welcome to StoryApp, where stories come to life!`)}</span
      >
    `
  }
}

customElements.define('footer-text', FooterText)
