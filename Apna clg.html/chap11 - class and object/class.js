
//   Inheritance
// super keyword

class Person{
	constructor(){
		console.log("enter parent constructor");
		this.species = "Homo Sapiens"
	}
	eat() {
		console.log("eat");
	}
}

class Engineer extends Person {
	constructor(branch){
		console.log("enter child constructor");
		super(); // to invoke / call parent class constructor
		this.branch = branch;
		console.log("exit child constructor");
	}
	work() {
		console.log("solve problems, build something");
	}
}
                          
let engobj = new Engineer("mechanical engg");                          