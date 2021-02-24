import './index.css'
import { } from 'auth0-spa-login'

if (process.env.domain == null)
    alert("environment domain of auth0 not set")
if (process.env.client_id == null)
    alert("environment client_id of auth0 not set")


const h1 = document.body.appendChild(document.createElement("h1"));
h1.innerText = "Auth0 LoginButton demo";

const p = document.body.appendChild(document.createElement("h3"));
p.innerHTML = `Only needed in your app: &lt;auth0-button&gt;&lt;/auth0-button&gt;
    <br>and optional an eventListener:
    <br>loginButton.addEventListener("user-logged-in", (e) =>{..register user...}
    <br>An alternative is using anchor &lt;a&gt; , this can be reached by &lt;auth0-anchor&gt;&lt;/auth0-anchor&gt;
    `;

const loginButton = document.body.appendChild(document.createElement("auth0-anchor"));

loginButton.anchor=true;
loginButton.domain = process.env.domain;
loginButton.client_id = process.env.client_id;

loginButton.addEventListener("user-logged-in", (e) => {
    const old = document.getElementById("jsonContainer")
    if (old) { old.remove() }

    const jsonContainer = document.body.appendChild(document.createElement("div"));
    jsonContainer.id = "jsonContainer"
    const jsonTitle = jsonContainer.appendChild(document.createElement("h1"));
    jsonTitle.innerText = "Json:";
    const json = JSON.parse(e.detail);
    jsonTitle.title = JSON.stringify(json)
    const divtbl = jsonContainer.appendChild(document.createElement("table"));
    Object.keys(json).forEach(function (key) {
        const divtr = divtbl.appendChild(document.createElement("tr"));
        let divtd = divtr.appendChild(document.createElement("td"));
        divtd.innerText = key;
        divtd = divtr.appendChild(document.createElement("td"));
        if (key == 'picture') {
            const img = divtd.appendChild(document.createElement("img"));
            img.src = json[key]
        } else
            divtd.innerText = json[key]
    });
}
);
