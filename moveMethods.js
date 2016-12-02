const getUp = (board, x, y) => {
	let x1 = x; 
	let y1 = y - 1; 
	if (y1 < 0) {
		y1 = board.length - 1; 
	} 
	return [x1, y1];
}

const getDown = (board, x, y) => {
	let x1 = x; 
	let y1 = y + 1; 
	if (y1 > board.length - 1) {
		y1 = 0; 
	} 
	return [x1, y1];
}

const getLeft = (board, x, y) => {
	let y1 = y; 
	let x1 = x - 1; 
	if (x1 < 0) {
		x1 = board[y].length - 1; 
	}
	return [x1, y1];
}

const getRight = (board, x, y) => {
	let y1 = y; 
	let x1 = x + 1; 
	if (x1 > board[y].length - 1) {
		x1 = 0; 
	}
	return [x1, y1];
}

const getUpRight = (board, x, y) => {
	return getUp(board, ...getRight(board, x, y));
}

const getUpLeft = (board, x, y) => {
	return getUp(board, ...getLeft(board, x, y));
}

const getDownRight = (board, x, y) => {
	return getDown(board, ...getRight(board, x, y));
};

const getDownLeft = (board, x, y) => {
	return getDown(board, ...getLeft(board, x, y));
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
