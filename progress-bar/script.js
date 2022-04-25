const progressBar = document.getElementById("progress-bar");
const startButton = document.getElementById("start-progress");

function startProgress() {
	let width = 0;
	const interval = setInterval(() => {
		if (width >= 100) clearInterval(interval);
		else {
			width++;
			progressBar.style.width = width + "%";
		}
	}, 50);
}

startButton.addEventListener("click", startProgress);
