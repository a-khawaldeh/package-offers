package com.nodex.package_offers.service;

import java.util.List;
import java.util.Map;

import com.nodex.package_offers.dto.PackageOfferDTO;

public abstract class PackageService {
    protected abstract Map<String, Object> findPackages(String originCity, String destinationCity);
    protected abstract List<PackageOfferDTO> extractOffers(Map<String, Object> response);

    public List<PackageOfferDTO> searchPackages(String originCity, String destinationCity) {
        return this.extractOffers(this.findPackages(originCity, destinationCity));
    }
}
