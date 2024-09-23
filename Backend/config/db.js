const mongoose = require('mongoose');


const connectToDb = async() => {
    try {
        const conn = await mongoose.connect(process.env.mongo_uri)
    
        console.log("MongoDb connected")
        console.log(`Connected to DB: ${conn.connection.host}`
            // o/p 
            // MongoDb connected
            // Connected to DB: ac-6qrk0ky-shard-00-01.qiti6il.mongodb.net
        );
        
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connectToDb;








