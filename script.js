'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number 🏆'
// console.log(document.querySelector('.message').textContent);
//
// console.log(document.querySelector('.number'));
// console.log(document.querySelector('.score'));
//
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
//
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input in the input field.
    if (!guess) {
        document.querySelector('.message').textContent = 'No value entered ❌';

    // When player wins  the game.
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number 🏆';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (highScore < score) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        } else {
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too high ⬆' : 'Too low ⬇';
            score -= 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost';
            document.querySelector('.score').textContent = 0;
        }
    }


    // // When guess os too high.
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too high ⬆';
    //         score -= 1;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost';
    //         document.querySelector('.score').textContent = 0;
    //     }
    //
    // // When guess is too low.
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low ⬇';
    //         score -= 1;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    score= 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    // document.querySelector('.highscore').textContent = '0';
});

