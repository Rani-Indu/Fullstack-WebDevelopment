import { config } from 'dotenv';
config();
import express, { urlencoded } from 'express'
const app = express()
import cors from "cors";
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import connectToDb from './config/dbConnection.js';
import userRoutes from './routes/user.routes.js';
import courseRoutes from './routes/course.routes.js';
import errorMiddleware from './middlewares/error.middleware.js';
import paymentRoutes from './routes/payment.routes.js'

connectToDb();

app.use(express.json());

app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin: [process.env.FRONTEND_URL],
  credentials: true  
}))
app.use(cookieParser)

app.use(morgan('dev'));


app.use('/ping', function(req, res) {
  res.send('pong!!')
})

// OR
// app.use('/ping', (req, res) => {
  //   res.send('pong!')
  // })
  
  
  app.use('/api/v1/user', userRoutes);

  app.use('/api/v1/courses', courseRoutes);

  app.use('/api/v1/payments', paymentRoutes);
  // version is v1
  
app.all('*', (req, res) => {
    res.status(404).send('OOPS!! 404 page not found')
}) // for handling request in any route

app.use(errorMiddleware)

// module.exports = app;
export default app;        //in ES6