import app from './app.js';
const port = 3000

// database connection
import mongoose from 'mongoose';
mongoose.connect('mongodb://127.0.0.1:27017/test');

// Points to remember while making database connection
// Database connection may fail
// Database is always in another continent  

// Database connections may fail means  - agar connection karte waqt error aa gaya to - so error handle karna hoga - using try catch
// Another continent means it will take time to give o/p so async await / promises is used to handle the time gap for o/p - as below using async IIFE

// async await IIFE and try catch
(async() => {
	try {
    // db connection
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
    console.log('db connected successfully');
		
	} catch (error) {
	console.error("error", err);
    throw err	
	}
})()
// app.get('route', callback)
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram', (req, res) => {
  res.send('<h1>visited instagram</h1> ')
})

app.get('/twitter', (req, res) => {
  res.send('<h1>visited twitter</h1> ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})