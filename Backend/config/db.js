const mongoose = require('mongoose');


const connectToDb = async() => {
    try {
        await mongoose.connect(process.env.mongo_uri)
        console.log("MongoDb connected");
        
    } catch (error) {
        console.log(error.message);
        process.exit(1) 
    }
}

module.exports = connectToDb;
