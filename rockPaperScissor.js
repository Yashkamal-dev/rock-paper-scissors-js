// the  jS code was written by taking user(as player) in mind,
// but game(output) has all "you" lables in it.
// so dont care about the actual gaming display name "you".
// just making sure user = you.

let user = document.querySelectorAll(".game-icon");
let choices = ["Rock", "Paper", "Scissor"];
let userChoice, compChoice, idx;
let finalMessage;
let msg = document.querySelector("#message");
let userScore = 0;
let compScore = 0;
let userScoreBoard = document.querySelector("#score-user");
let compScoreBoard = document.querySelector("#score-comp");
let disUser = document.querySelector("#dis-user");
let disComp = document.querySelector("#dis-comp");

// console.log(user);

user.forEach((choice) => {
  choice.addEventListener("click", () => {
    // accesing our choice
    userChoice = choice.id;

    // selecting computer choice arndom
    idx = Math.floor(Math.random() * 3);
    compChoice = choices[idx];

    // printing choices on console
    console.log("userChoice = ", userChoice);
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
      finalMessage = "Draw";
      msg.innerText = finalMessage;
      msg.style.backgroundColor = "rgb(39, 57, 194)";

      //   displaying choice
      disUser.innerText = `Choice :- ${userChoice}`;
      disComp.innerText = `Choice :- ${compChoice}`;
    } else if (
      (userChoice === "Scissor" && compChoice === "Paper") ||
      (userChoice === "Paper" && compChoice === "Rock") ||
      (userChoice === "Rock" && compChoice === "Scissor")
    ) {
      finalMessage = "YOU won!";
      msg.innerText = finalMessage;
      msg.style.backgroundColor = "green";

      //   displaying choice
      disUser.innerText = `Choice :- ${userChoice}`;
      disComp.innerText = `Choice :- ${compChoice}`;

      //   displaying score
      userScore++;
      userScoreBoard.innerText = userScore;
    } else {
      finalMessage = "You loss!";
      msg.innerText = finalMessage;
      msg.style.backgroundColor = "red";

      //   displaying choice
      disUser.innerText = `Choice :- ${userChoice}`;
      disComp.innerText = `Choice :- ${compChoice}`;

      //   displaying score
      compScore++;
      compScoreBoard.innerText = compScore;
    }
  });
});
