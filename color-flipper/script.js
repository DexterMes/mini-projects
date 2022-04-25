const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFF5", "#F5FF33", "#FF3333", "#33FF8C", "#8C33FF"];

const flipButton = document.getElementById("flip-btn");
const colorCode = document.getElementById("color-code");

function getRandomColor() {
	const randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
}

flipButton.addEventListener("click", () => {
	const randomColor = getRandomColor();
	document.body.style.backgroundColor = randomColor;
	colorCode.textContent = randomColor;
});
