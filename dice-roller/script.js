const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const rollButton = document.getElementById("roll-btn");

function rollDice() {
	const randomNumber1 = Math.floor(Math.random() * 6) + 1;
	const randomNumber2 = Math.floor(Math.random() * 6) + 1;

	dice1.textContent = randomNumber1;
	dice2.textContent = randomNumber2;
}

rollButton.addEventListener("click", rollDice);
