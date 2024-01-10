// let btn1 = document.querySelector("#btn1");
// //  always access id using #

// btn1.onclick = () => {
// 	console.log("btn1 was clicked");
// 	let a = 25;
// 	a++;
// 	console.log(a);
// }

// let div = document.querySelector("div");
// div.onmouseover = (e) => {
// 		console.log("you are inside div");
// 	console.log(e);
// 	console.log(e.type);
// 	console.log(e.target);
// 	console.log(e.clientX, e.clientY);
// 	}



//                                 event object 

	// btn1.onclick = (e) => {
	// 	console.log(e);
	// 	console.log(e.type);
	// 	console.log(e.target);
	// 	console.log(e.clientX, e.clientY);
	// }
	// on clicking button on browser we'll get value of event object
	
	
	//                         event listeners
	
	
	// btn1.addEventListeners("click", event handler(one who runs the code))
	// btn1.addEventListener("click", (e) => {
	// 	console.log("button was clicked using eventListener");
	// 		console.log(e);
	// 		console.log(e.type);
	// 		console.log(e.target);
	// 		console.log(e.clientX, e.clientY);
	// })





	//                       removing event
	
	
	// btn1.addEventListener("click", () => {
	// 	console.log("button was clicked using handler1");
	// })
	// btn1.addEventListener("click", () => {
	// 	console.log("button was clicked using handler2");
	// })
	// const handler = () => {
	// 	console.log("button was clicked using handler3");
	// };
	// btn1.addEventListener("click", handler);
	
	// btn1.addEventListener("click", () => {
	// 	console.log("button was clicked using handler4");
	// })
	// btn1.removeEventListener("click", handler)



	//                                     question 7:41:00


//        breaking question into simple fundamental steps
	
	// let modeBtn = document.querySelector("#mode");
	// let currMode = "light"; // dark
	
	// modeBtn.addEventListener("click", () => {
		// 	if (currMode === "dark"){
			// 		currMode = "light"
			// 	} else {
				// 		currMode = "dark"
				// 	}
				// 	console.log(currMode);
				// });
				// 
				


//        breaking question into simple fundamental steps

	// let modeBtn = document.querySelector("#mode");
	// let currMode = "light"; // dark

	// modeBtn.addEventListener("click", () => {
	// 	if (currMode === "dark"){
	// 		currMode = "light";
	// 		document.querySelector("body").style.backgroundColor = "white"
	// 	} else {
	// 		currMode = "dark"
	// 		document.querySelector("body").style.backgroundColor = "black"
	// 	}
	// 	console.log(currMode);
	// });
	




	//  we can also do this dark and light thing using css classes



	// let modeBtn = document.querySelector("#mode");
	// let body = document.querySelector("body");
	// let currMode = "light"; // dark

	// modeBtn.addEventListener("click", () => {
	// 	if (currMode === "dark"){
	// 		currMode = "light";
	// 		body.classList.add("light");
	// 		body.classList.remove("dark");
	// 	} else {
	// 		currMode = "dark"
	// 		body.classList.add("dark");
	// 		body.classList.remove("light");
	//  classList - when we want code of more than 1 class to get applied in the code
			
	// 	}
	// 	console.log(currMode);
	// });

	// let modeBtn = document.querySelector("#mode");
	// let currMode = "light";

	// modeBtn.addEventListener("click", () => {
	// 	if (currMode === "light") {
	// 		currMode = "dark";
	// 		document.querySelector("body").style.backgroundColor = "black"
	// 	}else {
	// 		currMode = "light";
	// 		document.querySelector("body").style.backgroundColor = "white"
	// 	}
	// 	console.log(currMode);
	// });


	//                          same work using class

	let modeBtn = document.querySelector("#mode");
	let body = document.querySelector("body")
	let currMode = "light";

	modeBtn.addEventListener("click", () => {
		if (currMode === "light") {
			currMode = "dark";
			body.classList.add("dark");
			body.classList.remove("light");
		}else {
			currMode = "light";
			body.classList.add("light");
			body.classList.remove("dark");
		}
		console.log(currMode);
	});
