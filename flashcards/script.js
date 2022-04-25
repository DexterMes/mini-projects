const flashcards = [
	{ question: "What is the capital of France?", answer: "Paris" },
	{ question: "What is the largest planet in our solar system?", answer: "Jupiter" },
	{ question: 'Who wrote "Romeo and Juliet"?', answer: "William Shakespeare" },
	{ question: "What is the chemical symbol for gold?", answer: "Au" },
	{ question: "What is the fastest land animal?", answer: "Cheetah" },
	{ question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },
];

const flashcardContainer = document.querySelector(".flashcard-container");

function createFlashcard(card) {
	const flashcard = document.createElement("div");
	flashcard.classList.add("flashcard");

	const cardElement = document.createElement("div");
	cardElement.classList.add("card");

	const front = document.createElement("div");
	front.classList.add("front");
	front.textContent = card.question;

	const back = document.createElement("div");
	back.classList.add("back");
	back.textContent = card.answer;

	cardElement.appendChild(front);
	cardElement.appendChild(back);
	flashcard.appendChild(cardElement);
	flashcardContainer.appendChild(flashcard);
}

flashcards.forEach(createFlashcard);
