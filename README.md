# auth0-spa-login 

An extremely lightweight login html button  or html anchor, to login using www.auth0.com

The look and feel can be customized with css.

The texts login and logout can be changed.

auth0-login is framework neutral, and can be used with React, Vue or Angular, or used with vanilla javascript.

## Requirement

An account at www.auth0.com

## Installation


npm install auth0-spa-login

in your app:
import {} from 'auth0-spa-login'
 
and in html

    <auth0-button
        domain="...get from autho...>" 
        user_id="...get from auth0...">
    </auth0-button>
 
 or

    <auth0-anchor
        domain="...get from autho...>" 
        user_id="...get from auth0...">
    </authh0-anchor>
    
 and then :

 
    npm install
    npm run build
    npm start

# demo

the package contains a demo
download from github https://github.com/kafkaacademy/auth0-spa-login

` cd demo`

edit the .env file 
and add your domain and client_id of auth0 to the env file

and then :
 
    npm install
    npm start


see .demo/src/index.js how the webcomponent login-button is used
