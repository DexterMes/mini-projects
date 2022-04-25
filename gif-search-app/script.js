const apiKey = "Y7117w77hxrsnXZ6CZwUO6X0vKA7oB7A"; // Replace with your Giphy API Key
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const gifContainer = document.getElementById("gif-container");

searchBtn.addEventListener("click", async () => {
	const searchTerm = searchInput.value.trim();
	if (searchTerm !== "") {
		await fetchGIFs(searchTerm);
	} else {
		alert("Please enter a search term");
	}
});

async function fetchGIFs(query) {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=12&offset=0&rating=g&lang=en`;
	try {
		const response = await fetch(url);
		const data = await response.json();
		displayGIFs(data.data);
	} catch (error) {
		console.error("Error fetching GIFs:", error);
	}
}

function displayGIFs(gifs) {
	gifContainer.innerHTML = ""; // Clear any existing GIFs
	if (gifs.length > 0) {
		gifs.forEach((gif) => {
			const gifElement = document.createElement("div");
			gifElement.classList.add("gif");
			gifElement.innerHTML = `<img src="${gif.images.fixed_height.url}" alt="${gif.title}">`;
			gifElement.addEventListener("click", () => copyToClipboard(gif.images.fixed_height.url));
			gifContainer.appendChild(gifElement);
		});
	} else {
		gifContainer.innerHTML = "<p>No GIFs found. Try another search.</p>";
	}
}

function copyToClipboard(gifUrl) {
	navigator.clipboard
		.writeText(gifUrl)
		.then(() => {
			alert("GIF URL copied to clipboard!");
		})
		.catch((error) => {
			console.error("Failed to copy: ", error);
		});
}
