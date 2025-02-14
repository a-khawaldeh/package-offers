package com.nodex.package_offers.controller.api.v1;

import com.nodex.package_offers.dto.PackageOfferDTO;
import com.nodex.package_offers.service.PackageService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ApiController.API_BASE_PATH + "/package")
public class PackageController extends ApiController {

    private final PackageService packageService;

    public PackageController(PackageService packageService) {
        this.packageService = packageService;
    }

    @GetMapping("/search")
    public ResponseEntity<List<PackageOfferDTO>> searchPackages(
            @RequestParam String originCity,
            @RequestParam String destinationCity) {
        
        List<PackageOfferDTO> response = packageService.searchPackages(originCity, destinationCity);
        return ResponseEntity.ok(response);
    }
}

