import { html } from 'lit'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'

class StoryList extends LitWithoutShadowDom {
  constructor() {
    super()
  }

  render() {
    return html` <div class="row"></div> `
  }
}

customElements.define('story-list', StoryList)
