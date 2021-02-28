
import createAuth0Client from '@auth0/auth0-spa-js';
class WordCount extends HTMLAnchorElement {
  constructor() {
    // Always call super first in constructor
    super();
    this.textLogin = 'Log in';
    this.textLogout = 'Log out';
    this.isAuthenticated = false;
    this.profile = undefined;

  
   
  }

  async updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName == 'isAuthenticated')
        this.updateUser()
    });
  }

  async updateUser() {
    if (!this.auth0) {
      this.auth0 = await createAuth0Client({
        domain: this.domain,
        client_id: this.client_id
      });
    }

    if (!await this.auth0.isAuthenticated()) {
      const query = window.location.search;
      if (query.includes('code=') && query.includes('state=')) {
        await this.auth0.handleRedirectCallback();
        window.history.replaceState({}, document.title, '/');
      }
    }
    else {
      this.profile = JSON.stringify(await this.auth0.getUser());
      let myEvent = new CustomEvent('user-logged-in', {
        bubbles: true,
        detail: this.profile
      });
      this.dispatchEvent(myEvent);
    }
    this.isAuthenticated = await this.auth0.isAuthenticated();
  }

  async loginOrLogout() {
    if (!this.auth0) {
      console.error("you are not connected to auth0")
    }
    else {
      if (this.isAuthenticated) {
        let myEvent = new CustomEvent('user-logged-out', {
          bubbles: true,
          detail: this.profile
        });
        this.dispatchEvent(myEvent);
        this.auth0.logout({ returnTo: window.location.origin })
      }
      else
        await this.auth0.loginWithRedirect({ redirect_uri: window.location.origin });
    }
  }
}

// Define the new element
customElements.define('word-count', WordCount, { extends: 'a' });
