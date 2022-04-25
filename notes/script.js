const addButton = document.getElementById("add-note");
const noteInput = document.getElementById("note-input");
const notesContainer = document.getElementById("notes-container");

document.addEventListener("DOMContentLoaded", loadNotes);

addButton.addEventListener("click", () => {
	const noteText = noteInput.value.trim();
	if (noteText) {
		addNoteToStorage(noteText);
		noteInput.value = "";
		renderNotes();
	}
});

function renderNotes() {
	notesContainer.innerHTML = "";
	const notes = JSON.parse(localStorage.getItem("notes")) || [];

	notes.forEach((note, index) => {
		const noteElement = document.createElement("div");
		noteElement.classList.add("note");
		noteElement.innerHTML = `
            <p>${note}</p>
            <button onclick="deleteNote(${index})">x</button>
        `;
		notesContainer.appendChild(noteElement);
	});
}

function addNoteToStorage(noteText) {
	const notes = JSON.parse(localStorage.getItem("notes")) || [];
	notes.push(noteText);
	localStorage.setItem("notes", JSON.stringify(notes));
}

function deleteNote(index) {
	const notes = JSON.parse(localStorage.getItem("notes")) || [];
	notes.splice(index, 1);
	localStorage.setItem("notes", JSON.stringify(notes));
	renderNotes();
}

function loadNotes() {
	renderNotes();
}
