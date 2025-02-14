package com.nodex.package_offers.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.nodex.package_offers.service.PackageService;
import com.nodex.package_offers.service.impl.ExpediaPackageService;

@Configuration
public class AppConfig {

    @Bean
    public PackageService packageService() {
        return new ExpediaPackageService();
    }
}
