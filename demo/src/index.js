import './index.css'
import { } from 'auth0-spa-login'



const loginButton = document.getElementsByTagName("auth0-anchor")[0];
if (loginButton.domain.length < 25)
    alert("attribute domain not ok: get the domain from www.auth0.com")
if (loginButton.client_id.length < 32)
    alert("attribute client_id not ok : get the client_id from www.auth0.com")

loginButton.addEventListener("user-logged-in", (e) => {

    const output = document.getElementById("output");
    const title = output.appendChild(document.createElement("h1"));
    title.innerText = "Profile:";
    const json = JSON.parse(e.detail);
    title.title = JSON.stringify(json)
    const divtbl = output.appendChild(document.createElement("table"));
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


