const quizData = [
	{
		question: "What is the capital of France?",
		options: ["Berlin", "Madrid", "Paris", "Rome"],
		correctAnswer: "Paris",
	},
	{
		question: "Which planet is known as the Red Planet?",
		options: ["Earth", "Mars", "Jupiter", "Saturn"],
		correctAnswer: "Mars",
	},
	{
		question: "Who wrote 'To Kill a Mockingbird'?",
		options: ["Harper Lee", "J.K. Rowling", "George Orwell", "Ernest Hemingway"],
		correctAnswer: "Harper Lee",
	},
	{
		question: "What is the largest mammal?",
		options: ["Elephant", "Blue Whale", "Shark", "Giraffe"],
		correctAnswer: "Blue Whale",
	},
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
	const currentQuestion = quizData[currentQuestionIndex];
	questionElement.textContent = currentQuestion.question;

	answersElement.innerHTML = "";
	currentQuestion.options.forEach((option) => {
		const answerButton = document.createElement("button");
		answerButton.textContent = option;
		answerButton.classList.add("answer");
		answerButton.addEventListener("click", () => selectAnswer(answerButton, option));
		answersElement.appendChild(answerButton);
	});

	nextBtn.disabled = true; // Disable next button initially
}

function selectAnswer(button, selectedAnswer) {
	const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

	// Highlight the selected answer
	const allButtons = document.querySelectorAll(".answer");
	allButtons.forEach((button) => button.classList.remove("selected"));

	button.classList.add("selected");

	// Enable the next button after an answer is selected
	nextBtn.disabled = false;

	// Check if the selected answer is correct
	if (selectedAnswer === correctAnswer) {
		score++;
	}
}

nextBtn.addEventListener("click", () => {
	currentQuestionIndex++;
	if (currentQuestionIndex < quizData.length) {
		loadQuestion();
	} else {
		showResult();
	}
});

function showResult() {
	resultElement.style.display = "block";
	scoreElement.textContent = score;
	nextBtn.style.display = "none"; // Hide next button after quiz completion
}

restartBtn.addEventListener("click", () => {
	currentQuestionIndex = 0;
	score = 0;
	resultElement.style.display = "none";
	loadQuestion();
	nextBtn.disabled = true; // Disable next button at start
	nextBtn.style.display = "inline-block"; // Ensure next button is visible
});

loadQuestion();
