const next1 = document.getElementById("next-1");
const next2 = document.getElementById("next-2");
const prev2 = document.getElementById("prev-2");
const prev3 = document.getElementById("prev-3");
const form = document.getElementById("multi-step-form");

const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const step3 = document.getElementById("step-3");

next1.addEventListener("click", () => {
	step1.classList.remove("active");
	step2.classList.add("active");
});

next2.addEventListener("click", () => {
	step2.classList.remove("active");
	step3.classList.add("active");
});

prev2.addEventListener("click", () => {
	step2.classList.remove("active");
	step1.classList.add("active");
});

prev3.addEventListener("click", () => {
	step3.classList.remove("active");
	step2.classList.add("active");
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	alert("Form submitted!");
});
