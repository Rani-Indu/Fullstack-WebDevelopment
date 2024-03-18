const button = document.querySelector("#btn"); 


const randomColor = () => {
	let val = "0123456789ABCDEF";
	let cons = "#";
	for(let i=0; i < 6; i++){
		cons = cons + val[Math.floor(Math.random() * val.length)];	
	}
	console.log(cons);
	return cons;
};

button.addEventListener("click", () => {
	document.body.style.backgroundColor = randomColor();
	button.style.color = randomColor();
});