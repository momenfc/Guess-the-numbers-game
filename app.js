// Game Values
let min = 1,
    max = 10,
    gusessLeft = 3,
    wonNum = randomNum(min, max);

// UI var
const game = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessInput = document.getElementById('guess-input'),
    guessBtn = document.getElementById('guess-btn'),
    gameMessage = document.querySelector('.game-msg');

// set min and max
minNum.textContent = min;
maxNum.textContent = max;

// add event to guess btn
guessBtn.addEventListener('click', getGuess);
guessBtn.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload()
    }
});

// fun to start game
function getGuess() {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        message(`Please Insert Number Between ${min} and ${max}`, 'rgb(124, 68, 4');
    } else {
        if (guess === wonNum) {
            gameOver(true, `'congratulations' ${wonNum} is correct`)
        } else {
            gusessLeft -= 1;
            message(`'Wrong number' left guess ${gusessLeft}`, 'rgb(124, 68, 4');
            guessInput.value = '';
            if (gusessLeft === 0) {
                gameOver(false, `'Game Over' correct number is ${wonNum}`);
            }

        }

    }
}

function message(msg, color) {
    gameMessage.textContent = msg;
    gameMessage.style.color = color
}
// game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    gameMessage.textContent = msg;
    gameMessage.style.color = color;
    guessBtn.style.borderColor = color;
    guessInput.style.borderColor = color;
    guessInput.disabled = true;
    // play again
    guessBtn.value = 'Play again';
    guessBtn.className += 'play-again';
}

// get random number
function randomNum(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}