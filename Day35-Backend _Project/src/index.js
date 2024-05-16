
// Importing required modules
import app from './app.js';
import mongoose from 'mongoose';

// Defining the port number
const port = 3000;

// Establishing database connection
(async () => {
  try {
    await mongoose.connect('mongodb+srv://indupwskills:Indu5843@testdb.qiti6il.mongodb.net/todoapp');
    console.log('DB connected successfully');

    // Adding error event listener for the app
    app.on("error", (err) => {
      console.log('Error', err);
      throw err;
    });

    // Starting the server
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (err) {
    console.error("Error", err);
    throw err;
  }
})();
