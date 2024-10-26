import mongoose from "mongoose"


// Method 1 

// IIFE
// ; ()()
// ; async(() => {})()

; async(() => {
    try{
        mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        APP.ON("ERROR", (error) => {
            console.log("Error: ", error);
            throw error   
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`); 
        })
    } catch(error) {
        console.error("ERROR")
        throw error
    }
})()
