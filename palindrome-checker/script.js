const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

function isPalindrome(str) {
	const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
	const reversedStr = cleanedStr.split("").reverse().join("");
	return cleanedStr === reversedStr;
}

checkButton.addEventListener("click", () => {
	const inputText = textInput.value.trim();

	if (inputText === "") {
		alert("Please input a value.");
		return;
	}

	if (isPalindrome(inputText)) resultDiv.textContent = `"${inputText}" is a palindrome indeed!`;
	else resultDiv.textContent = `"${inputText}" is definately not a palindrome.`;
});
