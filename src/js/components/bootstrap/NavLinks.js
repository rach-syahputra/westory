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
      <ul class="navbar-nav d-flex align-items-center gap-2">
        <nav-link to="/" content="${msg(`Dashboard`)}"></nav-link>
        <nav-link to="/about.html" content="${msg(`About`)}"></nav-link>
        <nav-link-auth class="d-none" id="userLoggedMenu"></nav-link-auth>
        <nav-link to="/auth/login.html" content="${msg(`Login`)}" id="loginMenu"></nav-link>
      </ul>
    `
  }
}

customElements.define('nav-links', NavLinks)
