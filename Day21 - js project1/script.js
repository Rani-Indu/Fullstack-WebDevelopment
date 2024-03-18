const button = document.querySelector("#btn"); 

//                                     method 1

// const randomColor = () => {
// 	let val = "0123456789ABCDEF";
// 	let cons = "#";
// 	for(let i=0; i < 6; i++){
// 		cons = cons + val[Math.floor(Math.random() * val.length)];	
// 	}
// 	console.log(cons);
// 	return cons;
// };

// button.addEventListener("click", () => {
	// 	document.body.style.backgroundColor = randomColor();
	// 	button.style.color = randomColor();
	// });
	
	
	
	//                                      method 2
	
// const randomColor = () => {
// 	let val = "0123456789ABCDEF";
// 	let cons = "#";
// 	for(let i=0; i < 6; i++){
// 		cons = cons + val[Math.floor(Math.random() * val.length)];	
// 	}
// 	console.log(cons);
// 	return cons;
// };

// console.log(randomColor());

// const changeRandomColor = () => {
// 	document.body.style.backgroundColor = randomColor();
// };

// button.addEventListener("click", changeRandomColor)
var a=0;
for(a;a<5;a++);
console.log(a);


