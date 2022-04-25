const boxes = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
const winningCombo = [
	["a1", "a2", "a3"],
	["b1", "b2", "b3"],
	["c1", "c2", "c3"],
	["a1", "b1", "c1"],
	["a2", "b2", "c2"],
	["a3", "b3", "c3"],
	["a1", "b2", "c3"],
	["a3", "b2", "c1"],
];

const playerMoves = { circle: [], cross: [] };
const playerScores = { circle: 0, cross: 0 };

boxes.forEach((box) => (document.getElementById(box).onclick = () => placeMove(box, turn)));
document.getElementById(`circle-score`).innerHTML = playerScores.circle;
document.getElementById(`cross-score`).innerHTML = playerScores.cross;

let turn = true;
let moves = 9;

function placeMove(boxId, move) {
	const box = document.getElementById(boxId);
	if (!box.classList.contains("clicked")) {
		moves = --moves;
		move ? (move = "circle") : (move = "cross");

		playerMoves[move].push(boxId);

		box.innerHTML = `<div class="${move}"></div>`;
		box.classList.add("clicked");

		winningCombo.forEach((combo) => {
			if (combo.every((combo) => playerMoves[move].includes(combo))) {
				drawLine(combo);
				updateScore(move);
				document.getElementById("gameModal").showModal();
			}
		});

		updateTurn();

		if (!moves) reset();
	}
}

function drawLine(combo) {
	const box1 = document.getElementById(combo[0]).getBoundingClientRect();
	const box2 = document.getElementById(combo[2]).getBoundingClientRect();

	const line = document.getElementById("win-line");

	line.setAttribute("x1", (box1.left + box1.right) / 2);
	line.setAttribute("y1", (box1.top + box1.bottom) / 2);
	line.setAttribute("x2", (box2.left + box2.right) / 2);
	line.setAttribute("y2", (box2.top + box2.bottom) / 2);
}

function clearLine() {
	const line = document.getElementById("win-line");
	["x1", "y1", "x2", "y2"].forEach((attr) => line.setAttribute(attr, 0));
}

function updateScore(player) {
	playerScores[player]++;
	document.getElementById(`${player}-score`).innerHTML = playerScores[player];
}

function updateTurn() {
	turn = !turn;
	const turnSpan = document.getElementById("turn");
	turnSpan.innerHTML = turn ? `<span class="blue">O</span>` : `<span class="red">X</span>`;
}

function reset() {
	playerMoves.circle = [];
	playerMoves.cross = [];
	moves = 9;

	boxes.forEach((box) => {
		document.getElementById(box).innerHTML = "";
		document.getElementById(box).classList.remove("clicked");
	});
}

function restart() {
	reset();
	clearLine();
	turn = true;
	document.getElementById("turn").innerHTML = `<span class="blue">O</span>`;
	document.getElementById("gameModal").close();
}

function newGame() {
	playerScores.circle = 0;
	playerScores.cross = 0;
	document.getElementById(`circle-score`).innerHTML = playerScores.circle;
	document.getElementById(`cross-score`).innerHTML = playerScores.cross;
	restart();
}
