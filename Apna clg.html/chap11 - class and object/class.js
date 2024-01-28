// function getData(dataId) {
// 	console.log("data", dataId);
// }
// getData(213)

// function getData(dataId, getNextData) {// after 2 sec
// 	setTimeout(() => {
// 		console.log("data", dataId);
// 		if(getNextData) {
// 			getNextData();
// 		}	
// 	}, 2000);
// }
// function getData(dataId, getNextData) {// after 2 sec
// 	setTimeout(() => {
// 		console.log("data", dataId);
// 		if(getNextData) {
// 			getNextData();
// 		}	
// 	}, 2000);
// }

// format to write this function with setTimeout
// function name(params) {
// 	setTimeout(() => {	
// 	}, timeout);
// }



// getData(1, getData(2)) 
// next data ke liye humne ushi function ko use kiya hai jo 1st ke liye use hua hai
// but we'll get error if we right like above

// correct method is 

// getData(id, () => {     // format to write this code
// 	getData(id, () => {})
// })

// getData(1, () => {
// 	getData(2, () => {
// 		getData(3, () => {
// 			getData(4, () => {
// 				getData(5, () => {
// 					getData(6)
// 				});
// 			});
// 		});
// 	});
// });

// getData(1, () => {
// 	console.log("getting data 2.....");
// 	getData(2, () => {
// 		console.log("getting data 3.....");
// 		getData(3, () => {
	// 			console.log("getting data 3.....");
	// 			getData(4, () => {console.log("getting data 4....."),getData(5)
	// 			});
// 		});
// 	});
// });


// Promises

// let promise1 = new Promise ((resolved, reject) => {console.log("order placed");})

// let promise2 = new Promise ((resolved, reject) => {console.log("order placed");
// resolved("order delivered")})

// let promise3 = new Promise ((resolved, reject) => {console.log("order placed");
// reject("order canceled")})

//                Resolve
// function getData(dataId, getNextData) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log("data", dataId);
// 			resolve("success");
// 			if(getNextData) {
// 				getNextData();
// 			}	
// 		}, 5000);
// 	})	
// }

// //                                Reject
// function getData(dataId, getNextData) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log("data", dataId);
// 			reject("error");
// 			if(getNextData) {
// 				getNextData();
// 			}	
// 		}, 5000);
// 	})	
// }

// function name(params) {}


//                  Reject
// const getPromise = () => {
// 	return new Promise((resolve, reject) => {
// 		console.log("I am a promise");
// 		reject("Network error");   // err - is the message that we have passed here
// 		resolve("success"); // res - is the message that we have passed here

// 	});
// };

// let promise = getPromise();
// promise.catch((err) => {
// 	console.log("rejected", err);
// });


// promise.then((res) => {
// 	console.log("promise fulfilled", res);
// });



//              Promise Chain


// it is a asyncFunc which will return some data here it will return a promise and promise ke andar pass karne ke liye hume ek function pass karna hota hai
// function asyncFunc() {
	// 	return new Promise((resolve, reject) => {
// 		// in order to return we need to pass a function within Promise so arrow func
// 		setTimeout(() => {  // as asynchronous func
// 			console.log("data1"); //this is what func will return after 4sec
// 			resolve("success") // after returning data it will solve the promise	
// 		}, 4000);
// 	})
// }


// function asyncFunc1() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {  
// 			console.log("data1"); 
// 			resolve("success") 	
// 		}, 4000);
// 	})
// }
// function asyncFunc2() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {  
// 			console.log("data2"); 
// 			resolve("fulfilled") 	
// 		}, 4000);
// 	})
// }

// console.log("fetching data1......");
// let p1 = asyncFunc1();
// p1.then((res) => {
// 	console.log(res);
// 	console.log("fetching data2......")
// 	let p2 = asyncFunc2();
// 	p2.then((res) => {
// 	console.log(res);
// });
// });

// console.log("fetching data1......");
// let p1 = asyncFunc1();
// p1.then((res) => {
	// 	console.log(res);
	// });

// console.log("fetching data2......");
// let p2 = asyncFunc2();
// p2.then((res) => {
// 	console.log(res);
// });




// function getData(dataId, getNextData) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log("data", dataId);
// 			resolve("success");
// 			reject("error");
// 			if(getNextData) {
// 				getNextData();
// 			}	
// 		}, 5000);
// 	});	
// };

// // promise chain

// let p1 = getData(142);
// p1.then((res) => {
// 	console.log(res);
// });

function getData(dataId, getNextData) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("data", dataId);
			resolve("success");	
		}, 2000);
	});	
};

// promise chain

// getData(1).then((res) => {
// 	console.log(res);
// 	getData(2).then((res) => {
// 		console.log(res);
// 	});
// });

// better way to write above promise chain

getData(1)
	.then((res) => {
		return getData(2);
	})
	.then((res) => {
		return getData(3);
	})
	.then((res) => {
		return getData(4);
	})
	.then((res) => {
		console.log("success");
	})






