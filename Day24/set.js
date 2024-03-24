//  set is a object
let emptySet = new Set()

// console.log(emptySet.size);  // o/p = 0

// let myArray = [1, 2, 3, 4]
// let newSet = new Set(myArray)
// console.log(newSet);

// let myArray1 = [3, 4, 3, 4, 3, 4, 3, 4]
// let newSet1 = new Set(myArray1)
// console.log(newSet1);


let myArray = [1, 2, 3, 4, 3, 2]
let newSet = new Set([...myArray])  // spread operator
console.log(newSet);