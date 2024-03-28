// actual life entities are called object
// blueprint is called class

// classkeyword classname{
	// properties
	// behaviours ---- functions  ---  member functions
	// jo bhi behaviours hai wo function ke form me represent hote hai aur inko kehte hai member functions
	// behaviour - product ko buy kiya ja sakta hai , display kiya ja sakta hai , add to cart kar sakte hai
	// properties - color, feature
// }


//  syntax to write class
class product{
	// properties
	// name: 
	// price:
	// rating:

	// constructor  - write inside class
	// hamesha object return/o/p karta hai

	// constructor(){
	// 	console.log("calling the constructor");
	// }

	// constructor ek method hai so argument bhi le sakta hai
	constructor(n, p, r){
		console.log("calling the constructor");
		this.name = n;
		this.price = p;
		this.rating = r;
		// return 10;  // if we are returning primitive then this will be avoided in constructor
		// return {x:10, y:20} // if we are returning non-primitive then it'll be returned
	}

	// We can’t use multiple constructors in js - it'll throw error
	// constructor(){}


	// function
	display(){
		console.log("displaying the current product");
	}
	// display here is function , we can write function here even without using function keyword
}


let a = new product("toyota", 5000000, 9.9);  // new ==== keyword creates an empty plain object
// in the above piece of code we are calling the constructor method
console.log(a);
console.log(a.name);
// a.display()


let t = {}
t.a = 10;
t.b = 20;
// samething hum upper bhi kar rahe hai 
/*
this.name = n;
this.price = p;
this.rating = r;
 */
// console.log(t);