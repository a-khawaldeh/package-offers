package com.nodex.package_offers.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.nodex.package_offers.dto.PackageOfferDTO;
import com.nodex.package_offers.service.PackageService;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class ExpediaPackageService extends PackageService {

    private final String EXPEDIA_API_URL = "https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=test&productType=Package&clientId=test";

    @Override
    protected Map<String, Object> findPackages(String originCity, String destinationCity) {
        String url = EXPEDIA_API_URL + "&originCity=" + originCity + "&destinationCity=" + destinationCity;
        RestTemplate restTemplate = new RestTemplate();
        
        return restTemplate.getForObject(url, Map.class);
    }

    @Override
    protected List<PackageOfferDTO> extractOffers(Map<String, Object> response) {
        List<PackageOfferDTO> extractedOffers = new ArrayList<>();

        if (response != null && response.containsKey("offers")) {
            Map<String, Object> offers = (Map<String, Object>) response.get("offers");

            if (offers.containsKey("Package")) {
                List<Map<String, Object>> packageOffers = (List<Map<String, Object>>) offers.get("Package");

                for (Map<String, Object> offer : packageOffers) {
                    String originCity = ((Map<String, Object>) offer.get("origin")).get("city").toString();
                    String destinationCity = ((Map<String, Object>) offer.get("destination")).get("city").toString();

                    // date
                    Map<String, Object> offerDateRange = (Map<String, Object>) offer.get("offerDateRange");
                    String startDate = offerDateRange.get("formattedTravelStartDate").toString();
                    String endDate = offerDateRange.get("formattedTravelEndDate").toString();

                    // flight
                    Map<String, Object> flightInfo = (Map<String, Object>) offer.get("flightInfo");
                    String flightDealCarrierImageUrl = flightInfo.get("flightDealCarrierImageUrl").toString();
                    String flightDealCarrierName = flightInfo.get("flightDealCarrierName").toString();

                    // pricing
                    Map<String, Object> packagePricingInfo = (Map<String, Object>) offer.get("packagePricingInfo");
                    String price = packagePricingInfo.get("formattedTotalPriceValue").toString();

                    PackageOfferDTO packageOffer = PackageOfferDTO.builder()
                        .originCity(originCity)
                        .destinationCity(destinationCity)
                        .price(price)
                        .startDate(startDate)
                        .endDate(endDate)
                        .flightDealCarrierImageUrl(flightDealCarrierImageUrl)
                        .flightDealCarrierName(flightDealCarrierName)
                        .build();

                    extractedOffers.add(packageOffer);
                }
            }
        }

        return extractedOffers;
    }
}

