class SearchForm {
    constructor(resultsContainer) {
        this.resultsContainer = resultsContainer;
    }

    async onSearch(originCity, destinationCity) {
        const baseUrl = "http://localhost:8080/api/v1/package/search";
        const url = new URL(baseUrl);
        url.searchParams.append("originCity", originCity);
        url.searchParams.append("destinationCity", destinationCity);

        const response = await fetch(url);
        const data = await response.json();

        return data;
    }

    render() {
        return `
            <form id="searchForm" class="card p-4 shadow">
                <div class="row">
                    <div class="col-md-5 mb-3 mb-md-0">
                        <label for="originCity" class="form-label"
                            >Origin City</label
                        >
                        <input
                            type="text"
                            id="originCity"
                            class="form-control"
                            placeholder="Enter origin city"
                            required
                        />
                    </div>
                    <div class="col-md-5 mb-3 mb-md-0">
                        <label for="destinationCity" class="form-label"
                            >Destination City</label
                        >
                        <input
                            type="text"
                            id="destinationCity"
                            class="form-control"
                            placeholder="Enter destination city"
                            required
                        />
                    </div>
                    <div class="col-md-2 d-flex align-items-end">
                        <button type="submit" class="btn btn-outline-primary w-100">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        `;
    }

    renderResults(data) {
        this.resultsContainer.innerHTML = data.length 
                ? data.map(offer => new PackageCard(offer).render()).join("")
                : "<p>No packages found.</p>";
    }

    renderError(error) {
        this.resultsContainer.innerHTML = "<p>Error fetching data.</p>";
        console.error("Error fetching data:", error);
    }

    setLoading() {
        this.resultsContainer.innerHTML = `
            <div id="loading" class="text-center mt-4" style="/*! display: none */">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-2">Searching for deals...</p>
            </div>
        `;
    }

    attachEvents() {
        document.getElementById("searchForm").addEventListener("submit", async (event) => {
            event.preventDefault();
            const originCity = document.getElementById("originCity").value;
            const destinationCity = document.getElementById("destinationCity").value;
            this.setLoading();
            try {
                const result = await this.onSearch(originCity, destinationCity);
                this.renderResults(result);
            } catch (error) {
                this.renderError(error);
            }
        });
    }
}
