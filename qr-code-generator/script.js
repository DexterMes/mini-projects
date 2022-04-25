const generateBtn = document.getElementById("generate-btn");
const qrInput = document.getElementById("qr-input");
const qrCodeDiv = document.getElementById("qr-code");

generateBtn.addEventListener("click", () => {
	const text = qrInput.value.trim();
	if (text) {
		qrCodeDiv.innerHTML = "";
		QRCode.toCanvas(qrCodeDiv, text, { width: 200 }, (error) => {
			if (error) console.error(error);
			else console.log("QR Code generated successfully");
		});
	} else alert("Please enter some text to generate a QR code.");
});
