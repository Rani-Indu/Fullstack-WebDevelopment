const inputBox = document.querySelector(".inputBox");
const addBtn = document.querySelector(".addBtn");
const todoList = document.querySelector(".todoList");
const editBtn = document.querySelector(".editBtn");



let editTodo = null;
// addTodo func to add functionality to add button and add remove and edit button
const addTodo = () => {
	const inputText = inputBox.value.trim();
	if(inputText.length <= 0){
		alert("you must write something");
		return false;
	}

	if(addBtn.value === "Edit"){
		editTodo.target.previousElementSibling.innerHTML = inputText;
		// addBtn.innerText === "Add"
		addBtn.value === "Add";
		inputBox.value = "";
	}
	else{

		// creating li and p tag to display inputbox content
		const li = document.createElement("li");
	const p = document.createElement("p");
	p.innerHTML = inputText;
	li.appendChild(p);
	todoList.appendChild(li);
	inputBox.value = "";

	
	const editBtn = document.createElement("button");
	editBtn.innerText = "Edit";
	editBtn.classList.add("btn", "editBtn")
	li.appendChild(editBtn);
	
	const deleteBtn = document.createElement("button");
	deleteBtn.innerText = "Remove";
	// adding class so that by selecting class we can apply css
	deleteBtn.classList.add("btn", "deleteBtn")
	li.appendChild(deleteBtn);
	
}
}



// updatetodo function - to add functionality to Remove and Edit button 
const updateTodo = (e) => {
	if(e.target.innerHTML === "Remove"){
		todoList.removeChild(e.target.parentElement);
	}
	if(e.target.innerHTML === "Edit"){
		inputBox.value = e.target.previousElementSibling.innerHTML;
		inputBox.focus();
		addBtn.value = "Edit";
		addBtn.innerText = "Edit";
		editTodo = e;
	}
};










addBtn.addEventListener("click", addTodo);
// we'll add EventListener to entire li so that either we click on edit or remove or any where else on li we can select anything and everything on li
todoList.addEventListener("click", updateTodo);







