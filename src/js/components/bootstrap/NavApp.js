import { html } from 'lit'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'

class NavApp extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  }

  constructor() {
    super()
    this._checkAvailabilityProperty()
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('brandName')) {
      throw new Error(
        `Atribut "brandName" harus diterapkan pada elemen ${this.localName}`
      )
    }
  }

  render() {
    return html`
      <nav class="navbar navbar-expand-lg bg-white fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            <nav-brand-name brandName="${this.brandName}"></nav-brand-name>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <nav-links></nav-links>
          </div>
        </div>
      </nav>
    `
  }
}

customElements.define('nav-app', NavApp)
