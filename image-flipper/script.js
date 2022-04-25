const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
let currentSlide = 0;

function showSlide(index) {
	slides.forEach((slide, i) => {
		slide.classList.toggle("active", i === index);
	});
}

function nextSlide() {
	currentSlide = (currentSlide + 1) % slides.length;
	showSlide(currentSlide);
}

function prevSlide() {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	showSlide(currentSlide);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

showSlide(currentSlide);
