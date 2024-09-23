// alert("Hello !! \n \nPress ok to START.");

let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#msg");
let userscorePara = document.querySelector("#user-score");
let compscorePara = document.querySelector("#comp-score");


// array.forEach((val) => {callback function})
choices.forEach((choice) => {
	// node.addEventListener("event",() => {})
	choice.addEventListener("click", () => {
		userChoice = choice.getAttribute("id")
		console.log(userChoice);
		playgame(userChoice);	
	})
});

let genCompChoice = (userChoice) => {
	options = ["rock", "paper", "scissor"];
	let ranIdx = (Math.floor(Math.random()*3));
	return options[ranIdx];
};

let showWinner = (userWin, userChoice, compChoice) => {
	if(userWin){
		userScore++;
		userscorePara.innerText = userScore;
		message.innerText = `congratulations !! you won, ${userChoice} beats ${compChoice}`
		message.style.backgroundColor = "yellowgreen"
	}else{
		compScore++;
		compscorePara.innerText = compScore;
		compscorePara.style.color = "orangered"
		message.innerText = `you lose, ${compChoice} beats ${userChoice}`
		message.style.backgroundColor = "orangered"
	}
}

const playgame = (userChoice) => {
	const compChoice = genCompChoice();
	console.log("comp choice - ",compChoice);
	
	if( userChoice === compChoice ){
		message.innerText = "game draw";
		message.style.backgroundColor = "gold"
	} else {
		let userWin = true;
		if(userChoice === "rock"){
			userWin = compChoice === "paper"? false : true;
			
		}
		else if(userChoice === "paper"){
			
			userWin =
			 compChoice === "rock"? true : false;
		}else{
			userWin = compChoice === "paper"? true : false;
		}
	showWinner(userWin, userChoice, compChoice);
	}
}
