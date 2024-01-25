// practice question

let DATA = "confidential information"

class User {
	constructor (name, email) {
		this.name = name;
		this.email = email;
	}

	viewData(){
		console.log("data is : ", DATA);
	}
}	

class Admin extends User {
	constructor(name,email) {
		super(name,email);
	}
	editData(){
		// DATA = "add new values"
	}
}

student1 = new User("indu", "abc@gmail.com")
student2 = new User("rani", "xyz@yahoo.com")
teacher1 = new User("eva", "ury@yahoo.com")
// admin1 = new Admin()
admin1 = new Admin("ema", "watson@yahoo.com")

