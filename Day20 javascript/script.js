
// values - number , string, boolean etc

// Datatypes

// Primitive Data Type

// number - 1, 2, 3, 4, 5, 6
// string - "indu" or 'rani'
// boolean - true , false
// null- null doesn't mean 0, null means nothing ex- on weather app we want to display temp of various places and if app is unable to find temp then display null (which mans nothing) as 0 is also a temp.
// undefined -
// example -
// let a;
// console.log(a);
// output is  undefined - we have declared the variable and we can assign name later

// Non Primitive Data Type

// Array
// let names = ["Radhe Radhe", "Hare Krishn","indu", "rani", 1, 2, 3, true, false];

// conditions and loops
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

//   {} - this is called scope


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


//          while (initialization, condition, increment)

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


//              Do While - at least ek baar run caahiye
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

//                            condition  ? TRUE : FALSE
//  ? ke baad true waali chiz - true 
//  : ke baad false waali chiz- false

// isloggedin = true;
// isloggedin ? console.log("Home Page") : console.log("login Page")

// meaning of above line - agar user logged in hai to home page pe jao aur agar condition false hai i,e logged in nahi hai to login page display karo

// isloggedin = false;
// isloggedin ? console.log("Home Page") : console.log("login Page")




//                                 Reserved Words
// let console = "indu"
// console.log(console);
// console with small c is a reserved word

// let Console = "indu"
// console.log(Console);
// whereas Console with capital C is not a reserved word


//                                            Data Types

//                                  Primitive - string , number 

// let name = "indu"
// console.log(typeof name); 

// let num = 26
// console.log(typeof num); 

// let isFollow = true
// console.log(typeof isFollow); 

// let x;
// console.log(x);
// console.log(typeof x); 

// let y = null;
// console.log(y);
// console.log(typeof y); 

// let z = BigInt("12345");
// console.log(z);
// console.log(typeof z); 

// let A = Symbol("12345");
// console.log(A);
// console.log(typeof A); 



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
        
// let score = prompt("Enter a score (0 - 100)")

// if (score >= 90 && score <= 100)  {
//     console.log("Grade A");
// }
// else if (score >= 70 && score <= 89)  {
//     console.log("Grade B");
// }
// else if (score >= 60 && score <= 69)  {
//     console.log("Grade C");
// }
// else if (score >= 50 && score <= 59)  {
//     console.log("Grade D");
// }
// else if (score >= 0 && score == 49)  {
//     console.log("Grade F");
// }
// //  we can leave else part if thereis no condition given


//                    OR 

// let score = 15;
// let score = prompt("Enter a score (0 - 100)") // if we want to do with prompt option
// // let grade;

// if (score >= 90 && score <= 100){
//     grade = "A";
// }
// else if (score >= 70 && score <= 89) {
//     grade = "B"
// }
// else if (score >= 60 && score <= 69) {
//     grade = "C"
// }
// else if (score >= 50 && score <= 59) {
//     grade = "D"
// }
// else if (score >= 0 && score <= 49) {
//     grade = "F"
// }
// console.log("According to the scores your grade is ", grade);



//                  Loops

// for (let i = 1; i <= 10; i++) {
//     console.log("Apna College");
// }
// console.log("loop has ended");

// for (let i = 0; i <= 7; i++) {
//     console.log("indu");
// }
// console.log("loop has ended");

//                 loop to find sum of initial 5 numbers

// //  sum of 1 to 5
// let sum = 0;
// (initialization , condition, increment)
// for (i = 0 ; i <= 5; i++) {
//     sum = sum + i;
// }
// console.log("sum is : ", sum);

//  sum of initial n numbers, n = 0,1,2,3,4,5...n
// let sum = 0;
// let n = 15;
// for (i = 0 ; i <= n; i++) {
//     sum = sum + i;
// }
// console.log("sum is : ", sum);
// console.log("loop has ended");

//                                For loop


//                         print 1 to 5 using for loop
// for ( let i = 1; i <= 5; i++) {
//     console.log(" i = ", i);
// }



//                        print 1 to 5 using while loop

// let i = 1;                     //initialization
// while (i <= 5) {               // condition
//     console.log("i =", i);
//     i++;                        //increment
// }

// let i = 1;                     //initialization
// while (i <= 10) {               // condition
//     console.log("indu");
//     i++;                        //increment
// }



//                   Do while loop
//               loop will run at least once 


