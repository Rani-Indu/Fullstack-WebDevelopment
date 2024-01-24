class ToyotaCar {
	constructor(brand, mileage){
		console.log("creating new object");
		this.brand = brand;
		this.mileage = mileage;
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


// // new object from above class
// let fortuner = new ToyotaCar("Toyota", 16);
// // fortuner.setBrand("Toyota");
// let nexus = new ToyotaCar("TATA", 20);
// // nexus.setBrand("TATA");
// nexus.brand = "innova"

let safari = new ToyotaCar("TATA",10);
console.log(safari);
let KIA = new ToyotaCar("suv",12);
console.log(KIA);

