const port = process.env.PORT || 5000;
const app = require('./app')



app.listen(port, () => {
  console.log(`server is listening on port http://localhost:${port}`)
})