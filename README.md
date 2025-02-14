# Package Search App

A simple Spring Boot web application that allows users to search for package deals using the Expedia API. Users can specify an origin city and a destination city, and the application will display relevant package offers.

## Features

- **Search for Package Deals:** Users can enter an origin city and a destination city.
- **View Package Information:** Displays relevant details about each package such as:
  - Origin city
  - Destination city
  - Start and end date
  - Price
  - Flight carrier name
  - Flight carrier image
  
## Technologies Used

- **Backend:** Spring Boot (Java)
- **Frontend:** HTML, CSS, JavaScript (Bootstrap)
- **API:** Expedia API for package deals (with support for other services)
- **Database:** None (Using the Expedia API directly)
- **Version Control:** Git & GitHub

## Requirements

- Java 17 or higher
- Maven
- Spring Boot

## Getting Started

### 1. Clone the Repository, install dependencies and  run
To get started, clone this repository to your local machine:

```bash
git clone https://github.com/a-khawaldeh/package-offers.git

cd package-offers

mvn clean install

mvn spring-boot:run
```

### 2. Example API Request
You can test the API directly by making a GET request to the following endpoint:

```bash
GET http://localhost:8080/api/v1/package/search?originCity={originCity}&destinationCity={destinationCity}
```

For example:

```bash
GET http://localhost:8080/api/v1/package/search?originCity=Amman&destinationCity=Dubai
```


### 3. Frontend web page
just open ```index.html``` in your browser (not hosted yest)