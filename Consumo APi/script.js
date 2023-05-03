const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-term');
const searchResults = document.getElementById('search-results');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const searchTerm = searchInput.value;
	search(searchTerm);
});

function search(searchTerm) {
	const apiUrl = `https://api.github.com/search/repositories?q=${searchTerm}`;
	fetch(apiUrl)
		.then(response => response.json())
		.then(data => {
			displayResults(data.items);
		});
}

function displayResults(results) {
	searchResults.innerHTML = '';
	results.forEach(result => {
		const li = document.createElement('li');
		li.innerHTML = `<a href="${result.html_url}">${result.name}</a> - ${result.description}`;
		searchResults.appendChild(li);
	});
}
