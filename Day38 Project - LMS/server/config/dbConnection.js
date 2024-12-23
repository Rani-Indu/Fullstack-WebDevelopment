import mongoose from "mongoose";

const connectToDb = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`connected to MongoDB: ${conn.connection.host}`);


        
    //   or  


    // try {
    //     const {connection} = await mongoose.connect(process.env.MONGO_URI);

    //     if(connection){
    //         console.log(`connected to MongoDB: ${conn.connection.host}`);
    //     }
        
    } catch (error) {
        console.log(error);
        process.exit(1);    
    }
    
}

export default connectToDb;