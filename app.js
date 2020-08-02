let userScore = 0;
let computerScore = 0;
let user;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const user_div = document.getElementById("user-label");
const computerSmall = "Comp".fontsize(3).sub();
  

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  let randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function convertToWord(choice) {
  if (choice === "r") return "Rock";
  if (choice === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const userSmall = user.fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${userSmall} 
      beats  ${convertToWord(computerChoice)}${computerSmall}. You win!!!`;
  const userChoiceDiv = document.getElementById(userChoice);
  userChoiceDiv.classList.add("green-glow");
  setTimeout(function () {
    userChoiceDiv.classList.remove("green-glow");
  }, 400);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const userSmall = user.fontsize(3).sub();
  
  result_p.innerHTML = `${convertToWord(userChoice)}${userSmall} 
      loses to  ${convertToWord(
        computerChoice
      )}${computerSmall}. You lost......`;

  const userChoiceDiv = document.getElementById(userChoice);
  userChoiceDiv.classList.add("red-glow");
  setTimeout(function () {
    userChoiceDiv.classList.remove("red-glow");
  }, 400);
}

function draw(userChoice, computerChoice) {
  const userSmall = user.fontsize(3).sub();
  
  result_p.innerHTML = `${convertToWord(userChoice)}${userSmall} 
      equals  ${convertToWord(
        computerChoice
      )}${computerSmall}.Make your move to draw computer away from draw()`;
  const userChoiceDiv = document.getElementById(userChoice);
  userChoiceDiv.classList.add("gray-glow");
  setTimeout(function () {
    userChoiceDiv.classList.remove("gray-glow");
  }, 400);
}
function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

window.onload = function () {
  user = prompt("Computer wants your name", "user").trim();
  if (user.length === 0) {
    alert("Ok user, your name will be 'user'.");
    user = "user";
  }
  if (user.length > 7) {
    user = user.substr(0, 6);
  }
  user_div.innerHTML = user;
};

main();

function main() {
  rock_div.addEventListener("click", () => game("r"));

  paper_div.addEventListener("click", () => game("p"));

  scissor_div.addEventListener("click", () => game("s"));
}
