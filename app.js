let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
const options = ["rock", "paper","scissors"]
const randIdx = Math.floor(Math.random() * 3);
return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw, play again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) =>  {
    if (userWin) {
        userScore++;
        msg.innerText = 'You won!';
        msg.style.backgroundColor = "green";
        userScorePara.innerText = userScore;
    } else {
        compScore++;
        msg.innerText = 'You lost.';
        msg.style.backgroundColor = "red";
        compScorePara.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate compute choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
      drawGame();
    } 
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if ( userChoice ==="paper") {
            userWin = compChoice === "scissors" ? false: true;
        } else {
            userWin = compChoice === "rock" ? false: true;
         }
         showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
   choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("Id")
       playGame(userChoice);
    });
});

