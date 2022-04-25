const words = ["javascript", "html", "css", "python", "developer", "programming", "scramble"];
let currentWord = "";
let scrambledWord = "";

const feedback = document.getElementById("feedback");
const userInput = document.getElementById("user-input");

const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");

const scrambledWordElement = document.getElementById("scrambled-word");

function scrambleWord(word) {
	const scrambled = word
		.split("")
		.sort(() => Math.random() - 0.5)
		.join("");
	return scrambled;
}

function setNewWord() {
	const randomIndex = Math.floor(Math.random() * words.length);
	currentWord = words[randomIndex];
	scrambledWord = scrambleWord(currentWord);
	scrambledWordElement.textContent = scrambledWord;
	userInput.value = "";
	feedback.textContent = "";
	nextButton.style.display = "none";
}

submitButton.addEventListener("click", () => {
	const userGuess = userInput.value.trim().toLowerCase();
	if (userGuess === currentWord) {
		feedback.textContent = "Correct! Well done!";
		feedback.style.color = "green";
		nextButton.style.display = "inline-block";
	} else {
		feedback.textContent = "Oops! Try again.";
		feedback.style.color = "red";
	}
});

nextButton.addEventListener("click", setNewWord);

setNewWord();
