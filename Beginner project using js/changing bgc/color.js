let btn = document.querySelector( "#btn");
let body = document.querySelector( "body");


btn.addEventListener("click", () => {
	options= ["red", "orange","green", "yellow","magenta", "purple", "violet", "magenta", "pink", "silver", "gold", "orangered", "aqua", "aquamarine", "blue", "yellowgreen", "cyan"];
	ranIdx = Math.floor(Math.random()*options.length);
	// console.log(options[ranIdx]);
	const selectedColor = options[ranIdx];
	body.style.backgroundColor = selectedColor;
	console.log(selectedColor);	
})




//                Another Method 

// let btn = document.querySelector("#btn");
// let body = document.querySelector("body");

// 	idx = 0
// 	btn.addEventListener("click", () => {
// 		let colors = ["red", "orange","green", "yellow", "purple", "violet", "magenta", "pink", "silver", "gold", "orangered", "aqua", "aquamarine", "blue", "yellowgreen"]
		
// 		body.style.backgroundColor = colors[idx++];

// 		if(idx > colors.length-1){
// 			idx = 0;
// 		}
// 	})




// Another Method 

// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });

