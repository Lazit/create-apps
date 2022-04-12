const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector(".logout");

const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //greeting.innerText = "Hello " + username;
    localStorage.setItem("username", username)
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    // console.log(loginInput.value);
}


function handleLinkClick(event) {
    event.preventDefault();
    console.log(event); 
}


function handleLogOut(event) {
    const username = loginInput.value;
    localStorage.removeItem("username", username)
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
logout.addEventListener("click", handleLogOut);