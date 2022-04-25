const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
	const text = textInput.value;
	charCount.textContent = text.length;
});
