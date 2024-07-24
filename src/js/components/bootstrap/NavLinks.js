import { html } from 'lit'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'

class NavLinks extends LitWithoutShadowDom {
  constructor() {
    super()
  }

  render() {
    return html`
      <ul class="navbar-nav">
        <nav-link to="/" content="Dashboard"></nav-link>
        <nav-link to="/" content="About"></nav-link>
      </ul>
    `
  }
}

customElements.define('nav-links', NavLinks)
