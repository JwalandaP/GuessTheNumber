'use strict';

/* 
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number';

document.querySelector('.number').textContent = 13;

document.querySelector('.guess').value = 18;
console.log(document.querySelector('.guess').value);
document.querySelector('.score').textContent = 24;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //WHEN THERE IS NO INPUT
  if (!guess) {
    //document.querySelector('.message').textContent = '🙉 Not a number';
    displayMessage('🙉 Not a number');
    //WHEN THE PLAYER WINS!!!
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'teal';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //WHEN THE GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high' : '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 😔 You lost the game.';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  //   //WHEN GUESS IS TOO HIGH
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = ' 😔 You lost the game.';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     }
  //   }

  //   //WHEN GUESS IS TOO LOW
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = ' 😔 You lost the game.';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15 rem';
});
