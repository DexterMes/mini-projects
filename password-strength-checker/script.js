document.getElementById("password").addEventListener("input", function () {
	let password = this.value;
	let strengthText = document.getElementById("strength");
	let strength = getPasswordStrength(password);

	strengthText.textContent = `Strength: ${strength.text}`;
	strengthText.className = strength.class;
});

function getPasswordStrength(password) {
	let strength = { text: "Weak", class: "weak" };

	if (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password)) {
		strength.text = "Strong";
		strength.class = "strong";
	} else if (password.length >= 6 && /[a-z]/.test(password) && /\d/.test(password)) {
		strength.text = "Medium";
		strength.class = "medium";
	}

	return strength;
}
