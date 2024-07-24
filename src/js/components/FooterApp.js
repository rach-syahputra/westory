import { html } from 'lit'
import LitWithoutShadowDom from './base/LitWithoutShadowDom'

class FooterApp extends LitWithoutShadowDom {
  constructor() {
    super()
  }

  render() {
    return html`
      <div class="footer-container">
        <locale-picker></locale-picker>
        <div class="socmed-list">
          <div class="socmed-item">
            <i class="bi bi-instagram"></i>
          </div>
          <div class="socmed-item">
            <i class="bi bi-facebook"></i>
          </div>
          <div class="socmed-item">
            <i class="bi bi-twitter"></i>
          </div>
        </div>
        <footer-text></footer-text>
      </div>
    `
  }
}

customElements.define('footer-app', FooterApp)
