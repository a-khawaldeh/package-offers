package com.nodex.package_offers.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class PackageOfferDTO {
    private String originCity;
    private String destinationCity;
    private String price;
    private String startDate;
    private String endDate;
    private String flightDealCarrierImageUrl;
    private String flightDealCarrierName;
}