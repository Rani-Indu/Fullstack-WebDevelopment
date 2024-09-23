//    Array
// [1, 2, 3, "indu", true, 4.5, "89"]

// we can store array in variables
// let a = [1, 2, 3, "indu", true, 4.5, "89"];
// console.log(a);

// let b = new Array();
// console.log(b);
// output - empty array

// 5 length ki element jisme abhi koi element nahi hai
// let b = new Array(5);
// console.log(b);

// we want to initialize array with some values
// let b = new Array("indu", "rani");
// console.log(b);

//         array  = [11, 21, 22, 34, 45]
// index/position = [ 0, 1, 2, 3, 4,  5]
// index last element- (array.length -1)

// let a = [1, 2, 3, "indu", true, 4.5,"86"];
// // console.log(a[0]);
// // console.log(a[6]);
// // console.log(a[8]);

// a[6] = "rani";
// console.log(a);
// console.log(a[6]);
// we can see that arrays in js are mutable - i,e we can update values

//                               Array Methods

// for adding in last
// let arr = [1, 2, 3, 4, 5];
// let b = arr.push(77);
// console.log(b);
// console.log(arr);

// // for removing from last
// let c = arr.pop();
// console.log(c);
// console.log(arr);

// // for removing from first
// let f = arr.shift();
// console.log(f);
// console.log(arr);

// // for adding in first
// let d = arr.unshift(9);
// console.log(d);
// console.log(arr);

// // to join two or more arrays
// let a1 = [1, 2, 3, 4, 5];
// let a2 = [4, 5, 6];
// let a3 = a2.concat(a1);
// console.log(a1, a2, a3);

// // to reverse entire  array
// // a3.reverse();
// // console.log(a3);

// // to convert arrays into string
// let s = a3.join("");
// console.log(s);

// let n = a3.join("@");
// console.log(n);

// console.log(a3.indexOf(4));

// // this is not part of array so index becomes -1
// console.log(a3.indexOf(74));

// let arr1 = [81, 62, 43, 44, 89, 765,43];
// console.log(arr1.slice(2, 5));

// // if we want to add or delete in between array
// // arr1.splice(2, 0, 11);
// // arr1.splice(2, 1, 11);
// arr1.splice(2, 2, 11, 22, 33);
// // at 2nd index 0 delete add 11
// console.log(arr1);

//                               Functions

// function  greet(){
// 	console.log("Hi There");
// 	console.log("how r u");
// }

// greet()

// function sqr(x){ // x - parameter
// 	// console.log(x*x);
// 	return(x*x);
// }

// let a = sqr(8); // 8 - argument
// console.log(a);

//       Function without a parameter(single and multiple)

// function add(x,y){
// 	return x+y;
// }

// console.log(add(1,3));

// function add(x,y=10){
// 	return x+y;
// }

// console.log(add(1,3));
// // x = 1 , y = 3
// console.log(add(1));
// // x = 1 , y = 10

// function add(x=10,y){
// 	return x+y;
// }
// console.log(add(1));
// x = 1 , y has no value
// as the parameters takes value from left to right so first x then y

//                         Anonymous Function

// let x = function(){
// 	console.log("Hi");
// }

// x();

//            Immediately invoke function expression IIFE

// syntax to write this function
// (function)()

// // named function expression
// (function exec(){
// 	console.log("Hi");
// })();

// // anonymous function expression
// (function(x){
// 	console.log(x*x);
// })(5);




//                       Object
//          Creating object and Manipulating values in Object

// let obj = {id: 101, name : "indu", salary: 50000};
// console.log(obj);

//  we can create objects using empty functions
// let emp = new Object();
// emp.id = 22;
// emp.name = "rani";
// emp.habit = "dancing";
// console.log(emp);

// we can also create objects using function constructors
// function Emp(i, n, s) {
//   this.id = i;
//   this.name = n;
//   this.salary = s;
// }

// const e = new Emp(103, "indu", 120000);
// console.log(e);

// method to access/ fetch content inside object
// console.log(e.id);
// console.log(e.name);
// console.log(emp.name);
// console.log(e["salary"]);

// method to assign content inside object
// emp.salary = 50000;
// emp["school"] = "D.A.V";
// console.log(emp);

// method to update content inside object
// emp.id = 1994;
// console.log(emp);
// delete emp.name;
// console.log(emp);



//                          Object methods

// let emp = {
//   id: 10,
//   name: "indu",
//   age: 29
// };
// let keys = Object.keys(emp);
// console.log(keys);

// let values = Object.values(emp);
// console.log(values);

// let entries = Object.entries(emp);
// console.log(entries);

// becoz of freeze - we can see that even if we try to change the value of id it still remains the same old value , 

//  after applying freeze we can't change the values
// Object.freeze(emp);
// emp.id = 245736;
// emp.address = "random"
// console.log(emp);

// Object.seal(emp);
// emp.id = 11001100;
// console.log(emp); 



//                           new object using old object
let emp = {
  id: 10, name: "indu", age: 29
};

// let o = Object.assign({}, emp);
// ish empty object me koi key value pair add karenge to wo bhi add ho jayega
let o = Object.assign({x: 16}, emp);
console.log(o);
// emp object ke saare values o me aa jayenge