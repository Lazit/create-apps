window.onload = function(){
    const loadPage = document.querySelector(".loading");
     loadPage.classList.add("fade-out");
     setTimeout(function () {
         loadPage.classList.add("hidden");
     }, 500)
}

window.onbeforeunload = function(){
    const loadPage = document.querySelector(".loading");
     loadPage.classList.add("fade-out");
     setTimeout(function () {
         loadPage.classList.add("hidden");
     }, 500)
}