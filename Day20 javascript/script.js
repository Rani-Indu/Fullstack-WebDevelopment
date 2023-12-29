
// condition

// let signal ="yellow"
// //condition 1
// if (signal == "red") {
//     console.log("stop")
// } 
// //condition 2
// else if (signal == "yellow") {
//     console.log("Go Slow")
// }
// //condition 3
// else if (signal == "green") {
//     console.log("Go Fast")
// }
// else {
//     console.log("invalid")
// }


//                          Switch case
// let user ="Student";
// switch (user) {
//     case "Admin" :
//         console.log("He is Admin");
//         break;
//     case "Student" :
//         console.log("He is student");
//         break;
//     case "mentor" :
//         console.log("He is mentor");
//         break;
//     default:
//         console.log("He is default");
            
// }


//                         Loops
//                    do while, while, for

// for loop format to write - initializer, condition, increment
// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }


//                   while (initialization, condition, increment)

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// let i = 5;
// while (i < 15) {
//     console.log(i);
//     i++;
// }


//                     Do While
// let i = 0;
// do {
//     console.log("Hello World");
//     i++;
// } while (i < 5);

// let i = 0;
// do {
//     console.log("Hello World");
//     i++;
// } while (i > 5);


//                 Ternary operator or Ternary Condition

// Condition 
// 1. ? true
// 2. : false

// isloggedin = true;
// isloggedin ? console.log("Home Page") : console.log("login Page")

// isloggedin = false;
// isloggedin ? console.log("Home Page") : console.log("login Page")


// const product = {
//     name: "Ball Pen",
//     rating: 4,
//     offer: 5,
//     price: 270,

// };
// console.log(product);

// const profile = {
//     username: "@shradhakhapra",
//     noofpost: 195,
//     isFollow: false,
//     followers: 345,
//     following: 4,
// }

// console.log(profile);
// console.log(typeof profile);
// console.log(typeof profile["username"]);
// console.log(typeof profile["isFollow"]);
// console.log(typeof profile["followers"]);

//               single line comment
/*               multi line comment - hello
world
how 
are 
you */

//                 Arithmetic Operations

// let a = 10;
// let b = 2;

// console.log("a =", a, "b =", b);
// console.log("a + b = ",  a + b);
// console.log("a - b = ",  a - b);
// console.log("a / b = ",  a / b);
// console.log("a * b = ",  a * b);
// console.log("a % b = ",  a % b);
// console.log("a ** b = ",  a ** b);


//                    Unary Operator

// let a = 10;
// let b = 2;

// console.log("a =", a, "b =", b);
// a = a - 1;
// console.log("a =", a,);

// a = a + 1;
// console.log("a =", a,);



//        Pre increment and Post increment

// console.log("++a =", ++a,);

// console.log("a++ =", a++,);  //value remains 10 as it is post increment 
// console.log("a =", a,); //here increment is done and value becomes 11

// console.log("--a =", --a,);

// console.log("a-- =", a--,);
// console.log("a =", a,);  // from next line we can see the change in values



//                 Assignment Operators
// let a = 10;
// let b = 2;

// a += 4  //a = a + 4
// console.log("a =", a,);

// a -= 4 // a = a - 4
// console.log("a =", a,);

// a *= 4 // a = a * 4
// console.log("a =", a,);

// a %= 4 // a = a % 4
// console.log("a =", a,);

// a **= 4 // a = a ** 4
// console.log("a =", a,);


//                             Comparison Operators
//                              compare two values
//                      result will be boolean - true or false
// let a = 10;
// let b = 2;

// console.log("10 == 2", a, a == b);

// console.log("10 != 2", a, a != b);

// let a = 10;  //number
// let b = "10";   //string
// console.log("a == b", a == b);
// console.log("a === b", a === b);
// console.log("a !== b", a !== b);
// console.log("a <= b", a <= b);
// console.log("a >= b", a >= b);
// console.log("a > b", a > b);


//                             Logical  Operators
//                    compare multiple values then gives a result
//                      result will be boolean - true or false


//                             //   && operator
// let a = 6;  
// let b = 5;   

// let cond1 = a > b; // true
// let cond2 = a === 6; //true
// console.log("cond1 && cond2 = ", cond1 && cond2);

// let cond1 = a < b; // true
// let cond2 = a === 5; //true
// console.log("cond1 && cond2 = ", cond1 && cond2);
//                   OR
// console.log("cond1 && cond2 = ",  a < b && a === 6); 



                            //   || operator


// console.log("cond1 || cond2 = ",  a < b || a === 6); 


//               ! Logical not
//               hamesha ulta karta hai

// let a = 6;  
// let b = 5;

// console.log("!(6 < 5) = ", !(a > 5)) ; // a>5, a=6, 6>5 is true so final result is false
// console.log("!(6 < 5) = ", !(a === 5)); //a = 6, 6===5 is false so final result is true 



//            Conditional Statement

// let age = 16;

// if (age >= 18) {
//     console.log(" you can vote");
// }
// if (age < 18) {
//     console.log(" you cann't vote");
// }


//                conditional statement
//                     if statement

// let mode = "light";
// // let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// }
// if (mode === "light") {
//     color = "white";
// }




//             if-else  statement

// let num = 10;
// if (num % 2 === 0) {
//     console.log(num," is even number");
// }
// else {
//     console.log( num,"is odd number");
// }


//         else-if statement

// let mode = "light";
// let mode = "dark";
// let color;

// if (mode === "light") {
//     color = "white";
// }
// else if (mode === "dark") {
//     color = "black";
// }
// else if (mode === "pink") {
//     color = "wow !!soo beautiful ";
// }
// else {
//     color = "grey";
// }
// console.log(color);


//                         Ternary Operator
//             another way to write if else statement

// let age =15;

// let result = age > 18 ? "adult" : " not adult"
// console.log(result);
               
//                           OR 


// let age = 25;

// age > 18 ? console.log("adult") : console.log(" not adult");

// alert("Hello")  // pop-up in website

// prompt("Hello !") // pop-up in website but it also take some input

// let name = prompt("Hello !")
// console.log(name);
// we can see the input i,e name that we'll give in browser console


//                          Question 1 


//                       multiple of 5

// let number = prompt("Enter a number")
// console.log(number);

// if (number % 5 === 0) {
    //     console.log(number, "is multiple of 5");
    // }
    // else {
        //     console.log(number, "is not multiple of 5");
        // }
        
        //                                multiple of 3

// let number = prompt("Enter a number")

// if (number % 3 === 0) {
//         console.log(number, "is multiple of 3");
//     }
// else {
//         console.log(number, "is not multiple of 3");
//     }
        
        
//      Question 2
        
let score = prompt("Enter a score")

if (80 >= score == 100) {
    console.log("Grade A");
}
