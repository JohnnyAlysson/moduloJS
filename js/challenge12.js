// Crie um jogo simples de adivinhação, em que o computador
// escolhe um número aleatório entre 1 e 10, e o jogador tenta
// adivinhar o número. Aqui estão os passos:

// 1.O computador escolhe um número aleatório entre 1 e 10 e o
// armazena.

// 2. O programa solicita ao jogador que insira um palpite.

// 3. Utilize um bloco try e catch para lidar com a entrada do jogador. Se o
// jogador inserir algo que não seja um número, exiba uma mensagem
// indicando que apenas números são aceitos.
// 4. Se o palpite estiver correto, exiba uma mensagem de parabéns. Se
// estiver errado, informe ao jogador se o número escolhido pelo computador
// é maior ou menor que o palpite.


let computerNumber;
let attempts = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function startNewGame() {
    computerNumber = generateRandomNumber();
    attempts = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('playerNumber').textContent = '?';
    document.getElementById('computerNumber').textContent = '?';
    document.getElementById('computerCard').classList.add('hidden');
    document.getElementById('newGame').style.display = 'none';
    document.getElementById('submitGuess').disabled = false;
    document.getElementById('guess').value = '';
}

function checkGuess() {
    const guessInput = document.getElementById('guess');
    const message = document.getElementById('message');
    const playerCard = document.getElementById('playerNumber');
    const computerCard = document.getElementById('computerCard');

    try {
        const playerGuess = parseInt(guessInput.value);

        if (isNaN(playerGuess)) {
            throw new Error('Por favor, insira apenas números.');
        }

        attempts++;
        playerCard.textContent = playerGuess;

        if (playerGuess === computerNumber) {
            message.textContent = `Parabéns! Você acertou em ${attempts} tentativas.`;
            endGame();
        } else if (playerGuess < computerNumber) {
            message.textContent = 'Tente um número maior.';
        } else {
            message.textContent = 'Tente um número menor.';
        }
    } catch (error) {
        message.textContent = error.message;
    }

    guessInput.value = '';
}

function endGame() {
    document.getElementById('computerCard').classList.remove('hidden');
    document.getElementById('computerNumber').textContent = computerNumber;
    document.getElementById('newGame').style.display = 'inline-block';
    document.getElementById('submitGuess').disabled = true;
}

document.getElementById('submitGuess').addEventListener('click', checkGuess);
document.getElementById('newGame').addEventListener('click', startNewGame);

window.onload = startNewGame;