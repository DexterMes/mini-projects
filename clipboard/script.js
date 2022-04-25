const copyButton = document.getElementById("copy-button");
const textToCopy = document.getElementById("text-to-copy");
const feedback = document.getElementById("feedback");

copyButton.addEventListener("click", () => {
	textToCopy.select();
	textToCopy.setSelectionRange(0, 99999);

	document.execCommand("copy");

	feedback.textContent = "Text copied to clipboard!";
	feedback.style.color = "green";

	setTimeout(() => {
		feedback.textContent = "";
	}, 2000);
});
