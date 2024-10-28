import app from "./app.js"
// import { app } from "./app.js"
import connectToDB from "../db/db.js"

// const port = process.env.PORT || 8000

connectToDB()
// .then(() => {
//   app.listen(process.env.PORT || 8000, () => {
//     console.log(`server is running at http://localhost:${port}`); 
//   })
// })
// .catch((error) => {
//   console.log("MongoDB connection failed", error);
  
// })

app.get('/', (req, res) => {
    res.send('Hello World!')
  })