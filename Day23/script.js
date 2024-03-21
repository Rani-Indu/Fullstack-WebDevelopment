let pattern = 'pw'
// RegExp - regular Expression , sabse easy tarika regEx banane ka hai iske object use kar ke
let regExOne = new RegExp();
// RegExp apne aap me object hai jo constructor deta hai aur constructor ke andar aap patterns pass kar do , flag pass kar do to regEx ban jata hai

let flag = "gi"
// g - global - means puri stringke andar search kariye
// i - case insensitive search kariye


let regExTwo = new RegExp(pattern, flag);

let regExThree = /pw/gi

const strToCheck = "pw Skills is the one-stop destination for your upskilling journey. PW Brace yourself to find the best job-ready PW courses and high-end technologies available in the sector pw COURSER. "