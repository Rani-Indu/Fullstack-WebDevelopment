const mongoose = require("mongoose")

const connectToDb = async () => {
    // we have handled everything using .then and .catch so no need to write await 

    // await everytime we write async is not mandatory 
    
    // try using try catch also 
    mongoose.connect(process.env.mongo_url)
    .then((conn) => {
        console.log(`connected to db ${conn.connection.host}`);
        // read mongoose for more details
    })
    .catch((err) => {
        console.log(err.message);
        process.exit(1)
    })
}


module.exports = connectToDb