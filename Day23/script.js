let pattern = 'pw'
// RegExp - regular Expression , sabse easy tarika regEx banane ka hai iske object use kar ke
let regExOne = new RegExp();
// RegExp apne aap me object hai jo constructor deta hai aur constructor ke andar aap patterns pass kar do , flag pass kar do to regEx ban jata hai

let flag = "gi"
// g - global - means puri stringke andar search kariye
// i - case insensitive search kariye


let regExTwo = new RegExp(pattern, flag);

let regExThree = /PW/gi
// o/p - true
// let regExThree = /ew/gi
// o/p - false

const strToCheck = "pw Skills is the one-stop destination for your upskilling journey. PW Brace yourself to find the best job-ready PW courses and high-end technologies available in the sector pw COURSER"

// match karne ke 2 tarike hai 

//  1 - regExpression se puch sakte hai ki req result string me kabhi aaya hai kya
//  2 - string se puch sakte hai ki kya uske andar ye pattern hai

// test method - tabhi aayega jab regEx ban jaaye ga warna nahi aayega - gives output in boolean values

const result = regExThree.test(strToCheck);
// console.log(result);
// PS C:\Users\lenovo\new github\Fullstack-WebDevelopment\day23> node .\script.js
// true

const anotherResult = strToCheck.match(regExThree)
// console.log(anotherResult);


// pattern ko match karega aur replace bhi karega
const oneMoreResult = strToCheck.replace(regExThree, "p-w")
console.log(oneMoreResult);
