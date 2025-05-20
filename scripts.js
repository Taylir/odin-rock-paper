const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//rl.question('Please Enter your name: ', name=> {
//	console.log(`Hello ${name}`);
//	rl.close();
//});

function askForChoice(question) {
  return new Promise((resolve) => {
    rl.question(question, (option) => {
      resolve(option);
    });
  });
}

async function getUserChoice() {
  const option = await askForChoice("Rock, Paper, Scissors: ");
  const optionLower = option.toLowerCase();
  console.log(`You Picked ${optionLower}`);
  rl.close();
}

getUserChoice();
