import { config } from 'dotenv';
config();
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
app.use(express.static("public")) // kuch file folder store karna ho tab ek 
app.use(cookieParser())


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`app is listening on http://localhost:${port}`);
})



// import statement for both method
export default app
// import app from "./app.js"
// OR
// export { app }
// import { app } from "./app.js"