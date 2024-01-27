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
	
const getPromise = () => {
	return new Promise((resolve, reject) => {
		console.log("I am a promise");
		resolve("success"); // res - is the message that we have passed here
		reject("Network error");   // err - is the message that we have passed here
	});
};

let promise = getPromise();
promise.then((res) => {
	console.log("promise fulfilled", res);
});
promise.catch((err) => {
	console.log("rejected", err);
});





// let promise = getPromise



