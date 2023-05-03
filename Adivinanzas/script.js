var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessInput = document.getElementById("guess-input");
var guessBtn = document.getElementById("guess-btn");
var guessMsg = document.getElementById("guess-msg");

function checkGuess() {
	var guess = parseInt(guessInput.value);

	if (isNaN(guess) || guess < 1 || guess > 100) {
		guessMsg.textContent = "Por favor, ingresa un número válido.";
	} else if (guess === randomNumber) {
		guessMsg.textContent = "¡Felicidades! Adivinaste el número.";
		guessInput.disabled = true;
		guessBtn.disabled = true;
	} else if (guess < randomNumber) {
		guessMsg.textContent = "El número es mayor.";
	} else {
		guessMsg.textContent = "El número es menor.";
	}

	guessInput.value = "";
}
