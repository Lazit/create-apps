const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector(".login-submit");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector(".logout");
const section = document.querySelector(".section4")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"
const FADE_IN = "fade-in"
const FADE_IN_CUSTOM = "fade-in-cus"
const FADE_OUT = "fade-out"
const FADE_OUT_CUSTOM = "fade-out-cus"
//임의로 사용된 string은 실수 시 경고없이 무반응.
//변수로 집어주면 경고를 줘서 훨씬 좋다!!!

function onLoginSubmit(event) {
    event.preventDefault();
    // loginForm.classList.add(HIDDEN_CLASSNAME);
    //greeting.innerText = "Hello " + username;
    localStorage.setItem(USERNAME_KEY, loginInput.value)
    paintGreetings();
    // console.log(loginInput.value);
}


//임의작성
function handleLogOut(event) {
    event.preventDefault()
    const username = loginInput.value;
    localStorage.removeItem(USERNAME_KEY, username)
    greeting.classList.remove(FADE_IN)
    greeting.classList.add(FADE_OUT_CUSTOM);
    logout.classList.remove(FADE_IN_CUSTOM)
    logout.classList.add(FADE_OUT_CUSTOM);
    section.classList.remove(FADE_IN)
    section.classList.add(FADE_OUT_CUSTOM)
    setTimeout(function () {
        section.style.display = "none"
        loginForm.classList.remove(FADE_OUT_CUSTOM);
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.classList.add(FADE_IN)
     }, 200)
    loginInput.value = "";
    // location.reload()//새로고침
}
//임의작성 끝


function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `${username}`; // ' 이나 " 아니고 `   << ~표시 위쪽
    loginForm.classList.add(FADE_OUT_CUSTOM);
    setTimeout(function () {
        loginForm.classList.add(HIDDEN_CLASSNAME);
     }, 200)
    setTimeout(function () {
        greeting.classList.remove(FADE_OUT_CUSTOM)
        logout.classList.remove(FADE_OUT_CUSTOM)
        section.classList.remove(FADE_OUT_CUSTOM)
        greeting.classList.remove(HIDDEN_CLASSNAME)
        logout.classList.remove(HIDDEN_CLASSNAME)
        section.style.display = "flex"
        logout.classList.add(FADE_IN_CUSTOM)
        greeting.classList.add(FADE_IN)
        section.classList.add(FADE_IN)
    }, 200);
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

