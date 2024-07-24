import { html } from 'lit'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'
import { msg, updateWhenLocaleChanges } from '@lit/localize'

class NavLinks extends LitWithoutShadowDom {
  constructor() {
    super()
    updateWhenLocaleChanges(this)
  }

  render() {
    return html`
      <ul class="navbar-nav">
        <nav-link to="/" content="${msg(`Dashboard`)}"></nav-link>
        <nav-link to="/about.html" content="${msg(`About`)}"></nav-link>
      </ul>
    `
  }
}

customElements.define('nav-links', NavLinks)
