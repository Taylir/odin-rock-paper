const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

//readline.question('Please Enter your name: ', name=> {
//	console.log(`Hello ${name}`);
//	readline.close();
//});

function askForChoice(question) {
	return new Promise((resolve) => {
		readline.question(question, option => {
			resolve(option);
		});
	});
};

async function getUserChoice(){
	const option = await askForChoice('Rock, Paper, Scissors: ');
	console.log(`You Picked ${option}`);
	readline.close();
}

getUserChoice();
