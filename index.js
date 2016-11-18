const readline = require('readline');
const fs = require('fs');
const processBoard = require('./processBoard').processBoard;

// Declare readline interface. 
let rl;
if (process.env.npm_lifecycle_event === 'start') {
	rl = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
	}); 
} else if (process.env.npm_lifecycle_event === 'test') {
	rl = readline.createInterface({
	  input: fs.createReadStream('sample.txt') 
	});
}

// Reference for parsing arguments. 
let lineNum = 0;
// Argument delcarations. 
let n, w, h; 
const board = []; 

rl.on('line', (line) => {
  if (lineNum === 0) {
  	n = Number(line);
  } else if (lineNum === 1) {
  	const dimensions = line.split(' ');
  	w = Number(dimensions[0]);
  	h = Number(dimensions[1]);
  } else {
  	const row = line.split(' ');
  	board.push(row);
  }
  lineNum++;
}).on('close', () => {
	const result = processBoard(n, w, h, board);
	process.stdout.write(result.map(row => row.join(' ')).join('\n'));
});
