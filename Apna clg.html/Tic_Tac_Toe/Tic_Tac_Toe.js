

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turn0 = true;  // playerX, player0








// //       array we usually study 
// let arr = ["apple", "banana", "mango", "orange"];
// //           2D Array
// let arr2 = [["apple", "banana"], ["spinach", "potato"], ["top", "trouser"]];


const winPatterns = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8]];

boxes.forEach((box) => {
	box.addEventListener("click", () => {
		console.log("box was clicked");
		// if (turn0 === true) {     // both line has same meaning
		if (turn0) {   // both line means if turn is of 0 player
			box.innerText = "O";
			turn0 = false;
		} else {
			box.innerText = "X";
			turn0 = true;
			// turn0 = true means turn of 0
			// turn0 = false means turn is not of 0 if,e turn is of x
		}	
			

			// loophole -

			// but upto this there is a problem that we can click / fill botton multiple time unlike real game where we fill one place only once,

			// so for this we need to disable the button after one click
		box.disabled = true;
	});
});


