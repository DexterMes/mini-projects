const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startButton = document.getElementById("start-btn");
const timerMinutes = document.getElementById("timer-minutes");
const timerSeconds = document.getElementById("timer-seconds");

let countdown;

function startTimer() {
	const minutes = parseInt(minutesInput.value) || 0;
	const seconds = parseInt(secondsInput.value) || 0;
	let totalTime = minutes * 60 + seconds;

	if (totalTime <= 0) {
		alert("Please enter a valid time.");
		return;
	}

	clearInterval(countdown);

	countdown = setInterval(() => {
		const minutesLeft = Math.floor(totalTime / 60);
		const secondsLeft = totalTime % 60;

		timerMinutes.textContent = String(minutesLeft).padStart(2, "0");
		timerSeconds.textContent = String(secondsLeft).padStart(2, "0");

		if (totalTime <= 0) {
			clearInterval(countdown);
			alert("Time's up!");
		} else {
			totalTime--;
		}
	}, 1000);
}

startButton.addEventListener("click", startTimer);
