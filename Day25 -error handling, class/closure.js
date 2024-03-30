let score = 4  // this has global scope so every everyoe canaccess this
function one(){
	let score = 1
	console.log(score);
}
function two(){
	let score = 2
	console.log(score);
}
function three(){
	console.log(score);
}

one()
console.log(score);// o/p - error as this is beyond scope of the fnction one
two()
three()  // score is not defined here so it'll take the global value i,e 4


function outerFunc(){
	let outerVar = 'I am at scope level 1'
	function innerFunc(){
		let innerVal = "I am at scope level 2"
		console.log(outerVar);
	}
	console.log(innerVal); // this is out of scope of innerFunc soitcan't be accessed here
	innerFunc()
}
outerFunc()

