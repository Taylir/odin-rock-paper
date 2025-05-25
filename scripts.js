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
  while (option !== "r" && option !== "p" && option !== "s") {
    option = await askForChoice("(R)ock, (P)aper, (S)cissors: ");
    option = option.toLowerCase().slice(0, 1);
  }
  console.log(`You Picked ${option}`);
  rl.close();
  return option;
}

function getRobotChoice() {
  //Pick number 1-3
  const number = Math.floor(Math.random() * 3); // Expects 0 - 2
  //associtate number with R, P, or S.
  switch (number) {
    case 0:
      return "p";
    case 1:
      return "s";
    case 2:
      return "r";
  }
}

async function decideWinner() {
  const userInput = await getUserChoice();
  const robotInput = getRobotChoice();
  console.log(`Robot has selected ${robotInput}`);
  if (userInput === robotInput) {
    console.log("it was a TIE");
    return 0;
  } else if (userInput === "p" && robotInput === "r") {
    console.log("You Won!");
    return 0;
  } else if (userInput === "s" && robotInput === "p") {
    console.log("You Won!");
    return 0;
  } else if (userInput === "r" && robotInput === "s") {
    console.log("You Won!");
    return 0;
  } else {
    console.log("Ai has taken over");
  }
}

decideWinner();
