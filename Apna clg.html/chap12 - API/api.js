const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const button = document.querySelector("#btn");

// we have multiple ways to get result from promises - 1. (.then)/ promise chaining 2. Async Await

//  getting result from promise using Async Await

// const getFacts1 = async () => {
	//     let response = await fetch(URL); // await - as need some data from api which may take some time
// 	//  the result / output after call is called - response
// 	console.log(response);	// json format - it looks like js object ,but it is not js object			
// 	// console.log(response.status);				
// // }
const getFacts = async () => {
    let response = await fetch(URL); 
	console.log(response); // json format
	let data = await response.json();// await becoz json is asynchronous 
	console.log(data);								
	console.log(data[0]);	// making data global							
	console.log(data[1].text);
	factPara.innerText = data[0].text; // we can get 								
	factPara.innerText = data[1].text; // we can get 								
	factPara.innerText = data[2].text; // we can get 								
	}
	
	// same code using (.then)
// 	function getFacts() {
// 		fetch(URL)
// 		.then((response) => {
// 			return response.json();
// 		})
// 		.then((data) => {
// 			console.log(data);
// 			factPara.innerText = data[1].text; // we can get 								
// 	});
// }

button.addEventListener("click",getFacts)