const mongoose = require("mongoose")

const dbConnection = async() => {
    try {
        const conn = await mongoose.connect(process.env.mongo_url)
        console.log(`connected to DB: ${conn.connection.host}`);
        
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
    
}

module.exports = dbConnection;