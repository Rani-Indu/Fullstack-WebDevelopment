const button = document.querySelector("#btn"); 


const randomColor = () => {
	let val = "0123456789ABCDEF";
	console.log(val.length);
	let cons = "#";
	for(let i=0; i < 6; i++){
		cons = cons + val[Math.floor(Math.random() * val.length)];
		console.log(cons);
		
	}
};

button.addEventListener("click", randomColor);