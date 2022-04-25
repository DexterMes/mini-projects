const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");

const generateButton = document.getElementById("generate-btn");
const gradientPreview = document.getElementById("gradient-preview");

const cssCodeOutput = document.getElementById("css-code-output");
const copyButton = document.getElementById("copy-btn");

function generateGradient() {
	const gradient = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	gradientPreview.style.background = gradient;
	cssCodeOutput.value = `background: ${gradient};`;
}

function copyToClipboard() {
	cssCodeOutput.select();
	document.execCommand("copy");
	alert("CSS code copied to clipboard!");
}

generateButton.addEventListener("click", generateGradient);
copyButton.addEventListener("click", copyToClipboard);

generateGradient();
