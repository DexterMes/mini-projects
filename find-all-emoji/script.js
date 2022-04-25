const emojiDict = {
	happy: "😊",
	sad: "😢",
	love: "❤️",
	angry: "😡",
	laugh: "😂",
	surprised: "😮",
	heart: "❤️",
	star: "⭐",
	fire: "🔥",
	cat: "🐱",
	dog: "🐶",
};

let totalEmojis = 0;

function updateEmojiCount() {
	const emojiCount = document.getElementById("emojiCount");
	emojiCount.textContent = totalEmojis;
}

document.getElementById("totalEmojiCount").textContent = `${Object.keys(emojiDict).length}`;

document.getElementById("inputText").addEventListener("input", function () {
	const inputText = document.getElementById("inputText").value.toLowerCase().trim();
	let words = inputText.split(/\s+/);
	let output = words.map((word) => emojiDict[word] || word).join(" ");

	totalEmojis = (
		output.match(
			/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}\u{1F004}\u{1F0CF}]/gu
		) || []
	).length;

	document.getElementById("emojiOutput").textContent = output;
	updateEmojiCount();

	if (totalEmojis === emojiDict.length) document.getElementById("gameStatus").textContent = "Congratulations! You won!";
	else document.getElementById("gameStatus").textContent = "";
});
