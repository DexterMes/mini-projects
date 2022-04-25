const speakButton = document.getElementById("speak-btn");
const textInput = document.getElementById("text-input");

if ("speechSynthesis" in window) {
	function speakText(text) {
		const speech = new SpeechSynthesisUtterance(text);
		speech.lang = "en-US";
		speech.volume = 1;
		speech.rate = 1;
		speech.pitch = 1;

		window.speechSynthesis.speak(speech);
	}

	speakButton.addEventListener("click", () => {
		const text = textInput.value.trim();
		if (text !== "") speakText(text);
		else alert("Please enter some text.");
	});
} else alert("Browser doesn't support speech synthesis.");
