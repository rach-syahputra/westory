import { html } from 'lit'
import LitWithoutShadowDom from './base/LitWithoutShadowDom'
import { msg, updateWhenLocaleChanges } from '@lit/localize'

class ProfileDescription extends LitWithoutShadowDom {
  constructor() {
    super()
    updateWhenLocaleChanges(this)
  }

  render() {
    return html`
      <p class="text-center lh-base">
        ${msg(`A dedicated and enthusiastic Front-End Web Development student with a passion for creating
        visually appealing and user-friendly web applications.`)}
      </p>
    `
  }
}

customElements.define('profile-description', ProfileDescription)
