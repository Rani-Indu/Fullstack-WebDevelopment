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


//                                        object

// hum object ke andar inject kar rahe hai so ye sab ko available hoga, strings ko , arrays ko, kyuki js me sab kuchhi object hai
Object.prototype.indu = function(){
	console.log(`indu is present in all objects`);
}
// console.log(myHeroes.indu());
// console.log(heroPower.indu());


//                                  Array

// jaisa ki sab kuch hi object hai to sab ko access mil gaya but 
// abhi sirf array ko access denahai
Array.prototype.heyIndu = function(){
	console.log(`indu say hi`);
}

// console.log(myHeroes.indu());
// console.log(heroPower.indu());
// console.log(myHeroes.heyIndu());
// console.log(heroPower.heyIndu());  // error as we have injected in array and not in object


//                     Inheritance

const User = {
	name: "top name",
	email: "top@gmail.com"
}

const Teacher = {
	makeVideos: true
}

const TeachingSupport = {
	isAvailable: false
}

const TAAssistant = {
	makeAssignment: "JS Assignment",
	fulltime: true,
	__proto__: Teacher 
}

//                 OR

Teacher.__proto__ = User
//                 OR
Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(TAAssistant.isAvailable);


//                      string
String.prototype.truelength = function(){
	console.log(`true length is ${this.trim().length}`);   // chaining
	// yaha hai ek hi string hai isliye this use kiya hai
	// object me bahot saari values hoti hai isliye this.valuename use karte hai
}

"indu        ".truelength()
"  rani  ".truelength()
// hum kaise pata karenge o/pmme jo length hai wo in dono me se kis string ki hai
// iske liye hum use karte hai this keyword se - this ka matlab hai wo string jis pe hm o/p  caahte hai / jis pe hum kaam kar rahe hai