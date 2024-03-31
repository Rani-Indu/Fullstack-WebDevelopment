// let score = 4  // this has global scope so every everyoe canaccess this
// function one(){
// 	let score = 1
// 	console.log(score);
// }
// function two(){
// 	let score = 2
// 	console.log(score);
// }
// function three(){
// 	console.log(score);
// }

// one()
// console.log(score);// o/p - error as this is beyond scope of the fnction one
// two()
// three()  // score is not defined here so it'll take the global value i,e 4


// function outerFunc(){
// 	let outerVar = 'I am at scope level 1'
// 	function innerFunc(){
// 		let innerVal = "I am at scope level 2"
// 		console.log(outerVar);
// 	}
// 	console.log(innerVal); // this is out of scope of innerFunc soitcan't be accessed here
// 	innerFunc()
// }
// outerFunc()

// // lexical scoping - inner functions, outer function ko access kar sakte hai lekin outer function inner function ko access nahi kar sakte 


const myGlobalValue = 0

function func(){
	const val1 = 1;
	console.log(myGlobalValue);
	// console.log(myGlobalValue, val2); //can't access val2 as it is out of scope of func of val2

	function innerofFunc(){
		const val2 = 2;
		console.log(val1, val2, myGlobalValue);
		
		function innerofInnerfunction(){
			const val3 = 3;
			console.log(val1, val2, val3,  myGlobalValue);	
		} 
		innerofInnerfunction()
	}
	innerofFunc()
}
func()