//                      while loop
// let i = 1;
// while (i <= 5) {
//     console.log("i =", i);
//     i++;
// }

//                     do while loop

// let i = 20;
// do {
//     console.log("log");
//     i++;
// } while (i <= 10);

//             print numbers from 1 to 5

// let i = 1;
// do {
//     console.log("i = ", i);
//     i++;
// } while (i <= 5);

//                  for-of loop

// let strVar = "Indu Rani"
// for (let val of strVar ) {
//     console.log("val", val);
// }


// let str = "Indu Rani"
// let length = 0;
// for (let i of str ) {
//     console.log("i", i);
//     length++;
// }
// console.log("string length = ", length);


//                           for-in loop
//                           key value

// let student = {
//     name: " Indu Rani",
//     age: 22,
//     cgpa: 7.5,
//     isPass: true,
// }
// for (let key in student) {
//     console.log("key", key , "value", student[key]);
//     console.log(key,student[key]);
// }


//                                              Question 1
//                                              even no 1-100
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0 ){
//         console.log("even number", i);
//     }       
// }
//                                                 
//                                                odd no 1-100
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0 ){
//         console.log("odd num- ", i);
//     }       
// }


//                      question 2

// let num = prompt("enter a number")
// if (num === 25) {
//     console.log("congratulations !!");
// }
// else {
//     ("enter a number again");
// }



// let number = prompt("Enter a number")
// // cons34ole.log(number);

// if (number % 5 === 0) {
//         console.log(number, "is multiple of 5");
//     }
// else {
//         console.log(number, "is not multiple of 5");
//     }


// let gamenumber = 25;
// let reqnumber = prompt("enter a number : ");
// console.log(reqnumber);

// while ( reqnumber !=  gamenumber ) {
//     reqnumber = prompt("enter another number : ")
//     console.log(reqnumber);
// }

// console.log("congratulations !!");            // if condition match



//                                        Strings

// let str = "Indu"
// let str2 = "Rani"
// let str1 = "induRani"
// let str3 = "induRani"

// console.log(str.length);
// console.log(str2.length);
// console.log(str1.length);
// console.log(str3.length);
// console.log(str3[5]);
// console.log(str3[0]);
// console.log(str3[8]);
// console.log(str3[3]);


//                                        Template Literals


// let specialstring = `This is special string ${1+2+3}`; // this sentence is written under backticks , tab ke uper wala symbol not normal inverted commas
// console.log(specialstring);
// // console.log(typeof specialstring);


// let obj = {
//     item: "pen", price: 10,
// }

// console.log("the cost of", obj.item ,"is" , obj.price,"rupees");

// //        using backtick
// let output = `the cost of this ${obj.item} is ${obj.price} rupees`;
// //   the method / phenomena of writing string by substituting placeholders is called string interpolation
// console.log(output);
// // in this case 10 will not be highlighted as above because 10 is now part of the string


// //                     Escape characters( \n )

// let str = "Apnacollege"
// console.log(str);
// console.log(str.length);
// let str = "Apna\ncollege"
// console.log(str);
// console.log(str.length);

// //                         tab space (\t)
// let str = "Apna\tcollege"
// console.log(str);
// console.log(str.length);


// let str = "ApnaCollege"
// console.log(str);
// console.log(str.toUpperCase());
// console.log(str); // we can see that evev though we have changed to uppercase above yet console.log(str) prints the old value this is because the changes we make are done by creating new string 
// console.log(str.toLowerCase());




//                                  trim
//          remove white spaces in , front and back

// let str = "           Apna College   js             "
// console.log(str);
// console.log(str.trim());


//                                 String slicing

// let str = "Hello"
// console.log(str.slice(1,5)); // from 1 but not 5
// console.log(str.slice(1,2)); // from 1 but not 5
// console.log(str.slice(1,3)); // from 1 but not 5
// console.log(str.slice(1,)); // from 1 but not 5
// let str = " Hello"
// // console.log(str.slice(1,5));
// console.log(str.slice(1));
// console.log(str.slice(3));
// // console.log(str.slice( 2,5));



//                                    Concatination

// let str1 = "Indu"
// let str2 = "Rani"
// console.log(str1.concat(str2));
// console.log(str1.concat(str1));
// console.log(str1 + str2);
// //       we can concatinate multiple strings as below
// console.log("My name is - "+ str1 + str2);

// let str1 = "Indu"
// let str2 = " Rani"
// console.log(str1.concat(str2));
// console.log(str2.concat(str1));
// console.log(str2.concat(str2));

// let result = "indu" + 123;
// console.log(result);
//   Js internally numbers ko string me convert kar ke string ke saath concatenate kar deta hai


//                                              replace

// let str = "hello"
// console.log(str.replace("m", "m"));
// console.log(str.replace("h", "m"));
// console.log(str.replace("h", "y"));


// let str = "hellololo"
// console.log(str.replace("lo", "p")); // replace will work only once for one ol
// console.log(str.replaceAll("o", "w"));


//                                           chatracter at

// let str = "Apna college"
// console.log(str[0]);
// console.log(str.charAt(0));
// console.log(str.charAt(2));
// console.log(str.charAt(4));
// console.log(str.charAt(6));
// console.log(str.charAt(13));
// console.log(str.charAt(8));

// let str = "ilovejs";
// str[0] = "s";
// console.log(str);
// still answer is ilovejs instead of slovejs as we have changed the values to str[0] = "s" , this is because original string is immutable - i,e we can't make any changes 

// we need to create new string to see the changes

//  we can't do this by directly bymanipulating  index but we can do this using string method ,replace.

// let str = "ilovejs";
// str = str.replace("i", "s");
// console.log(str);



//                           Question
// let name = prompt("Enter your fullName without spaces : ");
// userName = ("@"+ name + name.length );
// console.log(userName);



//                                   Array 
//                     Array khud ek object type hota hai

// let marks = [76, 92, 94,   95,    43,      65]
// console.log(marks);
// console.log( typeof marks);
// console.log(marks.length);       // property

//                                Property - jo kuch value deti hai 
//                                Methods - jo kuch kaam karta hai

// let superHeroes = ["Hanuman", "karma", "ironman", "spiderman", "hulk", "batman", "Balram", "shaktiman"]
// console.log(superHeroes);
// console.log(typeof superHeroes);
// console.log(superHeroes.length);  // property



//                                          Indices / Index

// let marks = [76, 92, 94,   95,    43,      65]
// console.log(marks);
// console.log(marks.length);       
// console.log(marks[0]);
// console.log(marks[4]);
// console.log(marks[6]);
// console.log(marks[100]);


// //                                  Arrays are mutable
// let marks = [76, 92, 94,   95,    43,      65]
// marks[3] = 23
// marks[1] = 2
// console.log(marks);

// //                                Strings are immutable

// let name = "Tony Stark"
// name[2] = "i"
// console.log(name);



//                                         Looping over an Array


//                                                for loop
// Array = [11, 12, 13, 14, 15, 16, 17]
// Array = ["Hanuman", "karma", "ironman", "spiderman", "hulk", "batman", "Balram", "shaktiman"]
// console.log(Array.length);

// for(let i = 0; i < Array.length; i++) {
//     console.log(Array[i]);
// }

//  i here indicates index

//                                               for of loop

// heroes = ["Hanuman", "karma", "ironman", "spiderman", "hulk", "batman", "Balram", "shaktiman"]

// for (let hero of heroes) {
//     console.log(hero);
// }

// cities = ["delhi", "  kolkata", "bhilai", "jaipur"]
// for(let city of cities){
//     console.log(city.toUpperCase());
//     console.log(city.trim());
// }


//                                                Question 1

// marks = [85, 97,44,37,76,60]

// sum = 0
// for (let value of marks) {
//     // console.log(value);
//     sum = sum + value;
//     // sum += value;   // Assignment operator
// }
// let avg = sum / marks.length
// console.log(`avg marks of the class = ${avg}`);



//                                         question 2


// price = [250, 645, 300, 900, 50]
// for (let item of price) {
//         // console.log(item);
//         let disc = item * (10/100)
//         console.log(disc);    
//         newprice = item - disc;
//         console.log(newprice);
//     }
//     // to create array we need to access index which can't be done as above 
    

//                                         using for of loop
// items = [250, 645, 300, 900, 50]
// let i = 0;
// for (let val of items) {
    //     // console.log(`value at index ${i} = ${val}`);
    //     let offer = val / 10;
    //     items[i] = items[i] - offer;
    //     console.log(`value after offer = ${items[i]}`);
    //     i++;
    // }
    // console.log(items);
    
    
    //                                       using for loop
    
    // items = [250, 645, 300, 900, 50]
    
    // for (let i = 0; i < items.length; i++) {
//     offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);


//                                          Array Methods
//  some methods create a new array with changes into it siilar to string and some make changes in the already existing array


//                              push - changes the existing array
//                               element get added at last

// foodItem = ["chips", "banana", "apple", "mango"];
// // foodItem.push("chocolate", "dosha", "sambhar")


//                              pop - changes the existing array
//                               element get deleted from last

// foodItem = ["chips", "banana", "apple", "mango"];
// let deletedVal = foodItem.pop("")
// console.log(deletedVal);
// console.log(foodItem);
// console.log(foodItem.toString());
// console.log(foodItem);

//                                don’t change the original array
// items = [250, 645, 300, 900, 50]
// console.log(items.toString());



//                                                 Concat()
//                              don’t change the original array

// let marvelHeroes = ["ironman", "spiderman"];
// let dcHeroes = ["batman", "Balram","hulk", "shaktiman"];
// let indianHeroes = ["Hanuman","karma"]
// let heroes1 = marvelHeroes.concat(dcHeroes);
// let heroes2 = dcHeroes.concat(marvelHeroes);
// console.log(heroes2);
// console.log(heroes1);
// let heroes3 = dcHeroes.concat(marvelHeroes, indianHeroes);
// console.log(heroes3);


//                                       unshift, shift
// let dcHeroes = ["batman", "Balram","hulk", "shaktiman"];
// dcHeroes.unshift("Krishn");
// console.log(dcHeroes);


//                                             shift
// let dcHeroes = ["batman", "Balram","hulk", "shaktiman"];
// let value = dcHeroes.shift();
// console.log(dcHeroes);
// console.log(value);


//                                          Slice
//    sometimes we use slice method to make copy of our array
// let dcHeroes = ["Balram","Krishn","batman","hulk", "shaktiman"];
// console.log(dcHeroes.slice(1, 7));
// console.log(dcHeroes.slice(1));
// console.log(dcHeroes.slice());



//                                                 splice
//  we can use this to delete , replace , and to add new element
// let arr = [1,2,3,4,5,6,7,8]

// arr.splice(2,2,101,102);
// // 2,2 - indicates , index 2 pe ja kar 2 item delete kar do and waha pe 101, 102 add kar do

// console.log(arr);
//                                  only add element in splice

// let arr = [1,2,3,4,5,6,7,8]
// arr.splice(2, 0, 105);
// //          0 - delete,    105 - add
// console.log(arr);


//                                  only delete element in splice

// let arr = [1,2,3,4,5,6,7,8]
// arr.splice(3, 1);
// //        index no 3 pe 1 item delete kar do
// console.log(arr);


//                                (4hr:33) Replace using splice
// let arr = [1,2,3,4,5,6,7,8]
// arr.splice(3, 1, 104);
//         index no 3 pe 1 item delete kar ke 104 add kar do
// console.log(arr);
// console.log(arr.splice(4));
// console.log(arr);
// console.log(arr.splice());
//   splice ke andar koi bhi element pass nahi kiya hai to kuch bhi delete nahihogai
// console.log(arr);



//                                 Question
// arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
// console.log(arr);

// console.log(arr.shift());
// console.log(arr);

// console.log(arr.splice(2, 1, "ola"));
// console.log(arr);

// console.log(arr.push("Amazon"));
// console.log(arr);







//                           Chapter -5 - Function


// function myFunction() {
//     console.log("Welcome !!");
//     console.log("We are learning JS");
// }

// myFunction()
// myFunction()



// function myFunction(msg) { // msg is parameter - input
//     console.log(msg);
// }

// myFunction() // undefined becoz we haven't passes any msg
// myFunction("We are learning JS") // argument



//                           multiple input
// function myFunction(msg, n) { // msg is parameter - input
//     console.log(msg * n);
// }

// myFunction(100) // undefined becoz we haven't passes any msg
// myFunction("We are learning JS",100) // argument
// myFunction("I lOVE JS", 100) // argument
//  output - Nan - not a number


// function sum(a, b){
//     console.log(a + b);
// }

// sum (54 ,879)
// sum (5, 4)


//                                           return
// function sum(a, b){
//     x = a + b;
//     console.log("before return");
//     return x; // return ek hi value return karta hai
//     console.log("after return"); // on hover we can see unreachable code detected means this code can't be executed , generallly after return the codes doesn't get executed
// }

// sum (54 ,879)
// let value = sum (5, 4);
// console.log(value);


// function sum(a, b){// local variable
//     x = a + b;
//     console.log(a);
//     // console.log("before return");
//     return x; 
// }

// let value = sum (5, 4);
// console.log(value);
// // console.log(a);  // anot defined as it is valid till block scope



//                                  Arrow Functions

//   sum function
// function sum(a, b){
//     return a + b;
// }

// let arrowSum = (a, b) => {
//     console.log(a + b);
// }

// arrowSum(2,4)



// //   multiplication function
// function multi(a, b){
//     return a * b;
// }

// const arrowMulti = (a, b) => {
//     console.log(a * b);
// }
// arrowMulti(2, 2)

//                 arrowSum,arrowMulti - ye ek variable hai 
//                 jiske andar arrow function ki value store

// let arrowMulti = (a, b) => {
//     return(a * b);
// }
// arrowMulti(2, 2);// no output
// console.log(arrowMulti(2,3));

// arrowMulti = 5
// console.log(arrowMulti);


// const printHello = () => {
//     console.log("hello !!");
// };
// printHello()



//                                        Question

// function countVowels(str){
//     let count = 0;
//     for (let char of str){
//         // console.log(char);
//         if (char === "a" || char === "e" || char === "i" ||char === "o" ||char === "u") {
//             count++;
//         }    
//     }
//     return count; // this is part of function, not of if or for so take care while writing the code 
// }

// a = countVowels("apnacollege")
// console.log(a);
// b = countVowels("indu rani")
// console.log(b);



// function countVowels(str){
//     let count = 0;
//     for (char of str){
//         if(char === "a" ||char === "e" ||char === "i" ||char === "o" ||char === "u"){
//             count++;
//         }
//     }
//     console.log(count);
// } 

// countVowels("string")
// countVowels("stringmethods")
// countVowels("hakunamatatta")

//                                           question

// const countVowels = (word) => {
//     let count = 0;
//     for (char of word){
//         if(char === "a" ||char === "e" ||char === "i" ||char === "o" ||char === "u"){
//             count++;
//         }
//     }
//     return count;
// }

// a = countVowels("indurani");
// console.log(a);
// b = countVowels("aeiou");
// console.log(b);


//                                       forEach loop in array


// function myFunc(num) {
//     return num
// } 
// a = myFunc(192)
// console.log(a);

// let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(function printVal (val) {
//     console.log(val);
// });
    

// let arr = ["Vrindavan", "Barsana","pune", "mumbai", "delhi"];
// arr.forEach((val, index) => {
//     console.log(val, arr);
//     console.log(val.toUpperCase(), index);
// })


// let arr = [11, 2, 32, 4, 55]; 

// arr.forEach((num) => {
//     // console.log(num * num);
//     console.log(num**2);
// });

//     OR

// let nums = [11, 2, 32, 4, 55];

// let calcSquare = (num) => {
//     console.log(num**2);
// };

// nums.forEach(calcSquare);

    
//                                                  Map
    
let nums = [1, 2, 3, 4, 5];
// nums.map((val) => {
//     console.log(val);
// })


let newArray = nums.map((val) => {
    // return (val*2);
    // return (val**3);
});

// console.log(newArray);

//                                                    filter

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// let evenArr = arr.filter((val) => {
//     return val % 2 === 0
//     // return val > 3
    
// }); 
// console.log(evenArr);
// console.log(arr);


//                                                     Reduce

// let arr = [1, 2, 3, 4];

// //                                              sum
// const output = arr.reduce((previous, current) => {
    //     return previous + current;
    // });
    
    // console.log(output);
    
//                                  greater number among all

// let arr = [1, 2, 3, 4, 102, 596];
// const output = arr.reduce((previous, current) => {
//     return previous < current ? previous : current;
// });

// console.log(output);


//                                                 question

// let arr = [71, 92, 73, 84, 92, 96, 100];

// let newArr = arr.filter((val) => {
//     return val > 90;
// })

// console.log(newArr);

//                                          question

let n = prompt("enter a number : ");

let arr = [];

for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
}
console.log(arr);

let sum = arr.reduce((prev, curr) =>{
    return prev + curr
})
console.log( "sum = ", sum);

let factorial = arr.reduce((prev, curr) =>{
    return prev * curr
})
console.log( "factorial = ", factorial);