const test = '0 0 0\n0 1 0\n0 0 0';
const n = 14;
const w = 3; 
const h = 3;

const getUp = (board, x, y) => {
	let x1 = x; 
	let y1 = y - 1; 
	if (y1 < 0) {
		y1 = board.length - 1; 
	} 
	return board[y1][x1] === '1';
}

const getDown = (board, x, y) => {
	let x1 = x; 
	let y1 = y + 1; 
	if (y1 > board.length - 1) {
		y1 = 0; 
	} 
	return board[y1][x1] === '1';
}

const getLeft = (board, x, y) => {
	let y1 = y; 
	let x1 = x - 1; 
	if (x1 < 0) {
		x1 = board[y].length - 1; 
	}
	return board[y1][x1] === '1';
}

const getRight = (board, x, y) => {
	let y1 = y; 
	let x1 = x + 1; 
	if (x1 > board[y].length - 1) {
		x1 = 0; 
	}
	return board[y1][x1] === '1';
}

const getUpRight = (board, x, y) => {
	let x1 = x + 1; 
	let y1 = y - 1; 
	if (y1 < 0) {
		y1 = board.length - 1; 
	} 
	if (x1 > board[y].length - 1) {
		x1 = 0; 
	}
	return board[y1][x1] === '1'
}

const getUpLeft = (board, x, y) => {
	let x1 = x - 1; 
	let y1 = y - 1; 
	if (y1 < 0) {
		y1 = board.length - 1; 
	} 
	if (x1 < 0) {
		x1 = board[y].length - 1; 
	}
	return board[y1][x1] === '1'
}

const getDownRight = (board, x, y) => {
	let y1 = y + 1; 
	let x1 = x + 1; 
	if (x1 > board[y].length - 1) {
		x1 = 0; 
	}
	if (y1 > board.length - 1) {
		y1 = 0; 
	} 
	return board[y1][x1] === '1';
};

const getDownLeft = (board, x, y) => {
	let x1 = x - 1; 
	let y1 = y + 1; 
	if (y1 > board.length - 1) {
		y1 = 0; 
	} 
	if (x1 < 0) {
		x1 = board[y].length - 1; 
	}
	return board[y1][x1] === '1';
};

const options = [ 
	getUp, 
	getDown, 
	getLeft, 
	getRight, 
	getUpRight, 
	getUpLeft, 
	getDownRight, 
	getDownLeft 
];

const populateBoard = (boardMatrix) => {
	const referenceCopy = boardMatrix.slice();
	for (let y = 0; y < boardMatrix.length; y++) {
		const row = boardMatrix[y];
		for (let x = 0; x < row.length; x++) {
			const currentSquare = boardMatrix[y][x];
			const tally = options.reduce((prev, curr) => {
				if (curr(referenceCopy, x, y)) {
					prev += 1; 
				}
				return prev; 
			}, 0);
			console.log(x, y, tally);
		}
	}
	return boardMatrix;
}
const processBoard = (n, w, h, boardString) => {
	const boardMatrix = boardString.split('\n').map(line => line.split(' '));
	console.log(boardMatrix);
	populateBoard(boardMatrix)
	// we need to examine each position on the board in turn 
	// every point has eight points:
		// up -> if undefined, then the y coord corresponds to last row in array
		// down -> if undefined, then the y coord corresponds to first row in array
		// left -> if undefined, then the x coord corresponds to last column in array
		// right -> if undefined, then the x coord corresponds to first column in array
		// up-right
		// up-left
		// down-right
		// down-left
	// need to retain a copy of the board for reference
	// resu
};

processBoard(n, w, h, test);





/*
 
									[ '0', '0', '0' ], 
									[ '0', '1', '0' ], 
									[ '0', '0', '0' ] 

[ '0', '0', '0' ] [ '0', '0', '0' ], [ '0', '0', '0' ], 
[ '0', '1', '0' ],[ '0', '1', '0' ], [ '0', '1', '0' ], 
[ '0', '0', '0' ] [ '0', '0', '0' ]  [ '0', '0', '0' ] 

									[ '0', '0', '0' ], 
									[ '0', '1', '0' ], 
									[ '0', '0', '0' ] 
]


An empty square "comes to life" if it is adjacent to exactly three live squares

A live square "dies" if it has less than two live neighbors, or more than three live neighbors
*/