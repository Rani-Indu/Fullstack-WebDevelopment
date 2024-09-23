// import express from "express"
// const app = express()

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

//  app.get('/instagram', (req, res) => {
//     res.send('<h1>You have visited instagram</h1>')
//  }) 

//  app.get('/twitter', (req, res) => {
  //     res.send('<h1>You have visited twitter</h1>')
  //  }) 
  // export default app;
  
  
  
  //                                       practice
  import express from 'express'
  const app = express()
  
  //                      app.get('route', callback)
  app.get('/', (req, res) => {
    res.send('Hello me!!!')
  })
  
   app.get('/instagram', (req, res) => {
      res.send('<h1>You have visited instagram</h1>')
   }) 
export default app