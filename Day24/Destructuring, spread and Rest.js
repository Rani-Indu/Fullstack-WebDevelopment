// arr = [1, 2, 3, 4 ,5]
// console.log(typeof(arr));
// o/p - object


const arr1 = [1, 2, 3, 4 ,5]
const arr2 = [7, 8, 9, 4]

// const arr3 = arr1.concat(arr2)
// console.log(arr3);
// const arr4 = [arr1, arr2]
// console.log(arr4);


//    ...  = spread operator or rest operator depends on the implementation


// spread operator - here it is used as spread operator
// as it spreads the elements inside arr1 and arr2
const arr3 = [...arr1, ...arr2]
// console.log(arr3);

let nums = [1, 2, 3, 4, 5];
nums.map((val) => {
    // console.log(val);
})

// object to array 
// array.from()

// console.log(array.from("foo"));
// console.log(array.from([1, 2, 3], x => x + x));


// Methods to create Array
// method 1
let newArrayOne = [1, 2, 3, 4]
// method 2
let newArrayTwo = new Array(1, 2, 3)
console.log(newArrayTwo);

// method to convert string , object to array
// Array.from()

console.log(Array.from("foo"));
// console.log(Array.from([1, 2, 3]));
console.log(Array.from([1, 2, 3], x => x - x));