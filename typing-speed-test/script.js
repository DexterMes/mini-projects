let startButton = document.getElementById("startButton");
let inputText = document.getElementById("inputText");
let passage = document.getElementById("passage");
let timerDisplay = document.getElementById("timer");
let wpmDisplay = document.getElementById("wpm");

let startTime;
let timer;
let wordCount = 0;

startButton.addEventListener("click", startTest);

function startTest() {
	inputText.disabled = false;
	inputText.value = "";
	wordCount = 0;
	wpmDisplay.textContent = "Speed: 0 WPM";
	timerDisplay.textContent = "Time: 0 Second";
	inputText.focus();
	startButton.disabled = true;

	startTime = Date.now();
	timer = setInterval(updateTimer, 1000);
	inputText.addEventListener("input", updateWPM);
}

function updateTimer() {
	let elapsed = Math.floor((Date.now() - startTime) / 1000);
	timerDisplay.textContent = `Time: ${elapsed} Seconds`;

	if (elapsed >= 60) {
		clearInterval(timer);
		inputText.disabled = true;
		startButton.disabled = false;
		inputText.removeEventListener("input", updateWPM);
	}
}

function updateWPM() {
	let typedText = inputText.value.trim();
	let typedWords = typedText.split(/\s+/).filter((word) => word.length > 0).length;

	if (typedWords !== wordCount) {
		wordCount = typedWords;
		let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
		let wpm = Math.floor((wordCount / elapsedTime) * 60);
		wpmDisplay.textContent = `Speed: ${wpm} WPM`;
	}

	if (inputText.value === passage.textContent) {
		clearInterval(timer);
		inputText.disabled = true;
		startButton.disabled = false;
		inputText.removeEventListener("input", updateWPM);
	}
}
