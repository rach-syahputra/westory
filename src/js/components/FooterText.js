import { css, html, LitElement } from 'lit'

class FooterText extends LitElement {
  constructor() {
    super()
  }

  static styles = css`
    .footer-text {
      color: #fff;
      font-size: 14px;
    }
  `

  render() {
    return html` <span class="footer-text">&copy; 2024 WeStory. All rights reserved.</span> `
  }
}

customElements.define('footer-text', FooterText)
