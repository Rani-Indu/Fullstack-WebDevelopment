
//                        Example 1
// const powerTwo = (n) => {
// 	return n ** 2
// }


// upper wale function ko hum as a argument treat kar sakte hai aur as return bhi
// function powerCube(powerTwo, n){
// 	return powerTwo(n) * n
// };

// console.log(powerCube(powerTwo, 3));





//                            Example 2

// function sayHello(){
	// 	return () => {
		// 		console.log("Hello Js");
		// 	}
// }

// let guessValue = sayHello();
// console.log(guessValue);

// guessValue()



//                            Example 3
// const higherOrder = (n) => {
	// 	const oneFun = (m) => {
		// 		const twoFun = (p) => {
			// 			return m + n + p  // this is for function twoFun
// 		}
// 		return twoFun   // for function oneFun
// 	}
// 	return oneFun        //  for function oneFun
// }

// console.log(higherOrder(2)(3)(4));
// console.log(higherOrder(9)(8)(9));




//                            Example 4
// const myNums = [2, 3, 4, 5]

// const sumArray = (arr) => {
	// 	let total = 0
	// 	// arr.forEach(element => {});
	// 	arr.forEach(function(element){
		// 		total += element
		// 	});
// 	return total
// }

// console.log(sumArray(myNums));
// console.log(sumArray([1,4, 6, 8]));



//                            Example 5

// function sayHello(){
// 	// console.log("Hello Indu !");
// 	console.log("Hello Indu !", Math.random());
// 	// random function is used just to keep track that function is continuously running as it generates random value each time
// }
// // setInterval(sayHello, 1000)     // function will run continuously after every 1 sec
// setInterval(sayHello, 1000)     

// setTimeout(sayHello, 2000)



//                         forEach,  map , filter, reduce



//                                     forEach
// let arr = [2, 3, 4] ;

// arr.forEach((element, index, arr) => {
// 	console.log("arrow : ", element, index, arr);
// });


// //                          OR

// arr.forEach(function(element, index, arr){
// 	console.log(element, index, arr);
// });


// heroes = ["hanuman", "abhimanyu", "karn", "arjun"];
// heroes.forEach(hero => {
	// 	console.log(hero.toUpperCase())
	// });
	



//                                      map

// heroes = ["hanuman", "abhimanyu", "karn", "arjun"];

// heroes.map(function(element){
	// 	console.log(element.toUpperCase());
	// })
	
	// heroes.map((hero) => {
		// 	console.log(hero.toUpperCase());
		// })
		
		
//                                     filter

// heroes = ["hanuman", "abhimanyu", "karn", "arjun", "spiderman", "batman", "superman"];
// // console.log(heroes);
// const heroesWithMan = heroes.filter((hero) => {
// 	return hero.endsWith("man")
// })
// console.log(heroesWithMan);



//                                         reduce
const cartBill = [20, 30, 40]
const sumOfCartBill = cartBill.reduce((previous, current) => previous+current, 0)
console.log(sumOfCartBill);
