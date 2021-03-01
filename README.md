# auth0-spa-login 

An extremely lightweight login html button  or html anchor, to login using www.auth0.com
for real Single Page Applications.

No routers, express or ...,  needed.

The look and feel can be customized with css.

The texts login and logout can be changed.

auth0-login is framework neutral, and can be used with React, Vue or Angular, or used with vanilla javascript.

## Requirement

An account at www.auth0.com

## Installation

```console
    npm install auth0-spa-login
```
in your app:

```javascript
    import {} from 'auth0-spa-login'
```
 
and in html

```html
    <auth0-button
        domain='...get from auth0...' 
        user_id='...get from auth0...'>
    </auth0-button>
 ```

 or

```html
    <auth0-anchor
        domain='...get from autho...' 
        user_id='...get from auth0...'>
    </auth0-anchor>
```

 and then :

```console 
    npm install
    npm start
```

### Your own login/logout labels

The login/logout text can be configured:

```html
    <auth0-button 
        loginText='MyLoginText' 
        logoutText='myLogoutText' 
        domain='...' client_id='...'>
    </auth0-button>
```

Optional one can add a listener on the login event to get the profile (see also demo)

```js
    loginButton.addEventListener("user-logged-in", (e) => {
        const json = JSON.parse(e.detail);
        ...
    }
```

# demo

this package contains a demo

download : https://github.com/kafkaacademy/auth0-spa-login

```console
    cd demo
```

and edit the file index.html : add your domain and client_id. 

and then :
 
```console
    npm install
    npm start
```

## Possible use in an SPA with a user defined menu (e.g. navbar):

In a nav bar environment you can make an html dialog around this login button.

At successfull login (listen to event 'user-logged-in') move the button from the dialog to the navbar as logout button.

This can be done by changing the html parent of the button from dialog to the navbar

In this way you do not need routers, to make all completely a real single page application.