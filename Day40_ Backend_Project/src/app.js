// import { config } from 'dotenv';
// config();
// OR
import dotenv from "dotenv"
dotenv.config({
    path: "./.env"
})
import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,//after , ctrl + space to get options
    credentials: true
}))

app.use(express.json({limit: "6kb"}))
app.use(express.urlencoded({extended: true, limit: "6kb"}))
// extended - ishme hum objects ke andar bhi objects de pate hai i,e aur level pe nested objects de pate hai 
app.use(express.static("public")) // kuch file folder store karna ho tab ek 
app.use(cookieParser())


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`app is listening on http://localhost:${port}`);
})


//routes import
import userRouter from "../routes/user.routes.js"


// routes declaration
// app.get // jab hum yahi pe routes likh rahe the , yahi pe controller likh rahe the 

// kyuki ab chize seperate kar di hai router ko alag nikal kar le gaye ho to router router ko laane ke liye middleware lana hoga - compulsory hai , yahi syntax hai 
// app.use("/users", userRouter)
// standard practice
app.use("/api/v1/users", userRouter)


// import statement for both method
export default app
// import app from "./app.js"
// OR
// export { app }
// import { app } from "./app.js"