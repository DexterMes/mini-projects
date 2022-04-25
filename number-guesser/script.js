const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-btn");
const message = document.getElementById("message");

const randomNumber = Math.floor(Math.random() * 100) + 1;

guessButton.addEventListener("click", () => {
	const userGuess = parseInt(guessInput.value);

	if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
		message.textContent = "Please enter a valid number between 1 and 100.";
		return;
	}

	if (userGuess === randomNumber) {
		message.textContent = `Congratulations! You guessed the correct number: ${randomNumber}`;
		guessButton.disabled = true;
	} else if (userGuess < randomNumber) {
		message.textContent = "Too low! Try again.";
	} else message.textContent = "Too high! Try again.";

	guessInput.value = "";
});
