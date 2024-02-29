const inputBox = document.querySelector("#inputBox");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");



let editTodo = null;
// Function to add Todo
const addTodo = () => {
	// alert("Hello");
	const inputText = inputBox.value.trim();
	if(inputText.length <= 0){
		alert("you must write something in your to do");
		return false;
	}

	if(addBtn.value === "Edit"){
		editLocalTodos(editTodo.target.previousElementSibling.innerHTML);
		editTodo.target.previousElementSibling.innerHTML = inputText;
		// editTodo is a global variable so it can perform the desired function not e
		// e.target.previousElementSibling.innerHTML = inputText;
		// editLocalTodos(inputText);
		addBtn.value = "Add";
		inputBox.value = "";
	}
	else{

	// creating p tag
	const li = document.createElement("li");
	const p = document.createElement("p");
	p.innerHTML = inputText;
	li.appendChild(p);
	
	// creating Edit Btn
	const editBtn = document.createElement("button");
	editBtn.innerText = "Edit";
	editBtn.classList.add("btn", "editBtn");
	li.appendChild(editBtn);
	
	// creating delete Btn
	const deleteBtn = document.createElement("button");
	deleteBtn.innerText = "Remove";
	deleteBtn.classList.add("btn", "deleteBtn");
	li.appendChild(deleteBtn);
	
	todoList.appendChild(li);
	inputBox.value = "";

	saveLocalTodos(inputText)

	}	
}


// // Function to update : (Edit/Delete) Todo
const updateTodo = (e) =>{
	// console.log(e.target);
	// console.log(e.target.innerHTML);
	if(e.target.innerHTML === "Remove"){
		// Edit Remove and Task1/p tag ka parentelement hai li 
		// Edit Remove and Task1/p tag aapas me siblings hue
		// li ka first child hai task1
		// console.log(e.target.parentElement);
		// todoList.removeChild(e.target.parentElement);
		todoList.removeChild(e.target.parentElement);
		// we can see li or p getting removed from browser page
		deleteLocalTodos(e.target.parentElement);
	}

	if(e.target.innerHTML === "Edit"){
		inputBox.value = e.target.previousElementSibling.innerHTML;
		// edit ka previous element hai p tag / task1 i,e jisme hum task likhte hai
		inputBox.focus();
		// cursor will automatically be present at inputBox
		addBtn.value = "Edit";
		editTodo = e;
	}


};


const saveLocalTodos = (todo) => {
	let todos;
	if(localStorage.getItem("todos") === null){
		todos = [];
	}
	else{
		todos = JSON.parse(localStorage.getItem("todos"));	
	}
	todos.push(todo);
	localStorage.setItem("todos",JSON.stringify(todos));
	// console.log(localStorage.getItem("todos"));
	// console.log(JSON.parse(localStorage.getItem("todos")));

	// JSON.parse - json string ko json object me convert karenge
	// localStorage.setItem("todos",todos)
	// console.log(todos);


}

const getLocalTodos = () => {
	let todos;
	if(localStorage.getItem("todos") === null){
		todos = [];
	}
	else{
		todos = JSON.parse(localStorage.getItem("todos"));
		todos.forEach(todo => {
	// creating p tag
	const li = document.createElement("li");
	const p = document.createElement("p");
	p.innerHTML = todo;
	li.appendChild(p);
	
	// creating Edit Btn
	const editBtn = document.createElement("button");
	editBtn.innerText = "Edit";
	editBtn.classList.add("btn", "editBtn");
	li.appendChild(editBtn);
	
	// creating delete Btn
	const deleteBtn = document.createElement("button");
	deleteBtn.innerText = "Remove";
	deleteBtn.classList.add("btn", "deleteBtn");
	li.appendChild(deleteBtn);
	
	todoList.appendChild(li);	
		});	
	}
}


const deleteLocalTodos = (todo) => {
	let todos;
	if(localStorage.getItem("todos") === null){
		todos = [];
	}
	else{
		todos = JSON.parse(localStorage.getItem("todos"));
	}
	let todoText = todo.children[0].innerHTML;
	// console.log(todoText);
	// console.log(todoText.children[1]);
	// console.log(todoText.children[2]);
	// console.log(todoText.children[0].innerHTML);
	let todoIndex = todos.indexOf(todoText);
	console.log(todoIndex);
	todos.splice(todoIndex, 1);
	localStorage.setItem("todos",JSON.stringify(todos));
};


const editLocalTodos = (todo) => {
	// yaha pe empty ke liye check nahi karenge kyuki empty ka matlab hai yaha pe koi todos nahi nai , aur agar koi todo nahi hai to edit kise karenge 
	// isliye empty ke liye check nahi karenge 
	let todos = JSON.parse(localStorage.getItem("todos"));
	let todoIndex = todos.indexOf(todo);
	todos[todoIndex] = inputBox.value;
	localStorage.setItem("todos",JSON.stringify(todos));
}




document.addEventListener("DOMContentLoaded", getLocalTodos);

// addBtn.addEventListener("click", () => {
// 	addTodo()
// });
// OR, bot are same specifying that when the button is clicked, the addTodo function should be executed.
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);