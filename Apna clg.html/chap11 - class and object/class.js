
//   Inheritance
// super keyword

class Person{
	constructor(name){
		this.species = "Homo Sapiens";
		this.name = name;
	}
	eat() {
		console.log("eat");
	}
}

class Engineer extends Person {
	constructor(name){
		super(); // to invoke / call parent class constructor
	}
	work() {
		// suppose - engineer first eat then he/she work
		eat();
		console.log("solve problems, build something");
	}
}
                          
let engobj = new Engineer("indu");                          