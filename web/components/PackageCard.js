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
                        <div><strong>Start Date:</strong> ${this.offer.startDate}</div>
                        <div><strong>End Date:</strong> ${this.offer.endDate}</div>
                        <div><strong>Price:</strong> ${this.offer.price}</div>
                    </div>
                </div>
            </div>
        `;
    }
}
