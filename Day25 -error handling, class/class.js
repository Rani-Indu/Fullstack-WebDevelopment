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
	name;
	price;
	rating;

	// constructor  - write inside class
	// hamesha object return/o/p karta hai

	// constructor(){
	// 	console.log("calling the constructor");
	// }


	// private data member
	#rating

	// constructor ek method hai so argument bhi le sakta hai
	constructor(n, p, r){
		console.log("calling the constructor");
		this.name = n;
		this.price = p;
		// this.rating = r;
		this.#rating = r;      // private data member
	// 	// return 10;  // if we are returning primitive then this will be avoided in constructor
	// 	// return {x:10, y:20} // if we are returning non-primitive then it'll be returned
	}

	// We can’t use multiple constructors in js - it'll throw error
	// constructor(){}

	static custom(){
		console.log("calling a static method");
	}


	// function
	// behaviours ---- functions  ---  member functions
	display(){
		console.log("displaying the current product", this.name, this.price, this.#rating );
	}
	// display here is function , we can write function here even without using function keyword
}


const a = new product("toyota", 5000000, 9.9);  // new ==== keyword creates an empty plain object
// in the above piece of code we are calling the constructor method
a.rating = 10;
console.log(a);
// console.log(typeof(a));   // o/p = object
a.name = "suv"
console.log(a.name);
// console.log(a.rating);  // undefined, private data mmber can't be accessed outside
a.display()


// static function or method
// a.custom();  // o/p = error , kyuki static method class property hai isliye isheobject ke saath call nahi kar sakte
//  a is object
// product.custom();
// class ka naam use kar ke hi static methods ko use kar sakte hai


// let t = {}
// t.a = 10;
// t.b = 20;
// samething hum upper bhi kar rahe hai 
/*
this.name = n;
this.price = p;
this.rating = r;
 */
// console.log(t);



//  public - class ke bahar bhi accessible hai 
// public me data member ko declare nahi karna padta
// private - bahar ki duniya ko ye data available nahi hoga , so koi bhi update y achange nahi kar sakta ishe
// private me data member ko declare karna padta hai using #data member name