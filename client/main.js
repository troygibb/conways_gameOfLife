// // // Update…
// // var p = d3.select("body")
// //   .selectAll("p")
// //   .data([4, 8, 15, 16, 23, 42])
// //     .text(function(d) { return d; });

// // // Enter…
// // p.enter().append("p")
// //     .text(function(d) { return d; });

// // // Exit…
// // p.exit().remove();


const generateGrid = (w, h, boardIterations) => {
 
	const gridDimensions = {
		width: 750,
		height: 750,
	};

	const svg = d3.select('#grid').append('svg')
		.attr({
			width: gridDimensions.width,
			height: gridDimensions.height,
			class: 'innerGrid'
		});

	const squareRow = Math.floor(gridDimensions.width / w);
	const squareCol = Math.floor(gridDimensions.height / h);

	for (let iterator = 0; iterator < boardIterations.length; iterator++) {
		for (let n = 0; n < w; n++) {
			const rows = svg.selectAll('rect' + ' .row-' + (n + 1))
				.data(d3.range(h))
				.enter()
				.append('rect')
				.attr({
					class: (d, i) => {
		        return 'square row-' + (n + 1) + ' ' + 'col-' + (i + 1);
		      },
		      id: (d, i) => {
		        return 's-' + (n + 1) + (i + 1);
		      },
		     	fill: 'white',
					height: squareCol,
					width: squareRow,
		    	stroke: '#FDBB30',
		    	x: (d, i) => {
			      return i * squareRow;
			    },
			    y: n * squareCol
				})
		}
	}
}

/*
fill: (d, i) => {
	return boardIterations[iterator][n][i] === '1' ? 'black' : 'white';
},
*/ 

const startIterations = (boardIterations) => {
	for (let iterator = 0; iterator < boardIterations.length; iterator++) {
		const currentBoard = boardIterations[iterator];
		let ids = '';
		let toChange = '';
		currentBoard.forEach((row, y) => row.forEach((square, x) => {
			if (square === '1') {
				ids += `#s-${y + 1}${x + 1} `
				if (iterator < boardIterations.length - 1 && boardIterations[iterator + 1][y][x] === '0') {
					toChange += `#s-${y + 1}${x + 1} `
				}
			}
		}));
		// TODO: CLEAN UP PARSING BELOW 
		ids = ids.split(' ').join(', ')
		ids = ids.slice(0, ids.length - 2);
		toChange = toChange.split(' ').join(', ')
		toChange = toChange.slice(0, toChange.length - 2);
		
		const filledSquares = d3.selectAll(ids)
			.transition()
			.delay(() => iterator * 500)
			.style('fill', 'black')

		if (toChange.length) {
			filledSquares.filter(toChange)
				.transition()
				.style('fill', 'white')
		}
	}

}

$.ajax('/newGame').done((data) => {
	console.log(data);
	generateGrid(data.w, data.h, data.gameOutput)
	startIterations(data.gameOutput)
})


