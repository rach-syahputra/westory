import { html } from 'lit'
import LitWithoutShadowDom from './base/LitWithoutShadowDom'

class ProfileDescription extends LitWithoutShadowDom {
  constructor() {
    super()
  }

  render() {
    return html`
      <p class="text-center lh-base">
        A dedicated and enthusiastic Front-End Development student with a passion for creating
        visually appealing and user-friendly web applications. Currently pursuing a degree in
        Computer Science with a focus on web development, and gaining hands-on experience with
        modern front-end technologies. Committed to continuous learning and eager to contribute to
        real-world projects to enhance skills and knowledge.
      </p>
    `
  }
}

customElements.define('profile-description', ProfileDescription)
