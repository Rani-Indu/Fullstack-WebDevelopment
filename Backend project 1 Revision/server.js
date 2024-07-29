const app = require('./app.js')
const port = process.env.port || 5000

app.listen(port, () => {
	console.log(`server listening on port http://localhost:${port}...`);
});  