const mongoose = require('mongoose');

// path dena hoga ki db kaha exist karta hai
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/my_database";

const databaseconnect = () => {
    mongoose
        .connect(MONGODB_URL)
        // if successfully connected
        .then((conn) => console.log(`connected to db: ${conn.connection.host}`))
        // and if there is error
        .catch((err) => console.log(err.message))
}

module.exports = databaseconnect;

