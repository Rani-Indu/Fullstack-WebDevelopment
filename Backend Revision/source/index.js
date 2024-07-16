import app from './app.js';
const port = 3000

// database connection
import mongoose from 'mongoose';
mongoose.connect('mongodb://127.0.0.1:27017/test');

// Points to remember while making database connection
// Database connection may fail
// Database is always in another continent  

// Database connections may fail means  - agar connection karte waqt error aa gaya to - so error handle karna hoga - using try catch
// Another continent means it will take time to give o/p so async await / promises is used to handle the time gap for o/p - as below using async IIFE

// async await IIFE and try catch
(async() => {
	try {
    // db connection
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
    // await mongoose.connect('dbstring')
    console.log('DB connected successfully');


// Db up hai but app down hai to error aayega, which we need to handle as below

    app.on("error", (err) => {
      console.log("ERROR: ", err);
    })

    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
		
	} catch (error) {
	console.error("ERROR", error);
    
	}
})();


