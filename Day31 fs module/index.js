const fs = require("fs");

console.log("READ START");
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
// var data = fs.readFileSync("input.text");
var data = fs.readFileSync("input.txt");
console.log("Data:", data.toString());
console.log("READ END");
console.log("OTHER STUFF");

//     Read = open + Read

// const buf = new Buffer(1024);
// fs.open("input.txt", "r+", function (err, fd) {
//   if (err) {
//     console.log("error in opening files: ", err);
//   }
//   console.log("File open successfully");

//   //   fs.read(fd, buf, 0, buf.length, 0, function(er, data){
//   //   fs.read(fd, buf, 0, buf.length, 0, function(er, bytes){
//   fs.read(fd, buf, 0, buf.length, 9, function (er, bytes) {
//     if (er) {
//       console.log("error inreading file");
//     }
//     // console.log('Data:', data.toString());
//     console.log("Data:", bytes);
//     console.log("Data:", buf.slice(0, bytes).toString());
//   });
// });


//                       writing to file

fs.writeFile("input.txt", "PW Skills", function (err) {
    if (err) {
        console.log("Error in writing file");
    } else {
        console.log("Success in writing file");
    }
});


//                        append to file
fs.appendFile('input.txt', '__ Indu Rani','utf8', function(err){
    // fs.appendFile('input.text', '__ Indu Rani','utf8', function(err){
        if (err) {
            console.log("Error in appending file");
        } else {
            console.log("Success in appending file");
        }
    })
    
//                            close a file
    const buf = new Buffer(1024);
    fs.open("input.txt", "r+", function (err, fd) {
      if (err) {
        console.log("error in opening files: ", err);
      }
      console.log("File open successfully");
    
      fs.read(fd, buf, 0, buf.length, 9, function (er, bytes) {
        if (er) {
          console.log("error inreading file");
        }
        console.log("Data:", bytes);
        console.log("Data:", buf.slice(0, bytes).toString());
        fs.close(fd, function(err){
            if (err){
                console.log("Error in closing file");
            } else {
                console.log("success in closing file");
            }
        })
      });
    });