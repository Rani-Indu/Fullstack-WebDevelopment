import mongoose from "mongoose"


// IIFE
// ; ()()
// ; async(() => {})()

; async(() => {
    try{
        mongoose.connect(`${process.env.MONGO_URI}`)
    } catch(error) {
        console.error("ERROR")
        throw error
    }
})()
