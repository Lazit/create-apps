const clock = document.querySelector("#clock");

// function sayHello() {
//     console.log("hello");
// }
// setTimeout(sayHello,5000) 5초뒤에 실행(한번)
// setInterval(sayHello, 1000) 1초마다 실행(반복)

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    //const handleSecond = date.getSeconds();
    // if (handleSecond < 10) {
    //     clock.innerText = (`${date.getHours()}:${date.getMinutes()}:0${date.getSeconds()}`)
    // } else {
    //     clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    // } 9초 앞에 0을 붙여 09 처럼 보이게 해줌
}
getClock()
setInterval(getClock, 1000)


//이 시계는 로컬컴퓨터 타임만 따옴. 특정 시간대 또는 서버시간을 따오고 싶으면 api 검색해보기
//.padStart 에 대해 알고싶으면 밑을 console에 쳐보기
// "hello".padStart(20, "x");

// "1".padStart(2, 0)


document.getElementById