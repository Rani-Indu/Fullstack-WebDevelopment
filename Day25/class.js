// actual life entities are called object
// blueprint is called class

// classkeyword classname{
	// properties
	// behaviours - functions member functions
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
	// function
	display(){
		console.log("displaying the current product");
	}
	// display here is function , we can write function here even without using function keyword
}


let a = new product();
console.log(a);
a.display()