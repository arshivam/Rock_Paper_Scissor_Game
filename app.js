let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userParaScore = document.querySelector("#user");
const comParaScore = document.querySelector("#comp");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};

const showWinner = (userWin, userChoice, comChoice) => {
  if (userWin) {
    //Winner
    userScore++;
    msg.innerText = `You Win Your ${userChoice} beats ${comChoice} `;
    msg.style.backgroundColor = "green";
    userParaScore.innerText = userScore;
  } else {
    //Loser
    compScore++;
    msg.innerText = `You Lost ${comChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    comParaScore.innerText = compScore;
  }
};
const playGame = (userChoice) => {
  //genarate comp choice
  const comChoice = genCompChoice();
  if (userChoice === comChoice) {
    //Draw
    msg.innerText = "Draw !!!!";
    msg.style.backgroundColor = "#081b31";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //paper , scissos
      userWin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //scissors, rock
      userWin = comChoice === "scissors" ? false : true;
    } else {
      //rock , paper
      userWin = comChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, comChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
