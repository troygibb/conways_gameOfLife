const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('How many iterations? (i.e. "n") ', (n) => {
	rl.question('What is the width? (i.e. "w") ', (w) => {
		rl.question('What is the height? (i.e. "h") ', (h) => {
			rl.question('Please enter the board configuration', (board) => {
				console.log(n, w, h, board)
					process.stdout.write('hhhhhh');
					rl.close();
			})
		})
	})
});