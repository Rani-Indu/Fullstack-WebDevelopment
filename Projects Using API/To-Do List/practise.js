const inputBox = document.querySelector(".inputBox");
const addBtn = document.querySelector(".addBtn");
const todoList = document.querySelector(".todoList");


let editTodo = null;
// addTodo func to add functionality to add button and add remove and edit button
const addTodo = () => {
  const inputText = inputBox.value.trim();
  if (inputText.length <= 0) {
    alert("you must write something");
    return false;
  }

  if (addBtn.value === "Edit") {
    editLocalTodos(editTodo.target.previousElementSibling.innerHTML);
		editTodo.target.previousElementSibling.innerHTML = inputText;
    // editTodo.target.previousElementSibling.innerHTML = inputText;
    // editLocalTodo(inputText);
    addBtn.value = "Add";
    inputBox.value = "";
  } else {
    // creating li and p tag to display inputbox content
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    // adding class so that by selecting class we can apply css
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    inputBox.value = "";

    saveLocalTodos(inputText);
  }
};

// updatetodo function - to add functionality to Remove and Edit button
const updateTodo = (e) => {
  if (e.target.innerHTML === "Remove") {
    todoList.removeChild(e.target.parentElement);
    deleteLocalTodo(e.target.parentElement);
    // deleteLocalTodo ko pura li de diya , ab hum li ko manipulate kar sakte hai
  }
  if (e.target.innerHTML === "Edit") {
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.value = "Edit";
    editTodo = e;
  }
};

// const saveLocalTodos = (todo) => {
// 	let todos = [];
// 	todos.push(todo);
// 	console.log(todos);
// };

// function to save todos in our browser
const saveLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

// function to display todos saved above in browser in our webpage
const getLocalTodos = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
    // todos ko ek ek kar ke browsr me dikhane ke liye for each loop lagayenge
    // already array hai isliye forEach loop lag jayega
    // browser me todos same ushi tarah se display karenge jaise addTodo me kiya tha li, p tag create kar ke
    todos.forEach((todo) => {
      const li = document.createElement("li");
      const p = document.createElement("p");
    //   p.innerHTML = inputText;
	// this time we don't want inputText, but we want already stored todo from application to browser
      p.innerHTML = todo;
      li.appendChild(p);
      
      const editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.classList.add("btn", "editBtn");
      li.appendChild(editBtn);

      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Remove";
      // adding class so that by selecting class we can apply css
      deleteBtn.classList.add("btn", "deleteBtn");
      li.appendChild(deleteBtn);

      todoList.appendChild(li);
    });
  }
};


const deleteLocalTodo = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  let todoText = todo.children[0].innerHTML;
  let todoIndex = todos.indexOf(todoText);
  todos.splice(todoIndex, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  console.log(todoIndex);
  // todo hai complete li i,e hum browser me jo bhi type karenge wo complete li ke format me save hoga

}


const editLocalTodos = (todo) => {
  let todos = JSON.parse(localStorage.getItem("todos"));
  let todoIndex = todos.indexOf(todo);
  todos[todoIndex] = inputBox.value;
  localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener("DOMContentLoaded", getLocalTodos);
// jab pura code i,e html, css, js load ho jayega uske baad getLocalTodos kaam karega(i,e browser me todo display hoga)
addBtn.addEventListener("click", addTodo);
// we'll add EventListener to entire li so that either we click on edit or remove or any where else on li we can select anything and everything on li
todoList.addEventListener("click", updateTodo);
