class PackageCard {
    constructor(offer) {
        this.offer = offer;
    }

    render() {
        return `
            <div class="card mb-3 p-3">
                <div class="d-flex align-items-center">
                    <div class="me-3">
                        <img src="${this.offer.flightDealCarrierImageUrl}" alt="${this.offer.flightDealCarrierName}" width="123" height="25">
                    </div>
                    <div>
                        <h5>${this.offer.originCity} → ${this.offer.destinationCity}</h5>
                        <p><strong>Start Date:</strong> ${this.offer.startDate}</p>
                        <p><strong>End Date:</strong> ${this.offer.endDate}</p>
                        <p><strong>Price:</strong> ${this.offer.price}</p>
                    </div>
                </div>
            </div>
        `;
    }
}
