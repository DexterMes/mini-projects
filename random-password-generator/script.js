const generateButton = document.getElementById("generate-button");
const passwordField = document.getElementById("password");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";

function generatePassword(length) {
	let password = "";
	for (let i = 0; i < length; i++) {
		password += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return password;
}

generateButton.addEventListener("click", () => {
	passwordField.value = generatePassword(16);
});
