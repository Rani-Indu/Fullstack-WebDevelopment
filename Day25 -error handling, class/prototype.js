let myHeroes = ["Hanuman","thor"]
let dcHeroes = ["spiderman", "batman", "flash"]

let heroPower = {
	thor: "hammer",
	spiderman: "web",

	// object ke andar hum methods bhi declare kar sakte hai
	getspidermanPower: function (){
		console.log(`spidy power is ${this.spiderman
		}`);
	}
}

// hum object ke andar inject kar rahe hai so ye sab ko available hoga, strings ko , arrays ko, kyuki js me sab kuchhi object hai
Object.prototype.indu = function(){
	console.log(`indu is present in all objects`);
}
// console.log(myHeroes.indu());
// console.log(heroPower.indu());

// jaisa ki sab kuch hi object hai to sab ko access mil gaya but 
// abhi sirf array ko access denahai
Array.prototype.heyIndu = function(){
	console.log(`indu say hi`);
}

// console.log(myHeroes.indu());
// console.log(heroPower.indu());
// console.log(myHeroes.heyIndu());
// console.log(heroPower.heyIndu());  // error as we have injected in array and not in object