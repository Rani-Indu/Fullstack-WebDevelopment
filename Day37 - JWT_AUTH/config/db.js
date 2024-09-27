const mongoose = require('mongoose')

const connectToDb = async() => {
    try {
        const conn = await mongoose.connect(process.env.mongo_uri)
        console.log (`connected to db: ${conn.connection.host}`);

    } catch (error) {
        console.log(error.message);
        process.exit(1);   
    }
};



module.exports = connectToDb;