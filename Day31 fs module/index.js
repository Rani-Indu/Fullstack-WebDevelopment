const fs = require('fs');


console.log('READ START');
//                                                                                                                                                                                                                                                     Asynchronous way to read file
// fs.readFile('input.txt',function(err, data) {
//     if (err) {
//         console.log('Error:', err);
//         return err;
//     }
//     console.log('Data:', data);
//     console.log('Data:', data.toString());
//     console.log('READ END');
//     return data;
// })
// console.log('OTHER STUFF');


// synchronous way to read file
var data = fs.readFileSync('input.text')
// var data = fs.readFileSync('input.txt')
console.log('Data:', data.toString());
console.log('READ END');
console.log('OTHER STUFF');

