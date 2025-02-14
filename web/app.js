const searchOffers = async (event) => {
	event.preventDefault();

	const originCity = document.getElementById("originCity").value.trim();
	const destinationCity = document
		.getElementById("destinationCity")
		.value.trim();
	const resultsDiv = document.getElementById("results");
	const loadingDiv = document.getElementById("loading");

	resultsDiv.innerHTML = "";
	loadingDiv.style.display = "block";

	try {
		const baseUrl = "http://localhost:8080/api/v1/package/search";
		const url = new URL(baseUrl);
		url.searchParams.append("originCity", originCity);
		url.searchParams.append("destinationCity", destinationCity);

		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Error ${response.status}: Unable to fetch data`);
		}

		const data = await response.json();
		let resultHTML = `<h3 class="mt-4">Results (${data.length})</h3>`;

		if (data.length > 0) {
			data.forEach((offer) => {
				resultHTML += `
                    <div class="card mb-3 p-3 shadow-sm">
                        <div class="d-flex justify-content-between">
                            <h5>${offer.originCity} ➝ ${offer.destinationCity}</h5>
                            <p><strong>Price:</strong> ${offer.price}</p>
                        </div>
                        <span><strong>Start Date:</strong> ${offer.startDate}</span>
                        <span><strong>End Date:</strong> ${offer.endDate}</span>
                        <span><strong>Carrier:</strong> <img src="${offer.flightDealCarrierImageUrl}" /> ${offer.flightDealCarrierName}</span>
                    </div>`;
			});
		} else {
			resultHTML = "<p class='text-warning'>No packages found.</p>";
		}

		resultsDiv.innerHTML = resultHTML;
	} catch (error) {
		resultsDiv.innerHTML = `<p class='text-danger'>${error.message}</p>`;
	} finally {
		loadingDiv.style.display = "none";
	}
};

document.getElementById("searchForm").addEventListener("submit", searchOffers);
