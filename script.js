"use strict";

document.querySelector(".score").textContent = 20;
let score = 20;
let hscore = 0;
let number = Math.ceil(Math.random() * 20);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score < 2) {
    document.querySelector(".score").textContent = score - 1;
    document.querySelector(".messageblock").textContent = "Game Over !!!";
  } else {
    if (guess < 1 || guess > 20) {
      document.querySelector(".messageblock").textContent = "Number should be between 1-20";
    } else if (number === guess) {
      document.querySelector(".messageblock").textContent = "You guessed the number";
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = guess;

      if (score > hscore) {
        hscore = score;
        document.querySelector(".highscore").textContent = hscore;
      }
    } else if (guess < number) {
      document.querySelector(".messageblock").textContent = "Its Higher Number";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess > number) {
      document.querySelector(".messageblock").textContent = "Its Lower Number";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".messageblock").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "rgb(59, 59, 59)";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  number = Math.ceil(Math.random() * 20) + 1;
  score = 20;
});
