document.addEventListener("DOMContentLoaded", () => {
	const searchContainer = document.getElementById("searchFormContainer");
	const resultsContainer = document.getElementById("results");

	const searchForm = new SearchForm(resultsContainer);

	searchContainer.innerHTML = searchForm.render();
	searchForm.attachEvents();
});
