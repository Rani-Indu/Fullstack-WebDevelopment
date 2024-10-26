import { config } from 'dotenv';
config();


import express from "express"
const app = express()

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`app is listening on http://localhost:${port}`);
})



// import statement for both method
// export default app
// import app from "./app.js"
// OR
export { app }
// import { app } from "./app.js"