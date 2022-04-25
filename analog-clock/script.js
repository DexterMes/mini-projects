function updateClock() {
	const hourHand = document.getElementById("hour-hand");
	const minuteHand = document.getElementById("minute-hand");
	const secondHand = document.getElementById("second-hand");

	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();

	const hourDeg = (hours % 12) * 30 + minutes / 2;
	const minuteDeg = minutes * 6;
	const secondDeg = seconds * 6;

	hourHand.style.transform = `translateX(-50%) translateY(50%) rotate(${hourDeg}deg)`;
	minuteHand.style.transform = `translateX(-50%) translateY(50%) rotate(${minuteDeg}deg)`;
	secondHand.style.transform = `translateX(-50%) translateY(50%) rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
