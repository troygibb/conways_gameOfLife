const moveMethods = require('./moveMethods').moveMethods;

const populateBoard = (boardMatrix) => {
	const referenceCopy = boardMatrix.map(arr => arr.slice());
	for (let y = 0; y < boardMatrix.length; y++) {
		const row = boardMatrix[y];
		for (let x = 0; x < row.length; x++) {
			const currentSquare = boardMatrix[y][x];
			// Tally up the current square's neighbors values. 
			const tally = moveMethods.reduce((prev, curr) => {
				const tuple = curr(referenceCopy, x, y);
				const x1 = tuple[0];
				const y1 = tuple[1];
				if (referenceCopy[y1][x1] === '1') {
					prev += 1; 
				}
				return prev; 
			}, 0);
			if (currentSquare === '0') {
				// Scenario for creating a live square. 
				boardMatrix[y][x] = tally === 3 ? '1' : '0';
			} else {
				// Scenario for killing a square. 
				boardMatrix[y][x] = tally < 2 || tally > 3 ? '0' : '1';
			}
		}
	}
	return boardMatrix;
};

const processBoard = (n, w, h, boardMatrix) => {
	let last = boardMatrix;
	let result = '';
	for (i = 0; i < n; i++) {
		last = populateBoard(last);
		result += last.map(row => row.join(' ')).join('\n') + '\n\n';
	}
	return result;
};

module.exports = { processBoard };
