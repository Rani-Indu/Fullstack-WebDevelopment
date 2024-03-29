// method 1 -  anonymous function - of writing a function

// function product (n, p, r){
// 	this.name = n;
// 	this.price = p;
// 	this.rating = r;
// 	// return 10
// 	// return {x: 10}
// 	return this
// }

// // new keyword likhte hi ek brand new empty plain object banta hai

// const p = new product("macbook", 150000, 5);
// console.log(p);

// //  yaha pe hum classes nahi likhte , function ke basis pesara blue print define karte hai


// let x = {
// 	p : product
// };

// x.p("airpods", 20000, 7)






// method 2 - name function - of writing a function

// const product = function(n, p, r){
// 	this.name = n;
// 	this.price = p;
// 	this.rating = r;
// }

// const p = new product("Xperia", 150000, 5);
// console.log(p);

// we can see that o/p remains same 




//                          Arrow function

// const product = (n, p, r) => {
// 	this.name = n;
// 	this.price = p;
// 	this.rating = r;
// }

// const p = new product("Xperia", 150000, 5);
// console.log(p);

//                            normal function
// let obj = {
// 	x : 10,
// 	fun () {
// 		console.log(this.x);
// 	}
// }

// obj.fun();
//  o/p = 10


//                            arrow function      
// we can't use arrow function as function constructor we can see that we'll get error
let obj = {
	x : 10,
	fun: () => {
		console.log(this.x);
	}
}

obj.fun();
//  o/p = undefined
// we are getting error as it is arrow function


// let obj = {
// 	x : 10,
// 	fun() {
// 		y = {
// 			gun: () => {
// 				console.log(this.x);
// 			}
// 		}
// 		y.gun();
// 	}
// }

// obj.fun();
// jab bhi hume koi behaviour execute karna hai to uske liye hum member functions add kar sakte hai aur member function ko call karne ke liye hum object ka use karte hai
// pehle object banate hai 
// phir ushobject ka use kar ke ek member function ko call kar pate hai