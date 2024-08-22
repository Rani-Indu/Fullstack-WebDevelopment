import express from "express"
const app = express()

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

export default app;