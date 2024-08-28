const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const connectToDb = async() => {
    mongoose.connect(process.env.mongo_url)
    .then((conn)=>{
        console.log(`connected to db : ${conn.connection.host}`);
    })
    .catch((err) => {
        console.log(err.message);
        process.exit(1)
    })
};




module.exports = connectToDb
