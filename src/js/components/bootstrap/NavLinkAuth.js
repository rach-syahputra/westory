import { html } from 'lit'
import LitWithoutShadowDom from '../base/LitWithoutShadowDom'
import { msg, updateWhenLocaleChanges } from '@lit/localize'
import CheckUserAuth from '../../pages/auth/check-user-auth'
import Utils from '../../utils/Utils'
import config from '../../network/config'

class NavLinkAuth extends LitWithoutShadowDom {
  static properties = {
    userName: { type: String, reflect: true },
  }

  constructor() {
    super()
    updateWhenLocaleChanges(this)

    this.userName = Utils.getUserName()
  }

  render() {
    return html`
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle text-nowrap"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          <div class="me-2 d-inline-block">
            <img
              id="imgUserLogged"
              style="width: 30px;height: 30px"
              class="img-fluid rounded-pill"
              src="https://ui-avatars.com/api/?name=${this.userName}"
              alt="User Name"
            />
          </div>
          <span id="nameUserLogged"></span>
        </a>
        <ul class="dropdown-menu">
          <a class="dropdown-item" id="userLogOut" @click=${this._userLogOut}>${msg(`Log Out`)}</a>
        </ul>
      </li>
    `
  }

  _userLogOut(event) {
    event.preventDefault()

    try {
      Utils.destroyUserToken(config.USER_TOKEN_KEY)
      CheckUserAuth.checkLoginState()
    } catch (error) {
      console.error(error)
    }
  }
}

customElements.define('nav-link-auth', NavLinkAuth)
