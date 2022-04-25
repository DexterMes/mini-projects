const lightbulb = document.getElementById("lightbulb");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
	lightbulb.classList.toggle("on");

	if (lightbulb.classList.contains("on")) toggleButton.textContent = "Turn Off";
	else toggleButton.textContent = "Turn On";
});
