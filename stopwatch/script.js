const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const resetButton = document.getElementById("reset-btn");

let startTime;
let elapsedTime = 0;
let timerInterval;

function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}

function updateTimer() {
	const currentTime = Date.now();
	elapsedTime = currentTime - startTime;

	const minutes = Math.floor(elapsedTime / 60000);
	const seconds = Math.floor((elapsedTime % 60000) / 1000);
	const milliseconds = Math.floor((elapsedTime % 1000) / 10);

	minutesDisplay.textContent = formatTime(minutes);
	secondsDisplay.textContent = formatTime(seconds);
	millisecondsDisplay.textContent = formatTime(milliseconds);
}

startButton.addEventListener("click", () => {
	if (!timerInterval) {
		startTime = Date.now() - elapsedTime;
		timerInterval = setInterval(updateTimer, 10);
	}
});

stopButton.addEventListener("click", () => {
	clearInterval(timerInterval);
	timerInterval = null;
});

resetButton.addEventListener("click", () => {
	clearInterval(timerInterval);
	timerInterval = null;
	elapsedTime = 0;
	minutesDisplay.textContent = "00";
	secondsDisplay.textContent = "00";
	millisecondsDisplay.textContent = "00";
});
