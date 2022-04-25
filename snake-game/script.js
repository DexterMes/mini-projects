const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let SNAKE_SPEED = 0;
let snake = [];
let dx = 0;
let dy = 0;
let lastDx = 0;
let lastDy = 0;
let gameInterval = null;
let apple = {};
let points = 0;
let gameMode = "Classic";

function modeChange() {
	gameMode = gameMode === "Classic" ? "Infinity" : "Classic";
	document.getElementById("game-mode").innerHTML = gameMode;

	startGame();
}

function initialState() {
	SNAKE_SPEED = 10;

	points = 0;
	dx = 10;
	dy = 0;
	lastDx = dx;
	lastDy = dy;

	snake = [
		{ x: 50, y: 20 },
		{ x: 40, y: 20 },
		{ x: 30, y: 20 },
		{ x: 20, y: 20 },
		{ x: 10, y: 20 },
	];

	document.getElementById("points").innerHTML = points;
	document.getElementById("game-over").innerHTML = "";

	createAppleCoordinate();
}

document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowUp" && lastDy === 0) {
		dx = 0;
		dy = -SNAKE_SPEED;
	} else if (event.key === "ArrowDown" && lastDy === 0) {
		dx = 0;
		dy = SNAKE_SPEED;
	} else if (event.key === "ArrowLeft" && lastDx === 0) {
		dx = -SNAKE_SPEED;
		dy = 0;
	} else if (event.key === "ArrowRight" && lastDx === 0) {
		dx = SNAKE_SPEED;
		dy = 0;
	}
});

function moveSnakeClassic() {
	for (let i = snake.length - 1; i >= 0; i--) {
		if (i == 0) {
			snake[i].x += dx;
			snake[i].y += dy;
		} else {
			snake[i].x = snake[i - 1].x;
			snake[i].y = snake[i - 1].y;
		}
	}

	ctx.fillStyle = "blue";
	for (const snakePart of snake) ctx.fillRect(snakePart.x, snakePart.y, 10, 10);

	drawApple(apple.x + 5, apple.y + 5, 5);
	checkForWallHit(snake);
	checkAppleEated(snake);

	lastDx = dx;
	lastDy = dy;
}

function moveSnakeInfinite() {
	for (let i = snake.length - 1; i >= 0; i--) {
		if (i == 0) {
			snake[i].x += dx;
			if (snake[i].x < 0) snake[i].x += 400;
			if (snake[i].x > 400) snake[i].x -= 410;
			snake[i].y += dy;
			if (snake[i].y < 0) snake[i].y += 400;
			if (snake[i].y > 400) snake[i].y -= 410;
		} else {
			snake[i].x = snake[i - 1].x;
			snake[i].y = snake[i - 1].y;
		}
	}

	ctx.fillStyle = "blue";
	for (const snakePart of snake) ctx.fillRect(snakePart.x, snakePart.y, 10, 10);

	drawApple(apple.x + 5, apple.y + 5, 5);
	checkForSelfHit(snake);
	checkAppleEated(snake);

	lastDx = dx;
	lastDy = dy;
}

function drawApple(x, y, radius) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2);
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.closePath();
}

function checkForWallHit(snake) {
	if (snake[0].x < 0 || snake[0].x >= 400 || snake[0].y < 0 || snake[0].y >= 400) {
		clearInterval(gameInterval);
		document.getElementById("game-over").innerHTML = "Game Over!";
	}
	checkForSelfHit(snake);
}

function checkForSelfHit(snake) {
	if (snake.findIndex((part, i) => i !== 0 && part.x === snake[0].x && part.y === snake[0].y) != -1) {
		clearInterval(gameInterval);
		document.getElementById("game-over").innerHTML = "Game Over!";
	}
}

function checkAppleEated(snake) {
	if (snake[0].x == apple.x && snake[0].y == apple.y) {
		snake.push(apple);

		points++;
		document.getElementById("points").innerHTML = points;

		createAppleCoordinate();
	}
}

function createAppleCoordinate() {
	while (true) {
		const x = Math.floor(Math.random() * 40) * 10;
		const y = Math.floor(Math.random() * 40) * 10;

		const isOnSnake = snake.some((segment) => segment.x === x && segment.y === y);
		if (!isOnSnake) {
			apple = { x, y };
			break;
		}
	}
}

function startGame() {
	initialState();
	if (gameInterval) clearInterval(gameInterval);

	gameInterval = setInterval(() => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		if (gameMode == "Classic") moveSnakeClassic();
		else moveSnakeInfinite();
	}, 50);
}

startGame();
