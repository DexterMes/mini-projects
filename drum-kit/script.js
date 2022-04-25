const sounds = {
	w: "sounds/crash.mp3",
	a: "sounds/kick-bass.mp3",
	s: "sounds/snare.mp3",
	d: "sounds/tom-1.mp3",
	j: "sounds/tom-2.mp3",
	k: "sounds/tom-3.mp3",
	l: "sounds/tom-4.mp3",
};

const drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach((button) => {
	button.addEventListener("click", function () {
		playSound(this.id);
		animateButton(this.id);
	});
});

document.addEventListener("keydown", function (event) {
	if (sounds[event.key]) {
		playSound(event.key);
		animateButton(event.key);
	}
});

function playSound(key) {
	const audio = new Audio(sounds[key]);
	audio.play();
}

function animateButton(key) {
	const button = document.getElementById(key);
	button.classList.add("pressed");
	setTimeout(() => {
		button.classList.remove("pressed");
	}, 100);
}
