const express = require('express');
const path = require('path');
const app = express();

const processBoard = require('./processBoard').processBoard;

app.use(express.static(path.join(process.env.PWD, 'client')));

const sample = [
	['0', '0', '0', '0', '0'],
	['0', '0', '1', '0', '0'],
	['0', '0', '1', '0', '0'],
	['0', '0', '1', '0', '0'],
	['0', '0', '0', '0', '0'],
]

const port = process.env.PORT || 3000;

const n = 10; 
const w = 5;
const h = 5; 

app.get('/newGame', (req, res) => {
	res.json({ 
		n,
		w,
		h, 
		gameOutput: processBoard(10, 5, 5, sample, true)
	});
});

app.listen(port, () => console.log(`Listening on port http://localhost:${port}/`));