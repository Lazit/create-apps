const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector(".login-submit");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector(".logout");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"
//임의로 사용된 string은 실수 시 경고없이 무반응.
//변수로 집어주면 경고를 줘서 훨씬 좋다!!!

function onLoginSubmit(event) {
    logout.classList.remove(HIDDEN_CLASSNAME)
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //greeting.innerText = "Hello " + username;
    localStorage.setItem(USERNAME_KEY, loginInput.value)
    paintGreetings();
    // console.log(loginInput.value);
}


//임의작성
function handleLogOut(event) {
    const username = loginInput.value;
    localStorage.removeItem(USERNAME_KEY, username)
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    logout.classList.add(HIDDEN_CLASSNAME)
    location.reload()//새로고침
}
//임의작성 끝


function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `hello ${username}`; // ' 이나 " 아니고 `   << ~표시 위쪽
    greeting.classList.remove(HIDDEN_CLASSNAME)
    loginForm.classList.add(HIDDEN_CLASSNAME);
}


logout.addEventListener("click", handleLogOut);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings
    paintGreetings();
}

