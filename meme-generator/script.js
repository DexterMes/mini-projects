const canvas = document.getElementById("meme-canvas");
const ctx = canvas.getContext("2d");
const imageUpload = document.getElementById("image-upload");
const textInput = document.getElementById("text-input");
const addTextBtn = document.getElementById("add-text");
const downloadBtn = document.getElementById("download-btn");
const textColorInput = document.getElementById("text-color");

let memeImage = new Image();
let textElements = [];
let selectedTextElement = null;

let imageWidth, imageHeight;

imageUpload.addEventListener("change", (e) => {
	const file = e.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function (event) {
			memeImage.onload = function () {
				const aspectRatio = memeImage.width / memeImage.height;
				imageWidth = 800; // Set canvas width (you can adjust this)
				imageHeight = imageWidth / aspectRatio;
				canvas.width = imageWidth;
				canvas.height = imageHeight;

				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.drawImage(memeImage, 0, 0, canvas.width, canvas.height);
			};
			memeImage.src = event.target.result;
		};
		reader.readAsDataURL(file);
	}
});

addTextBtn.addEventListener("click", () => {
	const text = textInput.value.trim();
	const textColor = textColorInput.value;
	if (text && textElements.length < 4) {
		const newTextElement = {
			text,
			x: canvas.width / 2,
			y: canvas.height / 2,
			font: "30px Arial",
			color: textColor,
			isDragging: false,
		};
		textElements.push(newTextElement);
		textInput.value = "";
		renderMeme();
	} else {
		alert("Max 4 text elements allowed or text is empty!");
	}
});

canvas.addEventListener("mousedown", (e) => {
	const mouseX = e.offsetX;
	const mouseY = e.offsetY;

	for (let i = 0; i < textElements.length; i++) {
		const textElement = textElements[i];
		ctx.font = textElement.font;
		const textWidth = ctx.measureText(textElement.text).width;
		const textHeight = parseInt(textElement.font, 10);

		if (
			mouseX >= textElement.x - textWidth / 2 &&
			mouseX <= textElement.x + textWidth / 2 &&
			mouseY >= textElement.y - textHeight / 2 &&
			mouseY <= textElement.y + textHeight / 2
		) {
			selectedTextElement = textElement;
			selectedTextElement.isDragging = true;
			break;
		}
	}
});

canvas.addEventListener("mousemove", (e) => {
	if (selectedTextElement && selectedTextElement.isDragging) {
		selectedTextElement.x = e.offsetX;
		selectedTextElement.y = e.offsetY;
		renderMeme();
	}
});

canvas.addEventListener("mouseup", () => {
	if (selectedTextElement) {
		selectedTextElement.isDragging = false;
		selectedTextElement = null;
	}
});

function renderMeme() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if (memeImage.src) {
		ctx.drawImage(memeImage, 0, 0, canvas.width, canvas.height);
	}

	textElements.forEach((textElement) => {
		ctx.font = textElement.font;
		ctx.fillStyle = textElement.color;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText(textElement.text, textElement.x, textElement.y);
	});
}

downloadBtn.addEventListener("click", () => {
	const link = document.createElement("a");
	link.href = canvas.toDataURL();
	link.download = "meme.png";
	link.click();
});
