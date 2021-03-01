# auth0-spa-login 

An extremely lightweight login html button  or html anchor, to login using www.auth0.com

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

### user defined text

The login button text con be chahged by setting

```html
    <auth0-button 
        loginText='MyLoginText' 
        logoutText='myLogoutText' 
        domain='...' client_id='...'>
    </auth0-button>
```

# demo

the package contains a demo
download from github https://github.com/kafkaacademy/auth0-spa-login

```console
    cd demo
```

and edit the file index.html : add your domain and client_id. 

and then :
 
```console
    npm install
    npm start
```
