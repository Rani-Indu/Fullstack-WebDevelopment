class ToyotaCar {
	constructor(brand){
		console.log("creating new object");
		this.brand = brand;
	}
	start(){
		console.log("start");
	}
	stop(){
		console.log("stop");
	}

	setBrand(brand) {
		this.brand = brand;
		// this.brand = this one is property of object
		// brand - this one is argument
		// variable and property can have same name no issue, but both brand are different in meaning
		// or
		// this.brandName = brand;
	}
}


// new object from above class
// fortuner.setBrand("Toyota");
// nexus.setBrand("TATA");

let fortuner = new ToyotaCar("Toyota");
let nexus = new ToyotaCar("TATA");
let safari = new ToyotaCar("");
let suv = new ToyotaCar();
nexus.brand = "innova"

