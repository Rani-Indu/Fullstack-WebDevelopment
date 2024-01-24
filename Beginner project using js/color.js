let btn = document.querySelector( "#btn");
let body = document.querySelector( "body");


btn.addEventListener("click", () => {
	options= ["red", "orange","green", "yellow", "purple", "violet", "magenta", "pink", "silver", "gold", "orangered", "aqua", "aquamarine", "blue", "yellowgreen"];
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



