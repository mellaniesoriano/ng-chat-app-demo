const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api.js');
const PORT = process.env.PORT || '3000';
const app = express();

// define middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next();
});

app.use('/', api);
app.set('port', PORT);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));