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

const moveMethods = [ 
	getUp, 
	getDown, 
	getLeft, 
	getRight, 
	getUpRight, 
	getUpLeft, 
	getDownRight, 
	getDownLeft 
];

module.exports = { moveMethods };
