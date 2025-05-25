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
  let option = "";
  let count = 0;
  while ( option !== "r" && option !== "p" && option !== "s") {
    option = await askForChoice("Rock, Paper, Scissors: ");
    option = option.toLowerCase().slice(0, 1);
    ++count;
    console.log(option);
    console.log(count);
  }
  console.log(`You Picked ${option}`);
  rl.close();
}

getUserChoice();
