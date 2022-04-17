const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// or document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)) //todos는 로컬스토리지에 기록될 이름, JSON~은 값을 문자로 만들어줌. JSON.parse 와 짝꿍.
    // console.log(JSON.parse(localStorage.getItem("todos")))
}

function deleteToDo(event) {
    // localStorage.removeItem
    // yet we don't know which click it was! second one? or first one?
    // console.dir(event.target.parentElement)//.innerText)
    //>>now we know what was clicked!
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li")
    li.id = newTodo.id
    const span = document.createElement("span")
    span.innerText = newTodo.text;
    const button = document.createElement("button")
    button.innerText = "x";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}



function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //localStorage.setItem
    toDoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    //자바스크립트는 array 안의 각각의 item 마다 각각의 function을 사용할 수 있게 해줌.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo)
    //각각의 아이템에 대해 foreach 안의 함수를 실행해라.
    // console.log("sayhello") 함수 만들고 foreach 문 안에 넣어서 테스트
    // parsedToDos.forEach((item) => console.log("This is the turn of", item));   //함수 short cut
    //paintToDo만 호출하면, 기존의 것은 저장을 못하고 새로운 값만 저장해서 보여줌.
    //위의 원인은 시작할때 8번줄에서 array가 빈 상태로 시작해서 그럼
    //newTodo 만 저장해서 그럼. 이전 데이터의 복사본이 없음.
    //해결 = 54번줄 추가
    //로컬 스토리지는 데이터 베이스가 아님. 데이터베이스는 array 자체이고, 로컬스토리지는 array를 복사해두는 곳임.

}