
// // Importing required modules
// import app from './app.js';
// import mongoose from 'mongoose';

// // Defining the port number
// const port = 3000;

// // Establishing database connection
// (async () => {
//   try {
//     await mongoose.connect('mongodb+srv://indupwskills:Indu5843@testdb.qiti6il.mongodb.net/todoapp');
//     console.log('DB connected successfully');

//     // Adding error event listener for the app
//     app.on("error", (err) => {
//       console.log('Error', err);
//       throw err;
//     });

//     // Starting the server
//     app.listen(port, () => {
//       console.log(`Listening on port ${port}`);
//     });
//   } catch (err) {
//     console.error("Error", err);
//     throw err;
//   }
// })();



//                             practice 
import app from './app.js'
import mongoose from 'mongoose'
const port = 3000


(async() => {
  // this is done for mongoose
  try {
    // database connection - await as db is in another continent
   await mongoose.connect('mongodb+srv://indupwskills:Indu5843@testdb.qiti6il.mongodb.net/todoapp');
   console.log('DB connected successfully ');

// db up hai but app down hai - error will occur - so we need to handle it
// this is done for express
   app.on("error", (err) => {
    console.error("ERROR :", err);
    throw err
   })
    
   app.listen(port, () => {
     console.log(`app listening on port ${port}`)
   })

  } catch (error) {
    console.error("ERROR :", err);
    
  }
})()

