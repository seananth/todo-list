let todos = [];

let input = document.querySelector(".input");
let todoList = document.querySelector(".todo-list");

//render array items
function renderTodo() {
  todoList.innerHTML = todos
    .map((todo) => {
      return "<li class='todoItem'>" + todo + "</li>";
    })
    .join("");
}

//listen on input
document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault(); //stops fiorm from refreshing page

  //add input value to todos array
  todos.push(input.value);

  renderTodo();
  document.querySelector(".form").reset();
});
