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
// console.log(newArrayTwo);

// method to convert string , object to array
// Array.from()

// console.log(Array.from("foo"));
// console.log(Array.from([1, 2, 3]));
// console.log(Array.from([1, 2, 3], x => x - x));


//  ques = jitne bhi parameter aaye unko array me push karna hai
// steps -
// 1.  arguments ko convert karo array me 
// 2.  phir jo arguments / args aate hai uspe map/loop laga do
function manyArguments(){
    console.log(typeof arguments);
    let args = Array.from(arguments)  // args is array
    let finalArr = args.map(x => x)
    console.log(finalArr);
}
// manyArguments(1, 2, 3)
// manyArguments(1, 2, 3, 4, 5, 6, 7)

// let finalArr1 = args.map(x => x*2)
// let finalArr2 = args.map(x => x*x)
// console.log(finalArr1);
// console.log(finalArr2);

//                                     OR


//  ...args - here is rest operator - ye values ko leta hai aur pack kar deta hai array ke andar
function manyArgument1(...args){
    console.log(typeof args);
    let finalArr = args.map(e => e)
    console.log(finalArr);
}
// manyArguments(1, 2, 3)
// manyArgument1(1, 2, 3, 4, 5, 6, 7)


// spread operator - 2 array diye hai unke elements ko spread karna ho tab use hota hai 
// rest operator - elements diye ho unko array me conmine karna ho tab use hota hai 