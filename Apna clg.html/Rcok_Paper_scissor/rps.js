// har ek kaam ke liye ek function banao , ek funt ka kaam hoga ek hi kaam karna / ek hi action perform karna
alert("Press Ok to Start Game !!")
// we'll make two variables  one to track comp score second to track our score

let userScore = 0;
let compScore = 0;

// hume ye bhi track karna hoga ki 3 choice me se kaun se choice pe click kiya ja raha hai, for which we need to access all our 3 choices

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
	// console.log(choice);
	choice.addEventListener("click", () => {
		// we can print all the available choices
		// hum har ek div ke id ko access kar sakte hai
		const userChoice = choice.getAttribute("id")
		// console.log("choice was clicked", userChoice);
		playgame(userChoice);
		// playgame ko pata hoga ki user ki choice kya hai
	});
});


const playgame = (userChoice) => {
	
	// playgame ko pata hoga ki user ki choice kya hai
	const compChoice = genCompChoice();
	

	if (userChoice === compChoice) {
		// draw game
		drawGame();
	} else {
		let userWin  = true;
		if (userChoice === "rock") {
			// available opt for comp -paper, scissor
			userWin = compChoice === "paper" ? false : true
			// comp will win and user will lose i,e userwin = false
			// but if compChoice = scissor then userwin = true 
		}
		else if (userChoice === "paper") {
			//  available opt for comp - rock, scissor
			userWin = compChoice === "rock" ? true : false
			// comp rock, user = win - true
			// comp scissor, user = lose - false
		} 
		else {                //userChoice === "scissor"
			// rock, paper
			userWin = compChoice === "rock" ? false : true;	
		}
		showWinner(userWin, userChoice, compChoice);
	}
};

// to play game we need userchoice but we also need computer choice

//  modular way of programming - har ek kaam ke liya ek function banao, so that we generate reusable components , and we can use/ call them whenever needed in future

const genCompChoice = () => {
	const options = ["rock", "paper", "scissor"];
	// js ke andar aisa koi method nahi hai bahot sari string se koi random string nikalne ka, but js me well known frequently used function hai random function aur ek math class hoti hai and random 0 - 1 ke bich me koi bhi random number generate karti hai, sare no. alag alag
	// array ke andar numbers index ban sakte hai isliye we have stored it in form of array
	const randIdx = Math.floor(Math.random() * 3);
	return options[randIdx];
}

//  now we have to display the result
const drawGame = () => {
	
	msg.innerText = "game draw, play again !!";
	// msg.innerText = `game draw,  ${userChoice} equal  ${compChoice}`;
	msg.style.backgroundColor = "orange";
}

//  to show winner
const showWinner = (userWin, userChoice, compChoice) => {
	if (userWin) {
		userScore++;
		userScorePara.innerText = userScore;

		msg.innerText = `you win ! ${userChoice} beats ${compChoice}`;
		msg.style.backgroundColor = "green";
	} else {
		compScore++;
		compScorePara.innerText = compScore;
	
		msg.innerText = `you lose, ${compChoice} beats ${userChoice}`;
		msg.style.backgroundColor = "red";
	}
}

//  next we need to show the result in the msg paragraph
// we want to change the msg in html so first we need to access it 

const msg = document.querySelector("#msg");

// next we need to update the score
//  we need to access respective score of comp and user 

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")
