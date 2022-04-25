const quotes = [
	"The only way to do great work is to love what you do. – Steve Jobs",
	"Life is what happens when you're busy making other plans. – John Lennon",
	"The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
	"Get busy living or get busy dying. – Stephen King",
	"You miss 100% of the shots you don’t take. – Wayne Gretzky",
	"It is never too late to be what you might have been. – George Eliot",
];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("generate-btn");

function getRandomQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	quoteElement.textContent = quotes[randomIndex];
}

button.addEventListener("click", getRandomQuote);
