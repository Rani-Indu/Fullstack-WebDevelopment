
//   Inheritance

// class Parent {
// 	hello() {
// 		console.log("hello");
// 	}
// }

// class child extends Parent {}

// let obj = new child()

class Person{
	constructor(){
		this.species = "Homo Sapiens"
	}
	eat() {
		console.log("eat");
	}
	sleep() {
		console.log("sleep");
	}
	work() {
		console.log("do nothing");
	}
}

class Engineer extends Person {
	work() {
		console.log("solve problems, build something");
	}
}


let induobj = new Engineer();                                
// class Doctor extends Person {
// 	work() {
// 		console.log("treats patients");
// 	}
// }

// let induobj = new Doctor();                                