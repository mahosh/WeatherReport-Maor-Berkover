
function reboot() {
  // setting a new session
  centerItems();
  if(!window.localStorage.favoriteCities) {
    window.localStorage.setItem('favoriteCities', '{}');
    window.localStorage.setItem('currentCity', 'Tel Aviv')
  }
  autocomplete(document.getElementById('searchCities'), namesX);
}
function centerItems(){
  let leftPositionOfSearchBar = (document.body.clientWidth - document.getElementById('searchBar').offsetWidth)/2;
  document.getElementById('searchBar').style.left=leftPositionOfSearchBar +"px";
  let leftPositionOfCityName = (document.getElementById('row1').offsetWidth - document.getElementById('cityName').offsetWidth)/2;
  document.getElementById('cityBlock').style.left=leftPositionOfCityName +"px";
}
function favoritesButton(){

}
function fehrenheitCelciusButton() {

}


const citiesList = [
    {   
        "Version": 1,
        "Key": "28143",
        "Type": "City",
        "Rank": 10,
        "LocalizedName": "Dhaka",
        "EnglishName": "Dhaka",
        "PrimaryPostalCode": "",
        "Region": {
        "ID": "ASI",
        "LocalizedName": "Asia",
        "EnglishName": "Asia"
        },
        "Country": {
        "ID": "BD",
        "LocalizedName": "Bangladesh",
        "EnglishName": "Bangladesh"
        },
        "AdministrativeArea": {
        "ID": "C",
        "LocalizedName": "Dhaka",
        "EnglishName": "Dhaka",
        "Level": 1,
        "LocalizedType": "Division",
        "EnglishType": "Division",
        "CountryID": "BD"
        },
        "TimeZone": {
        "Code": "BDT",
        "Name": "Asia/Dhaka",
        "GmtOffset": 6,
        "IsDaylightSaving": false,
        "NextOffsetChange": null
        },
        "GeoPosition": {
            "Latitude": 23.71,
            "Longitude": 90.407,
            "Elevation": {
                "Metric": {
                    "Value": 5,
                    "Unit": "m",
                    "UnitType": 5
                },
                "Imperial": {
                    "Value": 16,
                    "Unit": "ft",
                    "UnitType": 0
                }
            }
        },
        "IsAlias": false,
        "SupplementalAdminAreas": [],
        "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts"
        ]
  },
  {
    "Version": 1,
    "Key": "113487",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Kinshasa",
    "EnglishName": "Kinshasa",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "AFR",
      "LocalizedName": "Africa",
      "EnglishName": "Africa"
    },
    "Country": {
      "ID": "CD",
      "LocalizedName": "Democratic Republic of the Congo",
      "EnglishName": "Democratic Republic of the Congo"
    },
    "AdministrativeArea": {
      "ID": "KN",
      "LocalizedName": "Kinshasa",
      "EnglishName": "Kinshasa",
      "Level": 1,
      "LocalizedType": "City",
      "EnglishType": "City",
      "CountryID": "CD"
    },
    "TimeZone": {
      "Code": "WAT",
      "Name": "Africa/Kinshasa",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -4.316,
      "Longitude": 15.298,
      "Elevation": {
        "Metric": {
          "Value": 180,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 590,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "60449",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Santiago",
    "EnglishName": "Santiago",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "SAM",
      "LocalizedName": "South America",
      "EnglishName": "South America"
    },
    "Country": {
      "ID": "CL",
      "LocalizedName": "Chile",
      "EnglishName": "Chile"
    },
    "AdministrativeArea": {
      "ID": "RM",
      "LocalizedName": "Región Metropolitana de Santiago",
      "EnglishName": "Región Metropolitana de Santiago",
      "Level": 1,
      "LocalizedType": "Region",
      "EnglishType": "Region",
      "CountryID": "CL"
    },
    "TimeZone": {
      "Code": "CLST",
      "Name": "America/Santiago",
      "GmtOffset": -3,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-04-05T03:00:00Z"
    },
    "GeoPosition": {
      "Latitude": -33.446,
      "Longitude": -70.659,
      "Elevation": {
        "Metric": {
          "Value": 522,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 1712,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Santiago",
        "EnglishName": "Santiago"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "101924",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Beijing",
    "EnglishName": "Beijing",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "CN",
      "LocalizedName": "China",
      "EnglishName": "China"
    },
    "AdministrativeArea": {
      "ID": "BJ",
      "LocalizedName": "Beijing",
      "EnglishName": "Beijing",
      "Level": 1,
      "LocalizedType": "Municipality",
      "EnglishType": "Municipality",
      "CountryID": "CN"
    },
    "TimeZone": {
      "Code": "CST",
      "Name": "Asia/Shanghai",
      "GmtOffset": 8,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 39.917,
      "Longitude": 116.407,
      "Elevation": {
        "Metric": {
          "Value": 62,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 203,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQuality",
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyLocalIndices",
      "MinuteCast",
      "PremiumAirQuality"
    ]
  },
  {
    "Version": 1,
    "Key": "107487",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Bogota",
    "EnglishName": "Bogota",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "SAM",
      "LocalizedName": "South America",
      "EnglishName": "South America"
    },
    "Country": {
      "ID": "CO",
      "LocalizedName": "Colombia",
      "EnglishName": "Colombia"
    },
    "AdministrativeArea": {
      "ID": "DC",
      "LocalizedName": "Distrito Capital de Bogotá",
      "EnglishName": "Distrito Capital de Bogotá",
      "Level": 1,
      "LocalizedType": "Capital District",
      "EnglishType": "Capital District",
      "CountryID": "CO"
    },
    "TimeZone": {
      "Code": "COT",
      "Name": "America/Bogota",
      "GmtOffset": -5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 4.628,
      "Longitude": -74.077,
      "Elevation": {
        "Metric": {
          "Value": 2562,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 8406,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Santafe de Bogota",
        "EnglishName": "Santafe de Bogota"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "178087",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Berlin",
    "EnglishName": "Berlin",
    "PrimaryPostalCode": "10178",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "DE",
      "LocalizedName": "Germany",
      "EnglishName": "Germany"
    },
    "AdministrativeArea": {
      "ID": "BE",
      "LocalizedName": "Berlin",
      "EnglishName": "Berlin",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "DE"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Europe/Berlin",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 52.518,
      "Longitude": 13.406,
      "Elevation": {
        "Metric": {
          "Value": 35,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 114,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Berlin",
        "EnglishName": "Berlin"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "127164",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Cairo",
    "EnglishName": "Cairo",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "AFR",
      "LocalizedName": "Africa",
      "EnglishName": "Africa"
    },
    "Country": {
      "ID": "EG",
      "LocalizedName": "Egypt",
      "EnglishName": "Egypt"
    },
    "AdministrativeArea": {
      "ID": "C",
      "LocalizedName": "Cairo",
      "EnglishName": "Cairo",
      "Level": 1,
      "LocalizedType": "Governorate",
      "EnglishType": "Governorate",
      "CountryID": "EG"
    },
    "TimeZone": {
      "Code": "EET",
      "Name": "Africa/Cairo",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 30.084,
      "Longitude": 31.255,
      "Elevation": {
        "Metric": {
          "Value": 20,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 65,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "308526",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Madrid",
    "EnglishName": "Madrid",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "ES",
      "LocalizedName": "Spain",
      "EnglishName": "Spain"
    },
    "AdministrativeArea": {
      "ID": "MD",
      "LocalizedName": "Madrid",
      "EnglishName": "Madrid",
      "Level": 1,
      "LocalizedType": "Autonomous Community",
      "EnglishType": "Autonomous Community",
      "CountryID": "ES"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Europe/Madrid",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 40.41,
      "Longitude": -3.686,
      "Elevation": {
        "Metric": {
          "Value": 639,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 2095,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 3,
        "LocalizedName": "Madrid",
        "EnglishName": "Madrid"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "328328",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "London",
    "EnglishName": "London",
    "PrimaryPostalCode": "EC4A 2",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "GB",
      "LocalizedName": "United Kingdom",
      "EnglishName": "United Kingdom"
    },
    "AdministrativeArea": {
      "ID": "LND",
      "LocalizedName": "London",
      "EnglishName": "London",
      "Level": 1,
      "LocalizedType": "London Borough",
      "EnglishType": "London Borough",
      "CountryID": "GB"
    },
    "TimeZone": {
      "Code": "GMT",
      "Name": "Europe/London",
      "GmtOffset": 0,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 51.514,
      "Longitude": -0.107,
      "Elevation": {
        "Metric": {
          "Value": 18,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 59,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 0,
        "LocalizedName": "England",
        "EnglishName": "England"
      },
      {
        "Level": 3,
        "LocalizedName": "Castle Baynard",
        "EnglishName": "Castle Baynard"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "182536",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Athens",
    "EnglishName": "Athens",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "GR",
      "LocalizedName": "Greece",
      "EnglishName": "Greece"
    },
    "AdministrativeArea": {
      "ID": "I",
      "LocalizedName": "Attica",
      "EnglishName": "Attica",
      "Level": 1,
      "LocalizedType": "Region",
      "EnglishType": "Region",
      "CountryID": "GR"
    },
    "TimeZone": {
      "Code": "EET",
      "Name": "Europe/Athens",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 37.984,
      "Longitude": 23.728,
      "Elevation": {
        "Metric": {
          "Value": 126,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 413,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Athens",
        "EnglishName": "Athens"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence"
    ]
  },
  {
    "Version": 1,
    "Key": "1123655",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Hong Kong",
    "EnglishName": "Hong Kong",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "HK",
      "LocalizedName": "Hong Kong",
      "EnglishName": "Hong Kong"
    },
    "AdministrativeArea": {
      "ID": "CW",
      "LocalizedName": "Central and Western",
      "EnglishName": "Central and Western",
      "Level": 1,
      "LocalizedType": "District",
      "EnglishType": "District",
      "CountryID": "HK"
    },
    "TimeZone": {
      "Code": "CST",
      "Name": "Asia/Hong_Kong",
      "GmtOffset": 8,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 22.369,
      "Longitude": 114.174,
      "Elevation": {
        "Metric": {
          "Value": 35,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 114,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQuality",
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "MinuteCast",
      "PremiumAirQuality"
    ]
  },
  {
    "Version": 1,
    "Key": "208971",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Jakarta",
    "EnglishName": "Jakarta",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "ID",
      "LocalizedName": "Indonesia",
      "EnglishName": "Indonesia"
    },
    "AdministrativeArea": {
      "ID": "JK",
      "LocalizedName": "Jakarta",
      "EnglishName": "Jakarta",
      "Level": 1,
      "LocalizedType": "Capital District",
      "EnglishType": "Capital District",
      "CountryID": "ID"
    },
    "TimeZone": {
      "Code": "WIT",
      "Name": "Asia/Jakarta",
      "GmtOffset": 7,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -6.175,
      "Longitude": 106.827,
      "Elevation": {
        "Metric": {
          "Value": 11,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 35,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Jakarta Pusat",
        "EnglishName": "Jakarta Pusat"
      },
      {
        "Level": 3,
        "LocalizedName": "Gambir",
        "EnglishName": "Gambir"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "202396",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Delhi",
    "EnglishName": "Delhi",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "IN",
      "LocalizedName": "India",
      "EnglishName": "India"
    },
    "AdministrativeArea": {
      "ID": "DL",
      "LocalizedName": "Delhi",
      "EnglishName": "Delhi",
      "Level": 1,
      "LocalizedType": "Union Territory",
      "EnglishType": "Union Territory",
      "CountryID": "IN"
    },
    "TimeZone": {
      "Code": "IST",
      "Name": "Asia/Kolkata",
      "GmtOffset": 5.5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 28.643,
      "Longitude": 77.118,
      "Elevation": {
        "Metric": {
          "Value": 215,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 705,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQuality",
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "PremiumAirQuality"
    ]
  },
  {
    "Version": 1,
    "Key": "207375",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Baghdad",
    "EnglishName": "Baghdad",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "MEA",
      "LocalizedName": "Middle East",
      "EnglishName": "Middle East"
    },
    "Country": {
      "ID": "IQ",
      "LocalizedName": "Iraq",
      "EnglishName": "Iraq"
    },
    "AdministrativeArea": {
      "ID": "BG",
      "LocalizedName": "Baghdad",
      "EnglishName": "Baghdad",
      "Level": 1,
      "LocalizedType": "Governorate",
      "EnglishType": "Governorate",
      "CountryID": "IQ"
    },
    "TimeZone": {
      "Code": "AST",
      "Name": "Asia/Baghdad",
      "GmtOffset": 3,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 33.328,
      "Longitude": 44.386,
      "Elevation": {
        "Metric": {
          "Value": 35,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 114,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "226396",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Tokyo",
    "EnglishName": "Tokyo",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "JP",
      "LocalizedName": "Japan",
      "EnglishName": "Japan"
    },
    "AdministrativeArea": {
      "ID": "13",
      "LocalizedName": "Tokyo",
      "EnglishName": "Tokyo",
      "Level": 1,
      "LocalizedType": "Prefecture",
      "EnglishType": "Prefecture",
      "CountryID": "JP"
    },
    "TimeZone": {
      "Code": "JST",
      "Name": "Asia/Tokyo",
      "GmtOffset": 9,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 35.683,
      "Longitude": 139.809,
      "Elevation": {
        "Metric": {
          "Value": 1,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 3,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "225058",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Pyongyang",
    "EnglishName": "Pyongyang",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "KP",
      "LocalizedName": "North Korea",
      "EnglishName": "North Korea"
    },
    "AdministrativeArea": {
      "ID": "01",
      "LocalizedName": "Pyongyang",
      "EnglishName": "Pyongyang",
      "Level": 1,
      "LocalizedType": "Capital City",
      "EnglishType": "Capital City",
      "CountryID": "KP"
    },
    "TimeZone": {
      "Code": "KST",
      "Name": "Asia/Pyongyang",
      "GmtOffset": 9,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 39.014,
      "Longitude": 125.776,
      "Elevation": {
        "Metric": {
          "Value": 12,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 39,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "MinuteCast"
    ]
  },
  {
    "Version": 1,
    "Key": "226081",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Seoul",
    "EnglishName": "Seoul",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "KR",
      "LocalizedName": "South Korea",
      "EnglishName": "South Korea"
    },
    "AdministrativeArea": {
      "ID": "11",
      "LocalizedName": "Seoul",
      "EnglishName": "Seoul",
      "Level": 1,
      "LocalizedType": "Special City",
      "EnglishType": "Special City",
      "CountryID": "KR"
    },
    "TimeZone": {
      "Code": "KST",
      "Name": "Asia/Seoul",
      "GmtOffset": 9,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 37.537,
      "Longitude": 126.97,
      "Elevation": {
        "Metric": {
          "Value": 19,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 62,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQuality",
      "AirQuality-Regional",
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyLocalIndices",
      "HourlyLocalIndices",
      "MinuteCast",
      "PremiumAirQuality",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "242560",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Mexico City",
    "EnglishName": "Mexico City",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "NAM",
      "LocalizedName": "North America",
      "EnglishName": "North America"
    },
    "Country": {
      "ID": "MX",
      "LocalizedName": "Mexico",
      "EnglishName": "Mexico"
    },
    "AdministrativeArea": {
      "ID": "CMX",
      "LocalizedName": "México City",
      "EnglishName": "México City",
      "Level": 1,
      "LocalizedType": "Federal District",
      "EnglishType": "Federal District",
      "CountryID": "MX"
    },
    "TimeZone": {
      "Code": "CST",
      "Name": "America/Mexico_City",
      "GmtOffset": -6,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-04-05T08:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 19.433,
      "Longitude": -99.133,
      "Elevation": {
        "Metric": {
          "Value": 2242,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 7357,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "264120",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Lima",
    "EnglishName": "Lima",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "SAM",
      "LocalizedName": "South America",
      "EnglishName": "South America"
    },
    "Country": {
      "ID": "PE",
      "LocalizedName": "Peru",
      "EnglishName": "Peru"
    },
    "AdministrativeArea": {
      "ID": "LMA",
      "LocalizedName": "Lima",
      "EnglishName": "Lima",
      "Level": 1,
      "LocalizedType": "Municipality",
      "EnglishType": "Municipality",
      "CountryID": "PE"
    },
    "TimeZone": {
      "Code": "PET",
      "Name": "America/Lima",
      "GmtOffset": -5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -12.082,
      "Longitude": -77.045,
      "Elevation": {
        "Metric": {
          "Value": 105,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 344,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "294021",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Moscow",
    "EnglishName": "Moscow",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "RU",
      "LocalizedName": "Russia",
      "EnglishName": "Russia"
    },
    "AdministrativeArea": {
      "ID": "MOW",
      "LocalizedName": "Moscow",
      "EnglishName": "Moscow",
      "Level": 1,
      "LocalizedType": "Federal City",
      "EnglishType": "Federal City",
      "CountryID": "RU"
    },
    "TimeZone": {
      "Code": "MSK",
      "Name": "Europe/Moscow",
      "GmtOffset": 3,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 55.752,
      "Longitude": 37.619,
      "Elevation": {
        "Metric": {
          "Value": 155,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 508,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Tsentralny",
        "EnglishName": "Tsentralny"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts"
    ]
  },
  {
    "Version": 1,
    "Key": "297030",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Riyadh",
    "EnglishName": "Riyadh",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "MEA",
      "LocalizedName": "Middle East",
      "EnglishName": "Middle East"
    },
    "Country": {
      "ID": "SA",
      "LocalizedName": "Saudi Arabia",
      "EnglishName": "Saudi Arabia"
    },
    "AdministrativeArea": {
      "ID": "01",
      "LocalizedName": "Ar Riyāḑ",
      "EnglishName": "Ar Riyāḑ",
      "Level": 1,
      "LocalizedType": "Region",
      "EnglishType": "Region",
      "CountryID": "SA"
    },
    "TimeZone": {
      "Code": "AST",
      "Name": "Asia/Riyadh",
      "GmtOffset": 3,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 24.64,
      "Longitude": 46.753,
      "Elevation": {
        "Metric": {
          "Value": 598,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 1961,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "300597",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Singapore",
    "EnglishName": "Singapore",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "SG",
      "LocalizedName": "Singapore",
      "EnglishName": "Singapore"
    },
    "AdministrativeArea": {
      "ID": "01",
      "LocalizedName": "Central Singapore",
      "EnglishName": "Central Singapore",
      "Level": 1,
      "LocalizedType": "District",
      "EnglishType": "District",
      "CountryID": "SG"
    },
    "TimeZone": {
      "Code": "SGT",
      "Name": "Asia/Singapore",
      "GmtOffset": 8,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 1.311,
      "Longitude": 103.843,
      "Elevation": {
        "Metric": {
          "Value": 13,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 42,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "318849",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Bangkok",
    "EnglishName": "Bangkok",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "TH",
      "LocalizedName": "Thailand",
      "EnglishName": "Thailand"
    },
    "AdministrativeArea": {
      "ID": "10",
      "LocalizedName": "Bangkok",
      "EnglishName": "Bangkok",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "TH"
    },
    "TimeZone": {
      "Code": "ICT",
      "Name": "Asia/Bangkok",
      "GmtOffset": 7,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 13.731,
      "Longitude": 100.521,
      "Elevation": {
        "Metric": {
          "Value": 2,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 6,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "353412",
    "Type": "City",
    "Rank": 10,
    "LocalizedName": "Hanoi",
    "EnglishName": "Hanoi",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "VN",
      "LocalizedName": "Vietnam",
      "EnglishName": "Vietnam"
    },
    "AdministrativeArea": {
      "ID": "HN",
      "LocalizedName": "Hanoi",
      "EnglishName": "Hanoi",
      "Level": 1,
      "LocalizedType": "Municipality",
      "EnglishType": "Municipality",
      "CountryID": "VN"
    },
    "TimeZone": {
      "Code": "ICT",
      "Name": "Asia/Ho_Chi_Minh",
      "GmtOffset": 7,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 20.999,
      "Longitude": 105.7,
      "Elevation": {
        "Metric": {
          "Value": 19,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 62,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "22889",
    "Type": "City",
    "Rank": 11,
    "LocalizedName": "Sydney",
    "EnglishName": "Sydney",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "OCN",
      "LocalizedName": "Oceania",
      "EnglishName": "Oceania"
    },
    "Country": {
      "ID": "AU",
      "LocalizedName": "Australia",
      "EnglishName": "Australia"
    },
    "AdministrativeArea": {
      "ID": "NSW",
      "LocalizedName": "New South Wales",
      "EnglishName": "New South Wales",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "AU"
    },
    "TimeZone": {
      "Code": "AEDT",
      "Name": "Australia/Sydney",
      "GmtOffset": 11,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-04-04T16:00:00Z"
    },
    "GeoPosition": {
      "Latitude": -33.87,
      "Longitude": 151.209,
      "Elevation": {
        "Metric": {
          "Value": 1,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 3,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "26216",
    "Type": "City",
    "Rank": 11,
    "LocalizedName": "Melbourne",
    "EnglishName": "Melbourne",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "OCN",
      "LocalizedName": "Oceania",
      "EnglishName": "Oceania"
    },
    "Country": {
      "ID": "AU",
      "LocalizedName": "Australia",
      "EnglishName": "Australia"
    },
    "AdministrativeArea": {
      "ID": "VIC",
      "LocalizedName": "Victoria",
      "EnglishName": "Victoria",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "AU"
    },
    "TimeZone": {
      "Code": "AEDT",
      "Name": "Australia/Melbourne",
      "GmtOffset": 11,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-04-04T16:00:00Z"
    },
    "GeoPosition": {
      "Latitude": -37.812,
      "Longitude": 144.967,
      "Elevation": {
        "Metric": {
          "Value": 75,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 246,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "45449",
    "Type": "City",
    "Rank": 11,
    "LocalizedName": "Rio de Janeiro",
    "EnglishName": "Rio de Janeiro",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "SAM",
      "LocalizedName": "South America",
      "EnglishName": "South America"
    },
    "Country": {
      "ID": "BR",
      "LocalizedName": "Brazil",
      "EnglishName": "Brazil"
    },
    "AdministrativeArea": {
      "ID": "RJ",
      "LocalizedName": "Rio De Janeiro",
      "EnglishName": "Rio De Janeiro",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "BR"
    },
    "TimeZone": {
      "Code": "BRT",
      "Name": "America/Sao_Paulo",
      "GmtOffset": -3,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -22.877,
      "Longitude": -43.228,
      "Elevation": {
        "Metric": {
          "Value": 1,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 3,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Rio de Janeiro",
        "EnglishName": "Rio de Janeiro"
      },
      {
        "Level": 3,
        "LocalizedName": "Rio de Janeiro",
        "EnglishName": "Rio de Janeiro"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts"
    ]
  },
  {
    "Version": 1,
    "Key": "106577",
    "Type": "City",
    "Rank": 11,
    "LocalizedName": "Shanghai",
    "EnglishName": "Shanghai",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "CN",
      "LocalizedName": "China",
      "EnglishName": "China"
    },
    "AdministrativeArea": {
      "ID": "SH",
      "LocalizedName": "Shanghai",
      "EnglishName": "Shanghai",
      "Level": 1,
      "LocalizedType": "Municipality",
      "EnglishType": "Municipality",
      "CountryID": "CN"
    },
    "TimeZone": {
      "Code": "CST",
      "Name": "Asia/Shanghai",
      "GmtOffset": 8,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 31.232,
      "Longitude": 121.444,
      "Elevation": {
        "Metric": {
          "Value": 5,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 16,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQuality",
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyLocalIndices",
      "MinuteCast",
      "PremiumAirQuality"
    ]
  },
  {
    "Version": 1,
    "Key": "204108",
    "Type": "City",
    "Rank": 11,
    "LocalizedName": "Bengaluru",
    "EnglishName": "Bengaluru",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "IN",
      "LocalizedName": "India",
      "EnglishName": "India"
    },
    "AdministrativeArea": {
      "ID": "KA",
      "LocalizedName": "Karnataka",
      "EnglishName": "Karnataka",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "IN"
    },
    "TimeZone": {
      "Code": "IST",
      "Name": "Asia/Kolkata",
      "GmtOffset": 5.5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 12.991,
      "Longitude": 77.579,
      "Elevation": {
        "Metric": {
          "Value": 913,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 2997,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Bangalore",
        "EnglishName": "Bangalore"
      }
    ],
    "DataSets": [
      "AirQuality",
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "PremiumAirQuality"
    ]
  },
  {
    "Version": 1,
    "Key": "204842",
    "Type": "City",
    "Rank": 11,
    "LocalizedName": "Mumbai",
    "EnglishName": "Mumbai",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "IN",
      "LocalizedName": "India",
      "EnglishName": "India"
    },
    "AdministrativeArea": {
      "ID": "MH",
      "LocalizedName": "Maharashtra",
      "EnglishName": "Maharashtra",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "IN"
    },
    "TimeZone": {
      "Code": "IST",
      "Name": "Asia/Kolkata",
      "GmtOffset": 5.5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 19.143,
      "Longitude": 72.878,
      "Elevation": {
        "Metric": {
          "Value": 47,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 154,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Mumbai Suburban",
        "EnglishName": "Mumbai Suburban"
      }
    ],
    "DataSets": [
      "AirQuality",
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "PremiumAirQuality"
    ]
  },
  {
    "Version": 1,
    "Key": "206671",
    "Type": "City",
    "Rank": 11,
    "LocalizedName": "Chennai",
    "EnglishName": "Chennai",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "IN",
      "LocalizedName": "India",
      "EnglishName": "India"
    },
    "AdministrativeArea": {
      "ID": "TN",
      "LocalizedName": "Tamil Nadu",
      "EnglishName": "Tamil Nadu",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "IN"
    },
    "TimeZone": {
      "Code": "IST",
      "Name": "Asia/Kolkata",
      "GmtOffset": 5.5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 13.038,
      "Longitude": 80.245,
      "Elevation": {
        "Metric": {
          "Value": 17,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 55,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Chennai",
        "EnglishName": "Chennai"
      }
    ],
    "DataSets": [
      "AirQuality",
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "PremiumAirQuality"
    ]
  },
  {
    "Version": 1,
    "Key": "206690",
    "Type": "City",
    "Rank": 11,
    "LocalizedName": "Kolkata",
    "EnglishName": "Kolkata",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "IN",
      "LocalizedName": "India",
      "EnglishName": "India"
    },
    "AdministrativeArea": {
      "ID": "WB",
      "LocalizedName": "West Bengal",
      "EnglishName": "West Bengal",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "IN"
    },
    "TimeZone": {
      "Code": "IST",
      "Name": "Asia/Kolkata",
      "GmtOffset": 5.5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 22.526,
      "Longitude": 88.353,
      "Elevation": {
        "Metric": {
          "Value": 16,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 52,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Kolkata",
        "EnglishName": "Kolkata"
      }
    ],
    "DataSets": [
      "AirQuality",
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "PremiumAirQuality"
    ]
  },
  {
    "Version": 1,
    "Key": "222888",
    "Type": "City",
    "Rank": 11,
    "LocalizedName": "Busan",
    "EnglishName": "Busan",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "KR",
      "LocalizedName": "South Korea",
      "EnglishName": "South Korea"
    },
    "AdministrativeArea": {
      "ID": "26",
      "LocalizedName": "Busan",
      "EnglishName": "Busan",
      "Level": 1,
      "LocalizedType": "Metropolitan City",
      "EnglishType": "Metropolitan City",
      "CountryID": "KR"
    },
    "TimeZone": {
      "Code": "KST",
      "Name": "Asia/Seoul",
      "GmtOffset": 9,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 35.215,
      "Longitude": 129.101,
      "Elevation": {
        "Metric": {
          "Value": 31,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 101,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQuality",
      "AirQuality-Regional",
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyLocalIndices",
      "HourlyLocalIndices",
      "MinuteCast",
      "PremiumAirQuality",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "246562",
    "Type": "City",
    "Rank": 11,
    "LocalizedName": "Yangon",
    "EnglishName": "Yangon",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "MM",
      "LocalizedName": "Myanmar",
      "EnglishName": "Myanmar"
    },
    "AdministrativeArea": {
      "ID": "06",
      "LocalizedName": "Yangon",
      "EnglishName": "Yangon",
      "Level": 1,
      "LocalizedType": "Region",
      "EnglishType": "Region",
      "CountryID": "MM"
    },
    "TimeZone": {
      "Code": "MMT",
      "Name": "Asia/Rangoon",
      "GmtOffset": 6.5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 16.798,
      "Longitude": 96.15,
      "Elevation": {
        "Metric": {
          "Value": 12,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 39,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "261158",
    "Type": "City",
    "Rank": 11,
    "LocalizedName": "Karachi",
    "EnglishName": "Karachi",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "PK",
      "LocalizedName": "Pakistan",
      "EnglishName": "Pakistan"
    },
    "AdministrativeArea": {
      "ID": "SD",
      "LocalizedName": "Sindh",
      "EnglishName": "Sindh",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "PK"
    },
    "TimeZone": {
      "Code": "PKT",
      "Name": "Asia/Karachi",
      "GmtOffset": 5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 24.89,
      "Longitude": 67.029,
      "Elevation": {
        "Metric": {
          "Value": 11,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 36,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Karachi Central",
        "EnglishName": "Karachi Central"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "295212",
    "Type": "City",
    "Rank": 11,
    "LocalizedName": "Saint Petersburg",
    "EnglishName": "Saint Petersburg",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "RU",
      "LocalizedName": "Russia",
      "EnglishName": "Russia"
    },
    "AdministrativeArea": {
      "ID": "SPE",
      "LocalizedName": "Saint Petersburg",
      "EnglishName": "Saint Petersburg",
      "Level": 1,
      "LocalizedType": "Federal City",
      "EnglishType": "Federal City",
      "CountryID": "RU"
    },
    "TimeZone": {
      "Code": "MSK",
      "Name": "Europe/Moscow",
      "GmtOffset": 3,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 59.939,
      "Longitude": 30.315,
      "Elevation": {
        "Metric": {
          "Value": 10,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 32,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Tsentralny",
        "EnglishName": "Tsentralny"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "318251",
    "Type": "City",
    "Rank": 11,
    "LocalizedName": "Istanbul",
    "EnglishName": "Istanbul",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "MEA",
      "LocalizedName": "Middle East",
      "EnglishName": "Middle East"
    },
    "Country": {
      "ID": "TR",
      "LocalizedName": "Turkey",
      "EnglishName": "Turkey"
    },
    "AdministrativeArea": {
      "ID": "34",
      "LocalizedName": "Istanbul",
      "EnglishName": "Istanbul",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "TR"
    },
    "TimeZone": {
      "Code": "TRT",
      "Name": "Europe/Istanbul",
      "GmtOffset": 3,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 41.011,
      "Longitude": 28.958,
      "Elevation": {
        "Metric": {
          "Value": 48,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 157,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Fatih",
        "EnglishName": "Fatih"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "353981",
    "Type": "City",
    "Rank": 11,
    "LocalizedName": "Ho Chi Minh City",
    "EnglishName": "Ho Chi Minh City",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "VN",
      "LocalizedName": "Vietnam",
      "EnglishName": "Vietnam"
    },
    "AdministrativeArea": {
      "ID": "SG",
      "LocalizedName": "Ho Chi Minh",
      "EnglishName": "Ho Chi Minh",
      "Level": 1,
      "LocalizedType": "Municipality",
      "EnglishType": "Municipality",
      "CountryID": "VN"
    },
    "TimeZone": {
      "Code": "ICT",
      "Name": "Asia/Ho_Chi_Minh",
      "GmtOffset": 7,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 10.775,
      "Longitude": 106.702,
      "Elevation": {
        "Metric": {
          "Value": 7,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 22,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "305448",
    "Type": "City",
    "Rank": 11,
    "LocalizedName": "Johannesburg",
    "EnglishName": "Johannesburg",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "AFR",
      "LocalizedName": "Africa",
      "EnglishName": "Africa"
    },
    "Country": {
      "ID": "ZA",
      "LocalizedName": "South Africa",
      "EnglishName": "South Africa"
    },
    "AdministrativeArea": {
      "ID": "GT",
      "LocalizedName": "Gauteng",
      "EnglishName": "Gauteng",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "ZA"
    },
    "TimeZone": {
      "Code": "SAST",
      "Name": "Africa/Johannesburg",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -26.179,
      "Longitude": 28.004,
      "Elevation": {
        "Metric": {
          "Value": 1665,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 5464,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "City Of Johannesburg",
        "EnglishName": "City Of Johannesburg"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "4607",
    "Type": "City",
    "Rank": 15,
    "LocalizedName": "Lagos",
    "EnglishName": "Lagos",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "AFR",
      "LocalizedName": "Africa",
      "EnglishName": "Africa"
    },
    "Country": {
      "ID": "NG",
      "LocalizedName": "Nigeria",
      "EnglishName": "Nigeria"
    },
    "AdministrativeArea": {
      "ID": "LA",
      "LocalizedName": "Lagos",
      "EnglishName": "Lagos",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "NG"
    },
    "TimeZone": {
      "Code": "WAT",
      "Name": "Africa/Lagos",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 6.45,
      "Longitude": 3.428,
      "Elevation": {
        "Metric": {
          "Value": 36,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 118,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "347625",
    "Type": "City",
    "Rank": 15,
    "LocalizedName": "Los Angeles",
    "EnglishName": "Los Angeles",
    "PrimaryPostalCode": "90012",
    "Region": {
      "ID": "NAM",
      "LocalizedName": "North America",
      "EnglishName": "North America"
    },
    "Country": {
      "ID": "US",
      "LocalizedName": "United States",
      "EnglishName": "United States"
    },
    "AdministrativeArea": {
      "ID": "CA",
      "LocalizedName": "California",
      "EnglishName": "California",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "US"
    },
    "TimeZone": {
      "Code": "PDT",
      "Name": "America/Los_Angeles",
      "GmtOffset": -7,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-11-01T09:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 34.052,
      "Longitude": -118.244,
      "Elevation": {
        "Metric": {
          "Value": 121,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 396,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Los Angeles",
        "EnglishName": "Los Angeles"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyPollenForecast",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "349727",
    "Type": "City",
    "Rank": 15,
    "LocalizedName": "New York",
    "EnglishName": "New York",
    "PrimaryPostalCode": "10007",
    "Region": {
      "ID": "NAM",
      "LocalizedName": "North America",
      "EnglishName": "North America"
    },
    "Country": {
      "ID": "US",
      "LocalizedName": "United States",
      "EnglishName": "United States"
    },
    "AdministrativeArea": {
      "ID": "NY",
      "LocalizedName": "New York",
      "EnglishName": "New York",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "US"
    },
    "TimeZone": {
      "Code": "EDT",
      "Name": "America/New_York",
      "GmtOffset": -4,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-11-01T06:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 40.779,
      "Longitude": -73.969,
      "Elevation": {
        "Metric": {
          "Value": 8,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 26,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "New York",
        "EnglishName": "New York"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyPollenForecast",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "4361",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Kabul",
    "EnglishName": "Kabul",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "AF",
      "LocalizedName": "Afghanistan",
      "EnglishName": "Afghanistan"
    },
    "AdministrativeArea": {
      "ID": "KAB",
      "LocalizedName": "Kabul",
      "EnglishName": "Kabul",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "AF"
    },
    "TimeZone": {
      "Code": "AFT",
      "Name": "Asia/Kabul",
      "GmtOffset": 4.5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 34.531,
      "Longitude": 69.137,
      "Elevation": {
        "Metric": {
          "Value": 1838,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 6031,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Kabul",
        "EnglishName": "Kabul"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "16890",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Yerevan",
    "EnglishName": "Yerevan",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "AM",
      "LocalizedName": "Armenia",
      "EnglishName": "Armenia"
    },
    "AdministrativeArea": {
      "ID": "ER",
      "LocalizedName": "Yerevan",
      "EnglishName": "Yerevan",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "AM"
    },
    "TimeZone": {
      "Code": "AMT",
      "Name": "Asia/Yerevan",
      "GmtOffset": 4,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 40.208,
      "Longitude": 44.533,
      "Elevation": {
        "Metric": {
          "Value": 1211,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 3972,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "4651",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Luanda",
    "EnglishName": "Luanda",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "AFR",
      "LocalizedName": "Africa",
      "EnglishName": "Africa"
    },
    "Country": {
      "ID": "AO",
      "LocalizedName": "Angola",
      "EnglishName": "Angola"
    },
    "AdministrativeArea": {
      "ID": "LUA",
      "LocalizedName": "Luanda",
      "EnglishName": "Luanda",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "AO"
    },
    "TimeZone": {
      "Code": "WAT",
      "Name": "Africa/Luanda",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -8.812,
      "Longitude": 13.235,
      "Elevation": {
        "Metric": {
          "Value": 1,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 3,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "7894",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Buenos Aires",
    "EnglishName": "Buenos Aires",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "SAM",
      "LocalizedName": "South America",
      "EnglishName": "South America"
    },
    "Country": {
      "ID": "AR",
      "LocalizedName": "Argentina",
      "EnglishName": "Argentina"
    },
    "AdministrativeArea": {
      "ID": "C",
      "LocalizedName": "Buenos Aires - Capital Federal",
      "EnglishName": "Buenos Aires - Capital Federal",
      "Level": 1,
      "LocalizedType": "Autonomous City",
      "EnglishType": "Autonomous City",
      "CountryID": "AR"
    },
    "TimeZone": {
      "Code": "ART",
      "Name": "America/Argentina/Buenos_Aires",
      "GmtOffset": -3,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -34.608,
      "Longitude": -58.437,
      "Elevation": {
        "Metric": {
          "Value": 19,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 62,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "5",
        "EnglishName": "5"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "31868",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Vienna",
    "EnglishName": "Vienna",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "AT",
      "LocalizedName": "Austria",
      "EnglishName": "Austria"
    },
    "AdministrativeArea": {
      "ID": "9",
      "LocalizedName": "Vienna",
      "EnglishName": "Vienna",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "AT"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Europe/Vienna",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 48.208,
      "Longitude": 16.372,
      "Elevation": {
        "Metric": {
          "Value": 163,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 534,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Vienna",
        "EnglishName": "Vienna"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "51097",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Sofia",
    "EnglishName": "Sofia",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "BG",
      "LocalizedName": "Bulgaria",
      "EnglishName": "Bulgaria"
    },
    "AdministrativeArea": {
      "ID": "22",
      "LocalizedName": "Sofia City",
      "EnglishName": "Sofia City",
      "Level": 1,
      "LocalizedType": "District",
      "EnglishType": "District",
      "CountryID": "BG"
    },
    "TimeZone": {
      "Code": "EET",
      "Name": "Europe/Sofia",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 42.686,
      "Longitude": 23.337,
      "Elevation": {
        "Metric": {
          "Value": 565,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 1853,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "43348",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Brasília",
    "EnglishName": "Brasília",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "SAM",
      "LocalizedName": "South America",
      "EnglishName": "South America"
    },
    "Country": {
      "ID": "BR",
      "LocalizedName": "Brazil",
      "EnglishName": "Brazil"
    },
    "AdministrativeArea": {
      "ID": "DF",
      "LocalizedName": "Distrito Federal",
      "EnglishName": "Distrito Federal",
      "Level": 1,
      "LocalizedType": "Federal District",
      "EnglishType": "Federal District",
      "CountryID": "BR"
    },
    "TimeZone": {
      "Code": "BRT",
      "Name": "America/Sao_Paulo",
      "GmtOffset": -3,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -15.794,
      "Longitude": -47.888,
      "Elevation": {
        "Metric": {
          "Value": 1066,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 3499,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Brasília",
        "EnglishName": "Brasília"
      },
      {
        "Level": 3,
        "LocalizedName": "Brasília",
        "EnglishName": "Brasília"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts"
    ]
  },
  {
    "Version": 1,
    "Key": "28580",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Minsk",
    "EnglishName": "Minsk",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "BY",
      "LocalizedName": "Belarus",
      "EnglishName": "Belarus"
    },
    "AdministrativeArea": {
      "ID": "HM",
      "LocalizedName": "Minsk City",
      "EnglishName": "Minsk City",
      "Level": 1,
      "LocalizedType": "Municipality",
      "EnglishType": "Municipality",
      "CountryID": "BY"
    },
    "TimeZone": {
      "Code": "MSK",
      "Name": "Europe/Minsk",
      "GmtOffset": 3,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 53.9,
      "Longitude": 27.576,
      "Elevation": {
        "Metric": {
          "Value": 213,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 698,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "ForecastConfidence"
    ]
  },
  {
    "Version": 1,
    "Key": "55487",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Ottawa",
    "EnglishName": "Ottawa",
    "PrimaryPostalCode": "K1P",
    "Region": {
      "ID": "NAM",
      "LocalizedName": "North America",
      "EnglishName": "North America"
    },
    "Country": {
      "ID": "CA",
      "LocalizedName": "Canada",
      "EnglishName": "Canada"
    },
    "AdministrativeArea": {
      "ID": "ON",
      "LocalizedName": "Ontario",
      "EnglishName": "Ontario",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "CA"
    },
    "TimeZone": {
      "Code": "EDT",
      "Name": "America/Toronto",
      "GmtOffset": -4,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-11-01T06:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 45.422,
      "Longitude": -75.702,
      "Elevation": {
        "Metric": {
          "Value": 36,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 118,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Ottawa",
        "EnglishName": "Ottawa"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "122438",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Havana",
    "EnglishName": "Havana",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "CAC",
      "LocalizedName": "Central America",
      "EnglishName": "Central America"
    },
    "Country": {
      "ID": "CU",
      "LocalizedName": "Cuba",
      "EnglishName": "Cuba"
    },
    "AdministrativeArea": {
      "ID": "03",
      "LocalizedName": "La Habana",
      "EnglishName": "La Habana",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "CU"
    },
    "TimeZone": {
      "Code": "CDT",
      "Name": "America/Havana",
      "GmtOffset": -4,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-11-01T05:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 23.117,
      "Longitude": -82.389,
      "Elevation": {
        "Metric": {
          "Value": 35,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 114,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Plaza de la Revolucion",
        "EnglishName": "Plaza de la Revolucion"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "125594",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Prague",
    "EnglishName": "Prague",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "CZ",
      "LocalizedName": "Czechia",
      "EnglishName": "Czechia"
    },
    "AdministrativeArea": {
      "ID": "10",
      "LocalizedName": "Prague",
      "EnglishName": "Prague",
      "Level": 1,
      "LocalizedType": "Capital City",
      "EnglishType": "Capital City",
      "CountryID": "CZ"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Europe/Prague",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 50.088,
      "Longitude": 14.421,
      "Elevation": {
        "Metric": {
          "Value": 197,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 647,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Praha",
        "EnglishName": "Praha"
      },
      {
        "Level": 3,
        "LocalizedName": "Praha",
        "EnglishName": "Praha"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "125887",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Santo Domingo",
    "EnglishName": "Santo Domingo",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "CAC",
      "LocalizedName": "Central America",
      "EnglishName": "Central America"
    },
    "Country": {
      "ID": "DO",
      "LocalizedName": "Dominican Republic",
      "EnglishName": "Dominican Republic"
    },
    "AdministrativeArea": {
      "ID": "32",
      "LocalizedName": "Santo Domingo",
      "EnglishName": "Santo Domingo",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "DO"
    },
    "TimeZone": {
      "Code": "AST",
      "Name": "America/Santo_Domingo",
      "GmtOffset": -4,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 18.487,
      "Longitude": -69.94,
      "Elevation": {
        "Metric": {
          "Value": 43,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 141,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "2093",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Algiers",
    "EnglishName": "Algiers",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "AFR",
      "LocalizedName": "Africa",
      "EnglishName": "Africa"
    },
    "Country": {
      "ID": "DZ",
      "LocalizedName": "Algeria",
      "EnglishName": "Algeria"
    },
    "AdministrativeArea": {
      "ID": "16",
      "LocalizedName": "Alger",
      "EnglishName": "Alger",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "DZ"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Africa/Algiers",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 36.766,
      "Longitude": 3.032,
      "Elevation": {
        "Metric": {
          "Value": 239,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 783,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "129846",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Quito",
    "EnglishName": "Quito",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "SAM",
      "LocalizedName": "South America",
      "EnglishName": "South America"
    },
    "Country": {
      "ID": "EC",
      "LocalizedName": "Ecuador",
      "EnglishName": "Ecuador"
    },
    "AdministrativeArea": {
      "ID": "P",
      "LocalizedName": "Pichincha",
      "EnglishName": "Pichincha",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "EC"
    },
    "TimeZone": {
      "Code": "ECT",
      "Name": "America/Guayaquil",
      "GmtOffset": -5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -0.229,
      "Longitude": -78.524,
      "Elevation": {
        "Metric": {
          "Value": 2771,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 9092,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Quito",
        "EnglishName": "Quito"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "623",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Paris",
    "EnglishName": "Paris",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "FR",
      "LocalizedName": "France",
      "EnglishName": "France"
    },
    "AdministrativeArea": {
      "ID": "75",
      "LocalizedName": "Ville de Paris",
      "EnglishName": "Ville de Paris",
      "Level": 1,
      "LocalizedType": "Department",
      "EnglishType": "Department",
      "CountryID": "FR"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Europe/Paris",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 48.857,
      "Longitude": 2.351,
      "Elevation": {
        "Metric": {
          "Value": 35,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 114,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Paris",
        "EnglishName": "Paris"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "171705",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Tbilisi",
    "EnglishName": "Tbilisi",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "GE",
      "LocalizedName": "Georgia",
      "EnglishName": "Georgia"
    },
    "AdministrativeArea": {
      "ID": "TB",
      "LocalizedName": "Tbilisi",
      "EnglishName": "Tbilisi",
      "Level": 1,
      "LocalizedType": "City",
      "EnglishType": "City",
      "CountryID": "GE"
    },
    "TimeZone": {
      "Code": "GET",
      "Name": "Asia/Tbilisi",
      "GmtOffset": 4,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 41.722,
      "Longitude": 44.783,
      "Elevation": {
        "Metric": {
          "Value": 447,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 1466,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Tbilisi",
        "EnglishName": "Tbilisi"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "189891",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Port-au-prince",
    "EnglishName": "Port-au-prince",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "CAC",
      "LocalizedName": "Central America",
      "EnglishName": "Central America"
    },
    "Country": {
      "ID": "HT",
      "LocalizedName": "Haiti",
      "EnglishName": "Haiti"
    },
    "AdministrativeArea": {
      "ID": "OU",
      "LocalizedName": "West",
      "EnglishName": "West",
      "Level": 1,
      "LocalizedType": "Department",
      "EnglishType": "Department",
      "CountryID": "HT"
    },
    "TimeZone": {
      "Code": "EDT",
      "Name": "America/Port-au-Prince",
      "GmtOffset": -4,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-11-01T06:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 18.543,
      "Longitude": -72.343,
      "Elevation": {
        "Metric": {
          "Value": 19,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 62,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Port-Au-Prince",
        "EnglishName": "Port-Au-Prince"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "187423",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Budapest",
    "EnglishName": "Budapest",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "HU",
      "LocalizedName": "Hungary",
      "EnglishName": "Hungary"
    },
    "AdministrativeArea": {
      "ID": "BU",
      "LocalizedName": "Budapest",
      "EnglishName": "Budapest",
      "Level": 1,
      "LocalizedType": "Capital City",
      "EnglishType": "Capital City",
      "CountryID": "HU"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Europe/Budapest",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 47.504,
      "Longitude": 19.05,
      "Elevation": {
        "Metric": {
          "Value": 75,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 246,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "210841",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Tehran",
    "EnglishName": "Tehran",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "MEA",
      "LocalizedName": "Middle East",
      "EnglishName": "Middle East"
    },
    "Country": {
      "ID": "IR",
      "LocalizedName": "Iran",
      "EnglishName": "Iran"
    },
    "AdministrativeArea": {
      "ID": "07",
      "LocalizedName": "Tehran",
      "EnglishName": "Tehran",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "IR"
    },
    "TimeZone": {
      "Code": "IRST",
      "Name": "Asia/Tehran",
      "GmtOffset": 3.5,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-20T20:30:00Z"
    },
    "GeoPosition": {
      "Latitude": 35.701,
      "Longitude": 51.407,
      "Elevation": {
        "Metric": {
          "Value": 1227,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 4027,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "213490",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Rome",
    "EnglishName": "Rome",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "IT",
      "LocalizedName": "Italy",
      "EnglishName": "Italy"
    },
    "AdministrativeArea": {
      "ID": "62",
      "LocalizedName": "Lazio",
      "EnglishName": "Lazio",
      "Level": 1,
      "LocalizedType": "Region",
      "EnglishType": "Region",
      "CountryID": "IT"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Europe/Rome",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 41.892,
      "Longitude": 12.511,
      "Elevation": {
        "Metric": {
          "Value": 45,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 147,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Roma",
        "EnglishName": "Roma"
      },
      {
        "Level": 3,
        "LocalizedName": "Roma",
        "EnglishName": "Roma"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence"
    ]
  },
  {
    "Version": 1,
    "Key": "224758",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Nairobi",
    "EnglishName": "Nairobi",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "AFR",
      "LocalizedName": "Africa",
      "EnglishName": "Africa"
    },
    "Country": {
      "ID": "KE",
      "LocalizedName": "Kenya",
      "EnglishName": "Kenya"
    },
    "AdministrativeArea": {
      "ID": "30",
      "LocalizedName": "Nairobi City",
      "EnglishName": "Nairobi City",
      "Level": 1,
      "LocalizedType": "County",
      "EnglishType": "County",
      "CountryID": "KE"
    },
    "TimeZone": {
      "Code": "EAT",
      "Name": "Africa/Nairobi",
      "GmtOffset": 3,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -1.27,
      "Longitude": 36.804,
      "Elevation": {
        "Metric": {
          "Value": 1702,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 5585,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Nairobi",
        "EnglishName": "Nairobi"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "49785",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Phnom Penh",
    "EnglishName": "Phnom Penh",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "KH",
      "LocalizedName": "Cambodia",
      "EnglishName": "Cambodia"
    },
    "AdministrativeArea": {
      "ID": "12",
      "LocalizedName": "Phnom Penh",
      "EnglishName": "Phnom Penh",
      "Level": 1,
      "LocalizedType": "Municipality",
      "EnglishType": "Municipality",
      "CountryID": "KH"
    },
    "TimeZone": {
      "Code": "ICT",
      "Name": "Asia/Phnom_Penh",
      "GmtOffset": 7,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 11.565,
      "Longitude": 104.913,
      "Elevation": {
        "Metric": {
          "Value": 25,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 82,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Prampir Meakkakra",
        "EnglishName": "Prampir Meakkakra"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "222343",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Nur-Sultan",
    "EnglishName": "Nur-Sultan",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "KZ",
      "LocalizedName": "Kazakhstan",
      "EnglishName": "Kazakhstan"
    },
    "AdministrativeArea": {
      "ID": "AST",
      "LocalizedName": "Nur-Sultan",
      "EnglishName": "Nur-Sultan",
      "Level": 1,
      "LocalizedType": "City",
      "EnglishType": "City",
      "CountryID": "KZ"
    },
    "TimeZone": {
      "Code": "ALMT",
      "Name": "Asia/Almaty",
      "GmtOffset": 6,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 51.167,
      "Longitude": 71.433,
      "Elevation": {
        "Metric": {
          "Value": 342,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 1121,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "245072",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Rabat",
    "EnglishName": "Rabat",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "AFR",
      "LocalizedName": "Africa",
      "EnglishName": "Africa"
    },
    "Country": {
      "ID": "MA",
      "LocalizedName": "Morocco",
      "EnglishName": "Morocco"
    },
    "AdministrativeArea": {
      "ID": "04",
      "LocalizedName": "Rabat-Salé-Kénitra",
      "EnglishName": "Rabat-Salé-Kénitra",
      "Level": 1,
      "LocalizedType": "Region",
      "EnglishType": "Region",
      "CountryID": "MA"
    },
    "TimeZone": {
      "Code": "WEST",
      "Name": "Africa/Casablanca",
      "GmtOffset": 1,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-04-19T02:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 34.015,
      "Longitude": -6.833,
      "Elevation": {
        "Metric": {
          "Value": 53,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 173,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "246421",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Ulan Bator",
    "EnglishName": "Ulan Bator",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "MN",
      "LocalizedName": "Mongolia",
      "EnglishName": "Mongolia"
    },
    "AdministrativeArea": {
      "ID": "1",
      "LocalizedName": "Ulaanbaatar",
      "EnglishName": "Ulaanbaatar",
      "Level": 1,
      "LocalizedType": "Municipality",
      "EnglishType": "Municipality",
      "CountryID": "MN"
    },
    "TimeZone": {
      "Code": "ULAT",
      "Name": "Asia/Ulaanbaatar",
      "GmtOffset": 8,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 47.929,
      "Longitude": 106.912,
      "Elevation": {
        "Metric": {
          "Value": 1336,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 4382,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "233776",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Kuala Lumpur",
    "EnglishName": "Kuala Lumpur",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "MY",
      "LocalizedName": "Malaysia",
      "EnglishName": "Malaysia"
    },
    "AdministrativeArea": {
      "ID": "14",
      "LocalizedName": "Kuala Lumpur",
      "EnglishName": "Kuala Lumpur",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "MY"
    },
    "TimeZone": {
      "Code": "MYT",
      "Name": "Asia/Kuala_Lumpur",
      "GmtOffset": 8,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 3.158,
      "Longitude": 101.712,
      "Elevation": {
        "Metric": {
          "Value": 61,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 200,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "264885",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Manila",
    "EnglishName": "Manila",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "PH",
      "LocalizedName": "Philippines",
      "EnglishName": "Philippines"
    },
    "AdministrativeArea": {
      "ID": "MNL",
      "LocalizedName": "Metropolitan Manila",
      "EnglishName": "Metropolitan Manila",
      "Level": 1,
      "LocalizedType": "Region",
      "EnglishType": "Region",
      "CountryID": "PH"
    },
    "TimeZone": {
      "Code": "PHT",
      "Name": "Asia/Manila",
      "GmtOffset": 8,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 14.59,
      "Longitude": 120.982,
      "Elevation": {
        "Metric": {
          "Value": 2,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 8,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts"
    ]
  },
  {
    "Version": 1,
    "Key": "274663",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Warsaw",
    "EnglishName": "Warsaw",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "PL",
      "LocalizedName": "Poland",
      "EnglishName": "Poland"
    },
    "AdministrativeArea": {
      "ID": "14",
      "LocalizedName": "Masovia",
      "EnglishName": "Masovia",
      "Level": 1,
      "LocalizedType": "Voivodship",
      "EnglishType": "Voivodship",
      "CountryID": "PL"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Europe/Warsaw",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 52.232,
      "Longitude": 21.007,
      "Elevation": {
        "Metric": {
          "Value": 112,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 367,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Warsaw",
        "EnglishName": "Warsaw"
      },
      {
        "Level": 3,
        "LocalizedName": "Warsaw",
        "EnglishName": "Warsaw"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "287430",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Bucharest",
    "EnglishName": "Bucharest",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "RO",
      "LocalizedName": "Romania",
      "EnglishName": "Romania"
    },
    "AdministrativeArea": {
      "ID": "B",
      "LocalizedName": "Bucharest",
      "EnglishName": "Bucharest",
      "Level": 1,
      "LocalizedType": "Municipality",
      "EnglishType": "Municipality",
      "CountryID": "RO"
    },
    "TimeZone": {
      "Code": "EET",
      "Name": "Europe/Bucharest",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 44.436,
      "Longitude": 26.104,
      "Elevation": {
        "Metric": {
          "Value": 84,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 275,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "298198",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Belgrade",
    "EnglishName": "Belgrade",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "RS",
      "LocalizedName": "Serbia",
      "EnglishName": "Serbia"
    },
    "AdministrativeArea": {
      "ID": "00",
      "LocalizedName": "Belgrade",
      "EnglishName": "Belgrade",
      "Level": 1,
      "LocalizedType": "District",
      "EnglishType": "District",
      "CountryID": "RS"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Europe/Belgrade",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 44.817,
      "Longitude": 20.464,
      "Elevation": {
        "Metric": {
          "Value": 99,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 324,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Stari",
        "EnglishName": "Stari"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "308406",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Khartoum",
    "EnglishName": "Khartoum",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "AFR",
      "LocalizedName": "Africa",
      "EnglishName": "Africa"
    },
    "Country": {
      "ID": "SD",
      "LocalizedName": "Sudan",
      "EnglishName": "Sudan"
    },
    "AdministrativeArea": {
      "ID": "KH",
      "LocalizedName": "Khartoum",
      "EnglishName": "Khartoum",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "SD"
    },
    "TimeZone": {
      "Code": "CAT",
      "Name": "Africa/Khartoum",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 15.591,
      "Longitude": 32.519,
      "Elevation": {
        "Metric": {
          "Value": 376,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 1233,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "ParentCity": {
      "Key": "308407",
      "LocalizedName": "Omdurman",
      "EnglishName": "Omdurman"
    },
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "297442",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Dakar",
    "EnglishName": "Dakar",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "AFR",
      "LocalizedName": "Africa",
      "EnglishName": "Africa"
    },
    "Country": {
      "ID": "SN",
      "LocalizedName": "Senegal",
      "EnglishName": "Senegal"
    },
    "AdministrativeArea": {
      "ID": "DK",
      "LocalizedName": "Dakar",
      "EnglishName": "Dakar",
      "Level": 1,
      "LocalizedType": "Region",
      "EnglishType": "Region",
      "CountryID": "SN"
    },
    "TimeZone": {
      "Code": "GMT",
      "Name": "Africa/Dakar",
      "GmtOffset": 0,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 14.687,
      "Longitude": -17.452,
      "Elevation": {
        "Metric": {
          "Value": 11,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 36,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "297120",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Mogadishu",
    "EnglishName": "Mogadishu",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "AFR",
      "LocalizedName": "Africa",
      "EnglishName": "Africa"
    },
    "Country": {
      "ID": "SO",
      "LocalizedName": "Somalia",
      "EnglishName": "Somalia"
    },
    "AdministrativeArea": {
      "ID": "BN",
      "LocalizedName": "Banaadir",
      "EnglishName": "Banaadir",
      "Level": 1,
      "LocalizedType": "Region",
      "EnglishType": "Region",
      "CountryID": "SO"
    },
    "TimeZone": {
      "Code": "EAT",
      "Name": "Africa/Mogadishu",
      "GmtOffset": 3,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 2.041,
      "Longitude": 45.344,
      "Elevation": {
        "Metric": {
          "Value": 44,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 144,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "315078",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Taipei City",
    "EnglishName": "Taipei City",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "TW",
      "LocalizedName": "Taiwan",
      "EnglishName": "Taiwan"
    },
    "AdministrativeArea": {
      "ID": "TPE",
      "LocalizedName": "Taipei City",
      "EnglishName": "Taipei City",
      "Level": 1,
      "LocalizedType": "Special Municipality",
      "EnglishType": "Special Municipality",
      "CountryID": "TW"
    },
    "TimeZone": {
      "Code": "CST",
      "Name": "Asia/Taipei",
      "GmtOffset": 8,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 25.048,
      "Longitude": 121.514,
      "Elevation": {
        "Metric": {
          "Value": 8,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 26,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQuality",
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "PremiumAirQuality"
    ]
  },
  {
    "Version": 1,
    "Key": "324505",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Kyiv",
    "EnglishName": "Kyiv",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "UA",
      "LocalizedName": "Ukraine",
      "EnglishName": "Ukraine"
    },
    "AdministrativeArea": {
      "ID": "30",
      "LocalizedName": "Kiev City",
      "EnglishName": "Kiev City",
      "Level": 1,
      "LocalizedType": "City",
      "EnglishType": "City",
      "CountryID": "UA"
    },
    "TimeZone": {
      "Code": "EET",
      "Name": "Europe/Kiev",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 50.45,
      "Longitude": 30.524,
      "Elevation": {
        "Metric": {
          "Value": 136,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 446,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "ForecastConfidence"
    ]
  },
  {
    "Version": 1,
    "Key": "349269",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Montevideo",
    "EnglishName": "Montevideo",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "SAM",
      "LocalizedName": "South America",
      "EnglishName": "South America"
    },
    "Country": {
      "ID": "UY",
      "LocalizedName": "Uruguay",
      "EnglishName": "Uruguay"
    },
    "AdministrativeArea": {
      "ID": "MO",
      "LocalizedName": "Montevideo",
      "EnglishName": "Montevideo",
      "Level": 1,
      "LocalizedType": "Department",
      "EnglishType": "Department",
      "CountryID": "UY"
    },
    "TimeZone": {
      "Code": "UYT",
      "Name": "America/Montevideo",
      "GmtOffset": -3,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -34.881,
      "Longitude": -56.165,
      "Elevation": {
        "Metric": {
          "Value": 39,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 127,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Section 12",
        "EnglishName": "Section 12"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "351199",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Tashkent",
    "EnglishName": "Tashkent",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "UZ",
      "LocalizedName": "Uzbekistan",
      "EnglishName": "Uzbekistan"
    },
    "AdministrativeArea": {
      "ID": "TK",
      "LocalizedName": "Tashkent City",
      "EnglishName": "Tashkent City",
      "Level": 1,
      "LocalizedType": "City",
      "EnglishType": "City",
      "CountryID": "UZ"
    },
    "TimeZone": {
      "Code": "UZT",
      "Name": "Asia/Tashkent",
      "GmtOffset": 5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 41.305,
      "Longitude": 69.269,
      "Elevation": {
        "Metric": {
          "Value": 466,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 1528,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "353020",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Caracas",
    "EnglishName": "Caracas",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "SAM",
      "LocalizedName": "South America",
      "EnglishName": "South America"
    },
    "Country": {
      "ID": "VE",
      "LocalizedName": "Venezuela",
      "EnglishName": "Venezuela"
    },
    "AdministrativeArea": {
      "ID": "A",
      "LocalizedName": "Distrito Capital",
      "EnglishName": "Distrito Capital",
      "Level": 1,
      "LocalizedType": "Capital District",
      "EnglishType": "Capital District",
      "CountryID": "VE"
    },
    "TimeZone": {
      "Code": "VET",
      "Name": "America/Caracas",
      "GmtOffset": -4,
      "IsDaylightSaving": true,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 10.496,
      "Longitude": -66.898,
      "Elevation": {
        "Metric": {
          "Value": 905,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 2968,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "355809",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Sana'a",
    "EnglishName": "Sana'a",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "MEA",
      "LocalizedName": "Middle East",
      "EnglishName": "Middle East"
    },
    "Country": {
      "ID": "YE",
      "LocalizedName": "Yemen",
      "EnglishName": "Yemen"
    },
    "AdministrativeArea": {
      "ID": "SA",
      "LocalizedName": "Amānat al ‘Āşimah",
      "EnglishName": "Amānat al ‘Āşimah",
      "Level": 1,
      "LocalizedType": "Municipality",
      "EnglishType": "Municipality",
      "CountryID": "YE"
    },
    "TimeZone": {
      "Code": "AST",
      "Name": "Asia/Aden",
      "GmtOffset": 3,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 15.361,
      "Longitude": 44.209,
      "Elevation": {
        "Metric": {
          "Value": 2235,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 7334,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "306633",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Cape Town",
    "EnglishName": "Cape Town",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "AFR",
      "LocalizedName": "Africa",
      "EnglishName": "Africa"
    },
    "Country": {
      "ID": "ZA",
      "LocalizedName": "South Africa",
      "EnglishName": "South Africa"
    },
    "AdministrativeArea": {
      "ID": "WC",
      "LocalizedName": "Western Cape",
      "EnglishName": "Western Cape",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "ZA"
    },
    "TimeZone": {
      "Code": "SAST",
      "Name": "Africa/Johannesburg",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -33.979,
      "Longitude": 18.482,
      "Elevation": {
        "Metric": {
          "Value": 15,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 49,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "City Of Cape Town",
        "EnglishName": "City Of Cape Town"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "353558",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Harare",
    "EnglishName": "Harare",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "AFR",
      "LocalizedName": "Africa",
      "EnglishName": "Africa"
    },
    "Country": {
      "ID": "ZW",
      "LocalizedName": "Zimbabwe",
      "EnglishName": "Zimbabwe"
    },
    "AdministrativeArea": {
      "ID": "HA",
      "LocalizedName": "Harare",
      "EnglishName": "Harare",
      "Level": 1,
      "LocalizedType": "City With Provincial Status",
      "EnglishType": "City With Provincial Status",
      "CountryID": "ZW"
    },
    "TimeZone": {
      "Code": "CAT",
      "Name": "Africa/Harare",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -17.823,
      "Longitude": 31.05,
      "Elevation": {
        "Metric": {
          "Value": 1470,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 4824,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Harare Urban",
        "EnglishName": "Harare Urban"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "26797",
    "Type": "City",
    "Rank": 21,
    "LocalizedName": "Perth",
    "EnglishName": "Perth",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "OCN",
      "LocalizedName": "Oceania",
      "EnglishName": "Oceania"
    },
    "Country": {
      "ID": "AU",
      "LocalizedName": "Australia",
      "EnglishName": "Australia"
    },
    "AdministrativeArea": {
      "ID": "WA",
      "LocalizedName": "Western Australia",
      "EnglishName": "Western Australia",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "AU"
    },
    "TimeZone": {
      "Code": "AWST",
      "Name": "Australia/Perth",
      "GmtOffset": 8,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -31.953,
      "Longitude": 115.861,
      "Elevation": {
        "Metric": {
          "Value": 46,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 150,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "42471",
    "Type": "City",
    "Rank": 21,
    "LocalizedName": "Manaus",
    "EnglishName": "Manaus",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "SAM",
      "LocalizedName": "South America",
      "EnglishName": "South America"
    },
    "Country": {
      "ID": "BR",
      "LocalizedName": "Brazil",
      "EnglishName": "Brazil"
    },
    "AdministrativeArea": {
      "ID": "AM",
      "LocalizedName": "Amazonas",
      "EnglishName": "Amazonas",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "BR"
    },
    "TimeZone": {
      "Code": "AMT",
      "Name": "America/Manaus",
      "GmtOffset": -4,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -3.135,
      "Longitude": -60.023,
      "Elevation": {
        "Metric": {
          "Value": 34,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 111,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Manaus",
        "EnglishName": "Manaus"
      },
      {
        "Level": 3,
        "LocalizedName": "Manaus",
        "EnglishName": "Manaus"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts"
    ]
  },
  {
    "Version": 1,
    "Key": "45090",
    "Type": "City",
    "Rank": 21,
    "LocalizedName": "Recife",
    "EnglishName": "Recife",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "SAM",
      "LocalizedName": "South America",
      "EnglishName": "South America"
    },
    "Country": {
      "ID": "BR",
      "LocalizedName": "Brazil",
      "EnglishName": "Brazil"
    },
    "AdministrativeArea": {
      "ID": "PE",
      "LocalizedName": "Pernambuco",
      "EnglishName": "Pernambuco",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "BR"
    },
    "TimeZone": {
      "Code": "BRT",
      "Name": "America/Recife",
      "GmtOffset": -3,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -8.063,
      "Longitude": -34.889,
      "Elevation": {
        "Metric": {
          "Value": 1,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 3,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Recife",
        "EnglishName": "Recife"
      },
      {
        "Level": 3,
        "LocalizedName": "Recife",
        "EnglishName": "Recife"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts"
    ]
  },
  {
    "Version": 1,
    "Key": "45881",
    "Type": "City",
    "Rank": 21,
    "LocalizedName": "São Paulo",
    "EnglishName": "São Paulo",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "SAM",
      "LocalizedName": "South America",
      "EnglishName": "South America"
    },
    "Country": {
      "ID": "BR",
      "LocalizedName": "Brazil",
      "EnglishName": "Brazil"
    },
    "AdministrativeArea": {
      "ID": "SP",
      "LocalizedName": "São Paulo",
      "EnglishName": "São Paulo",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "BR"
    },
    "TimeZone": {
      "Code": "BRT",
      "Name": "America/Sao_Paulo",
      "GmtOffset": -3,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -23.567,
      "Longitude": -46.57,
      "Elevation": {
        "Metric": {
          "Value": 662,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 2171,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "São Paulo",
        "EnglishName": "São Paulo"
      },
      {
        "Level": 3,
        "LocalizedName": "Água Rasa",
        "EnglishName": "Água Rasa"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts"
    ]
  },
  {
    "Version": 1,
    "Key": "55488",
    "Type": "City",
    "Rank": 21,
    "LocalizedName": "Toronto",
    "EnglishName": "Toronto",
    "PrimaryPostalCode": "M5H",
    "Region": {
      "ID": "NAM",
      "LocalizedName": "North America",
      "EnglishName": "North America"
    },
    "Country": {
      "ID": "CA",
      "LocalizedName": "Canada",
      "EnglishName": "Canada"
    },
    "AdministrativeArea": {
      "ID": "ON",
      "LocalizedName": "Ontario",
      "EnglishName": "Ontario",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "CA"
    },
    "TimeZone": {
      "Code": "EDT",
      "Name": "America/Toronto",
      "GmtOffset": -4,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-11-01T06:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 43.649,
      "Longitude": -79.38,
      "Elevation": {
        "Metric": {
          "Value": 81,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 265,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Toronto",
        "EnglishName": "Toronto"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "113725",
    "Type": "City",
    "Rank": 21,
    "LocalizedName": "Abidjan",
    "EnglishName": "Abidjan",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "AFR",
      "LocalizedName": "Africa",
      "EnglishName": "Africa"
    },
    "Country": {
      "ID": "CI",
      "LocalizedName": "Cote D'Ivoire",
      "EnglishName": "Cote D'Ivoire"
    },
    "AdministrativeArea": {
      "ID": "AB",
      "LocalizedName": "Abidjan",
      "EnglishName": "Abidjan",
      "Level": 1,
      "LocalizedType": "District",
      "EnglishType": "District",
      "CountryID": "CI"
    },
    "TimeZone": {
      "Code": "GMT",
      "Name": "Africa/Abidjan",
      "GmtOffset": 0,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 5.323,
      "Longitude": -4.026,
      "Elevation": {
        "Metric": {
          "Value": 75,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 246,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "307297",
    "Type": "City",
    "Rank": 21,
    "LocalizedName": "Barcelona",
    "EnglishName": "Barcelona",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "ES",
      "LocalizedName": "Spain",
      "EnglishName": "Spain"
    },
    "AdministrativeArea": {
      "ID": "CT",
      "LocalizedName": "Catalonia",
      "EnglishName": "Catalonia",
      "Level": 1,
      "LocalizedType": "Autonomous Community",
      "EnglishType": "Autonomous Community",
      "CountryID": "ES"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Europe/Madrid",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 41.385,
      "Longitude": 2.177,
      "Elevation": {
        "Metric": {
          "Value": 41,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 134,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 3,
        "LocalizedName": "Barcelona",
        "EnglishName": "Barcelona"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "225007",
    "Type": "City",
    "Rank": 21,
    "LocalizedName": "Osaka-shi",
    "EnglishName": "Osaka-shi",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "JP",
      "LocalizedName": "Japan",
      "EnglishName": "Japan"
    },
    "AdministrativeArea": {
      "ID": "27",
      "LocalizedName": "Osaka",
      "EnglishName": "Osaka",
      "Level": 1,
      "LocalizedType": "Prefecture",
      "EnglishType": "Prefecture",
      "CountryID": "JP"
    },
    "TimeZone": {
      "Code": "JST",
      "Name": "Asia/Tokyo",
      "GmtOffset": 9,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 34.667,
      "Longitude": 135.5,
      "Elevation": {
        "Metric": {
          "Value": 4,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 13,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "252066",
    "Type": "City",
    "Rank": 21,
    "LocalizedName": "Auckland",
    "EnglishName": "Auckland",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "OCN",
      "LocalizedName": "Oceania",
      "EnglishName": "Oceania"
    },
    "Country": {
      "ID": "NZ",
      "LocalizedName": "New Zealand",
      "EnglishName": "New Zealand"
    },
    "AdministrativeArea": {
      "ID": "AUK",
      "LocalizedName": "Auckland",
      "EnglishName": "Auckland",
      "Level": 1,
      "LocalizedType": "Region",
      "EnglishType": "Region",
      "CountryID": "NZ"
    },
    "TimeZone": {
      "Code": "NZDT",
      "Name": "Pacific/Auckland",
      "GmtOffset": 13,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-04-04T14:00:00Z"
    },
    "GeoPosition": {
      "Latitude": -36.847,
      "Longitude": 174.766,
      "Elevation": {
        "Metric": {
          "Value": 1,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 3,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Auckland City",
        "EnglishName": "Auckland City"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts"
    ]
  },
  {
    "Version": 1,
    "Key": "294459",
    "Type": "City",
    "Rank": 21,
    "LocalizedName": "Novosibirsk",
    "EnglishName": "Novosibirsk",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "RU",
      "LocalizedName": "Russia",
      "EnglishName": "Russia"
    },
    "AdministrativeArea": {
      "ID": "NVS",
      "LocalizedName": "Novosibirsk",
      "EnglishName": "Novosibirsk",
      "Level": 1,
      "LocalizedType": "Oblast",
      "EnglishType": "Oblast",
      "CountryID": "RU"
    },
    "TimeZone": {
      "Code": "NOVT",
      "Name": "Asia/Novosibirsk",
      "GmtOffset": 7,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 55.028,
      "Longitude": 82.923,
      "Elevation": {
        "Metric": {
          "Value": 143,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 469,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Novosibirsk City",
        "EnglishName": "Novosibirsk City"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts"
    ]
  },
  {
    "Version": 1,
    "Key": "313468",
    "Type": "City",
    "Rank": 21,
    "LocalizedName": "Aleppo",
    "EnglishName": "Aleppo",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "MEA",
      "LocalizedName": "Middle East",
      "EnglishName": "Middle East"
    },
    "Country": {
      "ID": "SY",
      "LocalizedName": "Syria",
      "EnglishName": "Syria"
    },
    "AdministrativeArea": {
      "ID": "HL",
      "LocalizedName": "Aleppo",
      "EnglishName": "Aleppo",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "SY"
    },
    "TimeZone": {
      "Code": "EET",
      "Name": "Asia/Damascus",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-26T22:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 36.216,
      "Longitude": 37.159,
      "Elevation": {
        "Metric": {
          "Value": 381,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 1249,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "317663",
    "Type": "City",
    "Rank": 21,
    "LocalizedName": "Dar es Salaam",
    "EnglishName": "Dar es Salaam",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "AFR",
      "LocalizedName": "Africa",
      "EnglishName": "Africa"
    },
    "Country": {
      "ID": "TZ",
      "LocalizedName": "Tanzania",
      "EnglishName": "Tanzania"
    },
    "AdministrativeArea": {
      "ID": "02",
      "LocalizedName": "Dar es Salaam",
      "EnglishName": "Dar es Salaam",
      "Level": 1,
      "LocalizedType": "Region",
      "EnglishType": "Region",
      "CountryID": "TZ"
    },
    "TimeZone": {
      "Code": "EAT",
      "Name": "Africa/Dar_es_Salaam",
      "GmtOffset": 3,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -6.823,
      "Longitude": 39.27,
      "Elevation": {
        "Metric": {
          "Value": 1,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 3,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "56186",
    "Type": "City",
    "Rank": 25,
    "LocalizedName": "Montreal",
    "EnglishName": "Montreal",
    "PrimaryPostalCode": "H3A",
    "Region": {
      "ID": "NAM",
      "LocalizedName": "North America",
      "EnglishName": "North America"
    },
    "Country": {
      "ID": "CA",
      "LocalizedName": "Canada",
      "EnglishName": "Canada"
    },
    "AdministrativeArea": {
      "ID": "QC",
      "LocalizedName": "Quebec",
      "EnglishName": "Quebec",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "CA"
    },
    "TimeZone": {
      "Code": "EDT",
      "Name": "America/Montreal",
      "GmtOffset": -4,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-11-01T06:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 45.506,
      "Longitude": -73.574,
      "Elevation": {
        "Metric": {
          "Value": 60,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 196,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Montreal",
        "EnglishName": "Montreal"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "299429",
    "Type": "City",
    "Rank": 25,
    "LocalizedName": "Jeddah",
    "EnglishName": "Jeddah",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "MEA",
      "LocalizedName": "Middle East",
      "EnglishName": "Middle East"
    },
    "Country": {
      "ID": "SA",
      "LocalizedName": "Saudi Arabia",
      "EnglishName": "Saudi Arabia"
    },
    "AdministrativeArea": {
      "ID": "02",
      "LocalizedName": "Makkah al Mukarramah",
      "EnglishName": "Makkah al Mukarramah",
      "Level": 1,
      "LocalizedType": "Region",
      "EnglishType": "Region",
      "CountryID": "SA"
    },
    "TimeZone": {
      "Code": "AST",
      "Name": "Asia/Riyadh",
      "GmtOffset": 3,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 21.543,
      "Longitude": 39.173,
      "Elevation": {
        "Metric": {
          "Value": 12,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 39,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "348308",
    "Type": "City",
    "Rank": 25,
    "LocalizedName": "Chicago",
    "EnglishName": "Chicago",
    "PrimaryPostalCode": "60608",
    "Region": {
      "ID": "NAM",
      "LocalizedName": "North America",
      "EnglishName": "North America"
    },
    "Country": {
      "ID": "US",
      "LocalizedName": "United States",
      "EnglishName": "United States"
    },
    "AdministrativeArea": {
      "ID": "IL",
      "LocalizedName": "Illinois",
      "EnglishName": "Illinois",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "US"
    },
    "TimeZone": {
      "Code": "CDT",
      "Name": "America/Chicago",
      "GmtOffset": -5,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-11-01T07:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 41.85,
      "Longitude": -87.65,
      "Elevation": {
        "Metric": {
          "Value": 181,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 593,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Cook",
        "EnglishName": "Cook"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyPollenForecast",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "351194",
    "Type": "City",
    "Rank": 25,
    "LocalizedName": "Dallas",
    "EnglishName": "Dallas",
    "PrimaryPostalCode": "75202",
    "Region": {
      "ID": "NAM",
      "LocalizedName": "North America",
      "EnglishName": "North America"
    },
    "Country": {
      "ID": "US",
      "LocalizedName": "United States",
      "EnglishName": "United States"
    },
    "AdministrativeArea": {
      "ID": "TX",
      "LocalizedName": "Texas",
      "EnglishName": "Texas",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "US"
    },
    "TimeZone": {
      "Code": "CDT",
      "Name": "America/Chicago",
      "GmtOffset": -5,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-11-01T07:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 32.783,
      "Longitude": -96.807,
      "Elevation": {
        "Metric": {
          "Value": 129,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 423,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Dallas",
        "EnglishName": "Dallas"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyPollenForecast",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "321626",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Abu Dhabi",
    "EnglishName": "Abu Dhabi",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "MEA",
      "LocalizedName": "Middle East",
      "EnglishName": "Middle East"
    },
    "Country": {
      "ID": "AE",
      "LocalizedName": "United Arab Emirates",
      "EnglishName": "United Arab Emirates"
    },
    "AdministrativeArea": {
      "ID": "AZ",
      "LocalizedName": "Abu Dhabi",
      "EnglishName": "Abu Dhabi",
      "Level": 1,
      "LocalizedType": "Emirate",
      "EnglishType": "Emirate",
      "CountryID": "AE"
    },
    "TimeZone": {
      "Code": "GST",
      "Name": "Asia/Dubai",
      "GmtOffset": 4,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 24.469,
      "Longitude": 54.358,
      "Elevation": {
        "Metric": {
          "Value": 9,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 29,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "6522",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Tirana",
    "EnglishName": "Tirana",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "AL",
      "LocalizedName": "Albania",
      "EnglishName": "Albania"
    },
    "AdministrativeArea": {
      "ID": "11",
      "LocalizedName": "Tiranë",
      "EnglishName": "Tiranë",
      "Level": 1,
      "LocalizedType": "County",
      "EnglishType": "County",
      "CountryID": "AL"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Europe/Tirane",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 41.331,
      "Longitude": 19.82,
      "Elevation": {
        "Metric": {
          "Value": 104,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 341,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Tirane",
        "EnglishName": "Tirane"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "ForecastConfidence",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "33655",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "La Paz",
    "EnglishName": "La Paz",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "SAM",
      "LocalizedName": "South America",
      "EnglishName": "South America"
    },
    "Country": {
      "ID": "BO",
      "LocalizedName": "Bolivia",
      "EnglishName": "Bolivia"
    },
    "AdministrativeArea": {
      "ID": "L",
      "LocalizedName": "La Paz",
      "EnglishName": "La Paz",
      "Level": 1,
      "LocalizedType": "Department",
      "EnglishType": "Department",
      "CountryID": "BO"
    },
    "TimeZone": {
      "Code": "BOT",
      "Name": "America/La_Paz",
      "GmtOffset": -4,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -16.499,
      "Longitude": -68.146,
      "Elevation": {
        "Metric": {
          "Value": 3844,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 12611,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "115295",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "San Jose",
    "EnglishName": "San Jose",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "CAC",
      "LocalizedName": "Central America",
      "EnglishName": "Central America"
    },
    "Country": {
      "ID": "CR",
      "LocalizedName": "Costa Rica",
      "EnglishName": "Costa Rica"
    },
    "AdministrativeArea": {
      "ID": "SJ",
      "LocalizedName": "San José",
      "EnglishName": "San José",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "CR"
    },
    "TimeZone": {
      "Code": "CST",
      "Name": "America/Costa_Rica",
      "GmtOffset": -6,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 9.923,
      "Longitude": -84.094,
      "Elevation": {
        "Metric": {
          "Value": 1091,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 3578,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "San Jose",
        "EnglishName": "San Jose"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "123094",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Copenhagen",
    "EnglishName": "Copenhagen",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "DK",
      "LocalizedName": "Denmark",
      "EnglishName": "Denmark"
    },
    "AdministrativeArea": {
      "ID": "84",
      "LocalizedName": "Capital",
      "EnglishName": "Capital",
      "Level": 1,
      "LocalizedType": "Region",
      "EnglishType": "Region",
      "CountryID": "DK"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Europe/Copenhagen",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 55.658,
      "Longitude": 12.496,
      "Elevation": {
        "Metric": {
          "Value": 5,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 16,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Copenhagen",
        "EnglishName": "Copenhagen"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "127964",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Tallinn",
    "EnglishName": "Tallinn",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "EE",
      "LocalizedName": "Estonia",
      "EnglishName": "Estonia"
    },
    "AdministrativeArea": {
      "ID": "37",
      "LocalizedName": "Harju",
      "EnglishName": "Harju",
      "Level": 1,
      "LocalizedType": "County",
      "EnglishType": "County",
      "CountryID": "EE"
    },
    "TimeZone": {
      "Code": "EET",
      "Name": "Europe/Tallinn",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 59.437,
      "Longitude": 24.771,
      "Elevation": {
        "Metric": {
          "Value": 22,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 72,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Tallinna",
        "EnglishName": "Tallinna"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "133328",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Helsinki",
    "EnglishName": "Helsinki",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "FI",
      "LocalizedName": "Finland",
      "EnglishName": "Finland"
    },
    "AdministrativeArea": {
      "ID": "18",
      "LocalizedName": "Uusimaa",
      "EnglishName": "Uusimaa",
      "Level": 1,
      "LocalizedType": "Region",
      "EnglishType": "Region",
      "CountryID": "FI"
    },
    "TimeZone": {
      "Code": "EET",
      "Name": "Europe/Helsinki",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 60.17,
      "Longitude": 24.939,
      "Elevation": {
        "Metric": {
          "Value": 26,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 85,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Helsingin",
        "EnglishName": "Helsingin"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "207931",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Dublin",
    "EnglishName": "Dublin",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "IE",
      "LocalizedName": "Ireland",
      "EnglishName": "Ireland"
    },
    "AdministrativeArea": {
      "ID": "D",
      "LocalizedName": "County Dublin",
      "EnglishName": "County Dublin",
      "Level": 1,
      "LocalizedType": "County",
      "EnglishType": "County",
      "CountryID": "IE"
    },
    "TimeZone": {
      "Code": "GMT",
      "Name": "Europe/Dublin",
      "GmtOffset": 0,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 53.343,
      "Longitude": -6.272,
      "Elevation": {
        "Metric": {
          "Value": 4,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 13,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "213225",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Jerusalem",
    "EnglishName": "Jerusalem",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "MEA",
      "LocalizedName": "Middle East",
      "EnglishName": "Middle East"
    },
    "Country": {
      "ID": "IL",
      "LocalizedName": "Israel",
      "EnglishName": "Israel"
    },
    "AdministrativeArea": {
      "ID": "JM",
      "LocalizedName": "Jerusalem",
      "EnglishName": "Jerusalem",
      "Level": 1,
      "LocalizedType": "District",
      "EnglishType": "District",
      "CountryID": "IL"
    },
    "TimeZone": {
      "Code": "IST",
      "Name": "Asia/Jerusalem",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-27T00:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 31.774,
      "Longitude": 35.225,
      "Elevation": {
        "Metric": {
          "Value": 804,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 2637,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts"
    ]
  },
  {
    "Version": 1,
    "Key": "214971",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Kingston",
    "EnglishName": "Kingston",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "CAC",
      "LocalizedName": "Central America",
      "EnglishName": "Central America"
    },
    "Country": {
      "ID": "JM",
      "LocalizedName": "Jamaica",
      "EnglishName": "Jamaica"
    },
    "AdministrativeArea": {
      "ID": "01",
      "LocalizedName": "Kingston",
      "EnglishName": "Kingston",
      "Level": 1,
      "LocalizedType": "Parish",
      "EnglishType": "Parish",
      "CountryID": "JM"
    },
    "TimeZone": {
      "Code": "EST",
      "Name": "America/Jamaica",
      "GmtOffset": -5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 17.975,
      "Longitude": -76.768,
      "Elevation": {
        "Metric": {
          "Value": 26,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 85,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "311399",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Colombo",
    "EnglishName": "Colombo",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "LK",
      "LocalizedName": "Sri Lanka",
      "EnglishName": "Sri Lanka"
    },
    "AdministrativeArea": {
      "ID": "1",
      "LocalizedName": "Western",
      "EnglishName": "Western",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "LK"
    },
    "TimeZone": {
      "Code": "IST",
      "Name": "Asia/Colombo",
      "GmtOffset": 5.5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 6.927,
      "Longitude": 79.872,
      "Elevation": {
        "Metric": {
          "Value": 12,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 39,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "231459",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Vilnius",
    "EnglishName": "Vilnius",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "LT",
      "LocalizedName": "Lithuania",
      "EnglishName": "Lithuania"
    },
    "AdministrativeArea": {
      "ID": "VL",
      "LocalizedName": "Vilnius",
      "EnglishName": "Vilnius",
      "Level": 1,
      "LocalizedType": "County",
      "EnglishType": "County",
      "CountryID": "LT"
    },
    "TimeZone": {
      "Code": "EET",
      "Name": "Europe/Vilnius",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 54.689,
      "Longitude": 25.276,
      "Elevation": {
        "Metric": {
          "Value": 119,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 390,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "225780",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Riga",
    "EnglishName": "Riga",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "LV",
      "LocalizedName": "Latvia",
      "EnglishName": "Latvia"
    },
    "AdministrativeArea": {
      "ID": "RIX",
      "LocalizedName": "Rīga",
      "EnglishName": "Rīga",
      "Level": 1,
      "LocalizedType": "City",
      "EnglishType": "City",
      "CountryID": "LV"
    },
    "TimeZone": {
      "Code": "EET",
      "Name": "Europe/Riga",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 56.943,
      "Longitude": 24.105,
      "Elevation": {
        "Metric": {
          "Value": 9,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 29,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "230555",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Tripoli",
    "EnglishName": "Tripoli",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "AFR",
      "LocalizedName": "Africa",
      "EnglishName": "Africa"
    },
    "Country": {
      "ID": "LY",
      "LocalizedName": "Libya",
      "EnglishName": "Libya"
    },
    "AdministrativeArea": {
      "ID": "TB",
      "LocalizedName": "Tripoli",
      "EnglishName": "Tripoli",
      "Level": 1,
      "LocalizedType": "Popularates",
      "EnglishType": "Popularates",
      "CountryID": "LY"
    },
    "TimeZone": {
      "Code": "EET",
      "Name": "Africa/Tripoli",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 32.878,
      "Longitude": 13.187,
      "Elevation": {
        "Metric": {
          "Value": 8,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 26,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "249758",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Amsterdam",
    "EnglishName": "Amsterdam",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "NL",
      "LocalizedName": "Netherlands",
      "EnglishName": "Netherlands"
    },
    "AdministrativeArea": {
      "ID": "NH",
      "LocalizedName": "North Holland",
      "EnglishName": "North Holland",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "NL"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Europe/Amsterdam",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 52.372,
      "Longitude": 4.9,
      "Elevation": {
        "Metric": {
          "Value": -1,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": -3,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "254946",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Oslo",
    "EnglishName": "Oslo",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "NO",
      "LocalizedName": "Norway",
      "EnglishName": "Norway"
    },
    "AdministrativeArea": {
      "ID": "03",
      "LocalizedName": "Oslo",
      "EnglishName": "Oslo",
      "Level": 1,
      "LocalizedType": "County",
      "EnglishType": "County",
      "CountryID": "NO"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Europe/Oslo",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 59.913,
      "Longitude": 10.74,
      "Elevation": {
        "Metric": {
          "Value": 11,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 36,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "241809",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Kathmandu",
    "EnglishName": "Kathmandu",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "NP",
      "LocalizedName": "Nepal",
      "EnglishName": "Nepal"
    },
    "AdministrativeArea": {
      "ID": "BA",
      "LocalizedName": "Bagmati",
      "EnglishName": "Bagmati",
      "Level": 1,
      "LocalizedType": "Zone",
      "EnglishType": "Zone",
      "CountryID": "NP"
    },
    "TimeZone": {
      "Code": "NPT",
      "Name": "Asia/Kathmandu",
      "GmtOffset": 5.75,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 27.702,
      "Longitude": 85.317,
      "Elevation": {
        "Metric": {
          "Value": 1297,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 4254,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "259549",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Panama City",
    "EnglishName": "Panama City",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "CAC",
      "LocalizedName": "Central America",
      "EnglishName": "Central America"
    },
    "Country": {
      "ID": "PA",
      "LocalizedName": "Panama",
      "EnglishName": "Panama"
    },
    "AdministrativeArea": {
      "ID": "8",
      "LocalizedName": "Panamá",
      "EnglishName": "Panamá",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "PA"
    },
    "TimeZone": {
      "Code": "EST",
      "Name": "America/Panama",
      "GmtOffset": -5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 9.003,
      "Longitude": -79.517,
      "Elevation": {
        "Metric": {
          "Value": 29,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 95,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "258848",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Port Moresby",
    "EnglishName": "Port Moresby",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "OCN",
      "LocalizedName": "Oceania",
      "EnglishName": "Oceania"
    },
    "Country": {
      "ID": "PG",
      "LocalizedName": "Papua New Guinea",
      "EnglishName": "Papua New Guinea"
    },
    "AdministrativeArea": {
      "ID": "NCD",
      "LocalizedName": "National Capital",
      "EnglishName": "National Capital",
      "Level": 1,
      "LocalizedType": "District",
      "EnglishType": "District",
      "CountryID": "PG"
    },
    "TimeZone": {
      "Code": "PGT",
      "Name": "Pacific/Port_Moresby",
      "GmtOffset": 10,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -9.48,
      "Longitude": 147.189,
      "Elevation": {
        "Metric": {
          "Value": 29,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 95,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "258278",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Islamabad",
    "EnglishName": "Islamabad",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "PK",
      "LocalizedName": "Pakistan",
      "EnglishName": "Pakistan"
    },
    "AdministrativeArea": {
      "ID": "IS",
      "LocalizedName": "Islamabad",
      "EnglishName": "Islamabad",
      "Level": 1,
      "LocalizedType": "Capital Territory",
      "EnglishType": "Capital Territory",
      "CountryID": "PK"
    },
    "TimeZone": {
      "Code": "PKT",
      "Name": "Asia/Karachi",
      "GmtOffset": 5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 33.71,
      "Longitude": 73.076,
      "Elevation": {
        "Metric": {
          "Value": 560,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 1836,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Islamabad",
        "EnglishName": "Islamabad"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "275478",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "San Juan",
    "EnglishName": "San Juan",
    "PrimaryPostalCode": "00901",
    "Region": {
      "ID": "CAC",
      "LocalizedName": "Central America",
      "EnglishName": "Central America"
    },
    "Country": {
      "ID": "PR",
      "LocalizedName": "Puerto Rico",
      "EnglishName": "Puerto Rico"
    },
    "AdministrativeArea": {
      "ID": "SJ",
      "LocalizedName": "San Juan",
      "EnglishName": "San Juan",
      "Level": 1,
      "LocalizedType": "Municipio",
      "EnglishType": "Municipio",
      "CountryID": "PR"
    },
    "TimeZone": {
      "Code": "AST",
      "Name": "America/Puerto_Rico",
      "GmtOffset": -4,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 18.466,
      "Longitude": -66.106,
      "Elevation": {
        "Metric": {
          "Value": 20,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 65,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "San Juan Antiguo",
        "EnglishName": "San Juan Antiguo"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "274087",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Lisbon",
    "EnglishName": "Lisbon",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "PT",
      "LocalizedName": "Portugal",
      "EnglishName": "Portugal"
    },
    "AdministrativeArea": {
      "ID": "11",
      "LocalizedName": "Lisboa",
      "EnglishName": "Lisboa",
      "Level": 1,
      "LocalizedType": "District",
      "EnglishType": "District",
      "CountryID": "PT"
    },
    "TimeZone": {
      "Code": "WET",
      "Name": "Europe/Lisbon",
      "GmtOffset": 0,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 38.707,
      "Longitude": -9.136,
      "Elevation": {
        "Metric": {
          "Value": 19,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 62,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Lisboa",
        "EnglishName": "Lisboa"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "257012",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Asuncion",
    "EnglishName": "Asuncion",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "SAM",
      "LocalizedName": "South America",
      "EnglishName": "South America"
    },
    "Country": {
      "ID": "PY",
      "LocalizedName": "Paraguay",
      "EnglishName": "Paraguay"
    },
    "AdministrativeArea": {
      "ID": "ASU",
      "LocalizedName": "Asunción",
      "EnglishName": "Asunción",
      "Level": 1,
      "LocalizedType": "Capital City",
      "EnglishType": "Capital City",
      "CountryID": "PY"
    },
    "TimeZone": {
      "Code": "PYST",
      "Name": "America/Asuncion",
      "GmtOffset": -3,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-03-22T03:00:00Z"
    },
    "GeoPosition": {
      "Latitude": -25.305,
      "Longitude": -57.622,
      "Elevation": {
        "Metric": {
          "Value": 141,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 462,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "314929",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Stockholm",
    "EnglishName": "Stockholm",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "SE",
      "LocalizedName": "Sweden",
      "EnglishName": "Sweden"
    },
    "AdministrativeArea": {
      "ID": "AB",
      "LocalizedName": "Stockholm",
      "EnglishName": "Stockholm",
      "Level": 1,
      "LocalizedType": "County",
      "EnglishType": "County",
      "CountryID": "SE"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Europe/Stockholm",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 59.314,
      "Longitude": 18.069,
      "Elevation": {
        "Metric": {
          "Value": 39,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 127,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "297345",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Bratislava",
    "EnglishName": "Bratislava",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "SK",
      "LocalizedName": "Slovakia",
      "EnglishName": "Slovakia"
    },
    "AdministrativeArea": {
      "ID": "BL",
      "LocalizedName": "Bratislava",
      "EnglishName": "Bratislava",
      "Level": 1,
      "LocalizedType": "Region",
      "EnglishType": "Region",
      "CountryID": "SK"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Europe/Bratislava",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 48.155,
      "Longitude": 17.13,
      "Elevation": {
        "Metric": {
          "Value": 134,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 439,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Bratislava II",
        "EnglishName": "Bratislava II"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "130669",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "San Salvador",
    "EnglishName": "San Salvador",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "CAC",
      "LocalizedName": "Central America",
      "EnglishName": "Central America"
    },
    "Country": {
      "ID": "SV",
      "LocalizedName": "El Salvador",
      "EnglishName": "El Salvador"
    },
    "AdministrativeArea": {
      "ID": "SS",
      "LocalizedName": "San Salvador",
      "EnglishName": "San Salvador",
      "Level": 1,
      "LocalizedType": "Department",
      "EnglishType": "Department",
      "CountryID": "SV"
    },
    "TimeZone": {
      "Code": "CST",
      "Name": "America/El_Salvador",
      "GmtOffset": -6,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 13.701,
      "Longitude": -89.2,
      "Elevation": {
        "Metric": {
          "Value": 699,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 2292,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "313854",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Dushanbe",
    "EnglishName": "Dushanbe",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "TJ",
      "LocalizedName": "Tajikistan",
      "EnglishName": "Tajikistan"
    },
    "AdministrativeArea": {
      "ID": "DU",
      "LocalizedName": "Dushanbe",
      "EnglishName": "Dushanbe",
      "Level": 1,
      "LocalizedType": "Capital Territory",
      "EnglishType": "Capital Territory",
      "CountryID": "TJ"
    },
    "TimeZone": {
      "Code": "TJT",
      "Name": "Asia/Dushanbe",
      "GmtOffset": 5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 38.559,
      "Longitude": 68.775,
      "Elevation": {
        "Metric": {
          "Value": 803,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 2633,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "317036",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Ashgabat",
    "EnglishName": "Ashgabat",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "TM",
      "LocalizedName": "Turkmenistan",
      "EnglishName": "Turkmenistan"
    },
    "AdministrativeArea": {
      "ID": "S",
      "LocalizedName": "Ashgabat",
      "EnglishName": "Ashgabat",
      "Level": 1,
      "LocalizedType": "Independent City",
      "EnglishType": "Independent City",
      "CountryID": "TM"
    },
    "TimeZone": {
      "Code": "TMT",
      "Name": "Asia/Ashgabat",
      "GmtOffset": 5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 37.95,
      "Longitude": 58.39,
      "Elevation": {
        "Metric": {
          "Value": 215,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 705,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "321398",
    "Type": "City",
    "Rank": 30,
    "LocalizedName": "Tunis",
    "EnglishName": "Tunis",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "AFR",
      "LocalizedName": "Africa",
      "EnglishName": "Africa"
    },
    "Country": {
      "ID": "TN",
      "LocalizedName": "Tunisia",
      "EnglishName": "Tunisia"
    },
    "AdministrativeArea": {
      "ID": "11",
      "LocalizedName": "Tunis",
      "EnglishName": "Tunis",
      "Level": 1,
      "LocalizedType": "Governorate",
      "EnglishType": "Governorate",
      "CountryID": "TN"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Africa/Tunis",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 36.819,
      "Longitude": 10.166,
      "Elevation": {
        "Metric": {
          "Value": 48,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 157,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "215854",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Tel Aviv",
    "EnglishName": "Tel Aviv",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "MEA",
      "LocalizedName": "Middle East",
      "EnglishName": "Middle East"
    },
    "Country": {
      "ID": "IL",
      "LocalizedName": "Israel",
      "EnglishName": "Israel"
    },
    "AdministrativeArea": {
      "ID": "TA",
      "LocalizedName": "Tel Aviv",
      "EnglishName": "Tel Aviv",
      "Level": 1,
      "LocalizedType": "District",
      "EnglishType": "District",
      "CountryID": "IL"
    },
    "TimeZone": {
      "Code": "IST",
      "Name": "Asia/Jerusalem",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-27T00:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 32.045,
      "Longitude": 34.77,
      "Elevation": {
        "Metric": {
          "Value": 34,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 111,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts"
    ]
  },
  {
    "Version": 1,
    "Key": "202190",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Hyderabad",
    "EnglishName": "Hyderabad",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "IN",
      "LocalizedName": "India",
      "EnglishName": "India"
    },
    "AdministrativeArea": {
      "ID": "TG",
      "LocalizedName": "Telangana",
      "EnglishName": "Telangana",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "IN"
    },
    "TimeZone": {
      "Code": "IST",
      "Name": "Asia/Kolkata",
      "GmtOffset": 5.5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 17.384,
      "Longitude": 78.464,
      "Elevation": {
        "Metric": {
          "Value": 504,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 1653,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Hyderabad",
        "EnglishName": "Hyderabad"
      },
      {
        "Level": 3,
        "LocalizedName": "Shaikpet",
        "EnglishName": "Shaikpet"
      }
    ],
    "DataSets": [
      "AirQuality",
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "PremiumAirQuality"
    ]
  },
  {
    "Version": 1,
    "Key": "347810",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Denver",
    "EnglishName": "Denver",
    "PrimaryPostalCode": "80203",
    "Region": {
      "ID": "NAM",
      "LocalizedName": "North America",
      "EnglishName": "North America"
    },
    "Country": {
      "ID": "US",
      "LocalizedName": "United States",
      "EnglishName": "United States"
    },
    "AdministrativeArea": {
      "ID": "CO",
      "LocalizedName": "Colorado",
      "EnglishName": "Colorado",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "US"
    },
    "TimeZone": {
      "Code": "MDT",
      "Name": "America/Denver",
      "GmtOffset": -6,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-11-01T08:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 39.739,
      "Longitude": -104.985,
      "Elevation": {
        "Metric": {
          "Value": 1588,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 5211,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Denver",
        "EnglishName": "Denver"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyPollenForecast",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "348211",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Honolulu",
    "EnglishName": "Honolulu",
    "PrimaryPostalCode": "96817",
    "Region": {
      "ID": "NAM",
      "LocalizedName": "North America",
      "EnglishName": "North America"
    },
    "Country": {
      "ID": "US",
      "LocalizedName": "United States",
      "EnglishName": "United States"
    },
    "AdministrativeArea": {
      "ID": "HI",
      "LocalizedName": "Hawaii",
      "EnglishName": "Hawaii",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "US"
    },
    "TimeZone": {
      "Code": "HST",
      "Name": "Pacific/Honolulu",
      "GmtOffset": -10,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 21.326,
      "Longitude": -157.845,
      "Elevation": {
        "Metric": {
          "Value": 112,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 367,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Honolulu",
        "EnglishName": "Honolulu"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "53286",
    "Type": "City",
    "Rank": 35,
    "LocalizedName": "Vancouver",
    "EnglishName": "Vancouver",
    "PrimaryPostalCode": "V6C",
    "Region": {
      "ID": "NAM",
      "LocalizedName": "North America",
      "EnglishName": "North America"
    },
    "Country": {
      "ID": "CA",
      "LocalizedName": "Canada",
      "EnglishName": "Canada"
    },
    "AdministrativeArea": {
      "ID": "BC",
      "LocalizedName": "British Columbia",
      "EnglishName": "British Columbia",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "CA"
    },
    "TimeZone": {
      "Code": "PDT",
      "Name": "America/Vancouver",
      "GmtOffset": -7,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-11-01T09:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 49.283,
      "Longitude": -123.118,
      "Elevation": {
        "Metric": {
          "Value": 33,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 108,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Greater Vancouver",
        "EnglishName": "Greater Vancouver"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "346835",
    "Type": "City",
    "Rank": 35,
    "LocalizedName": "Anchorage",
    "EnglishName": "Anchorage",
    "PrimaryPostalCode": "99501",
    "Region": {
      "ID": "NAM",
      "LocalizedName": "North America",
      "EnglishName": "North America"
    },
    "Country": {
      "ID": "US",
      "LocalizedName": "United States",
      "EnglishName": "United States"
    },
    "AdministrativeArea": {
      "ID": "AK",
      "LocalizedName": "Alaska",
      "EnglishName": "Alaska",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "US"
    },
    "TimeZone": {
      "Code": "AKDT",
      "Name": "America/Anchorage",
      "GmtOffset": -8,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-11-01T10:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 61.218,
      "Longitude": -149.9,
      "Elevation": {
        "Metric": {
          "Value": 16,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 52,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Anchorage",
        "EnglishName": "Anchorage"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "347629",
    "Type": "City",
    "Rank": 35,
    "LocalizedName": "San Francisco",
    "EnglishName": "San Francisco",
    "PrimaryPostalCode": "94103",
    "Region": {
      "ID": "NAM",
      "LocalizedName": "North America",
      "EnglishName": "North America"
    },
    "Country": {
      "ID": "US",
      "LocalizedName": "United States",
      "EnglishName": "United States"
    },
    "AdministrativeArea": {
      "ID": "CA",
      "LocalizedName": "California",
      "EnglishName": "California",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "US"
    },
    "TimeZone": {
      "Code": "PDT",
      "Name": "America/Los_Angeles",
      "GmtOffset": -7,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-11-01T09:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 37.775,
      "Longitude": -122.419,
      "Elevation": {
        "Metric": {
          "Value": 31,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 101,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "San Francisco",
        "EnglishName": "San Francisco"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyPollenForecast",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "347936",
    "Type": "City",
    "Rank": 35,
    "LocalizedName": "Miami",
    "EnglishName": "Miami",
    "PrimaryPostalCode": "33128",
    "Region": {
      "ID": "NAM",
      "LocalizedName": "North America",
      "EnglishName": "North America"
    },
    "Country": {
      "ID": "US",
      "LocalizedName": "United States",
      "EnglishName": "United States"
    },
    "AdministrativeArea": {
      "ID": "FL",
      "LocalizedName": "Florida",
      "EnglishName": "Florida",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "US"
    },
    "TimeZone": {
      "Code": "EDT",
      "Name": "America/New_York",
      "GmtOffset": -4,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-11-01T06:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 25.774,
      "Longitude": -80.194,
      "Elevation": {
        "Metric": {
          "Value": 5,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 16,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Miami-Dade",
        "EnglishName": "Miami-Dade"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyPollenForecast",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "351409",
    "Type": "City",
    "Rank": 35,
    "LocalizedName": "Seattle",
    "EnglishName": "Seattle",
    "PrimaryPostalCode": "98104",
    "Region": {
      "ID": "NAM",
      "LocalizedName": "North America",
      "EnglishName": "North America"
    },
    "Country": {
      "ID": "US",
      "LocalizedName": "United States",
      "EnglishName": "United States"
    },
    "AdministrativeArea": {
      "ID": "WA",
      "LocalizedName": "Washington",
      "EnglishName": "Washington",
      "Level": 1,
      "LocalizedType": "State",
      "EnglishType": "State",
      "CountryID": "US"
    },
    "TimeZone": {
      "Code": "PDT",
      "Name": "America/Los_Angeles",
      "GmtOffset": -7,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-11-01T09:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 47.606,
      "Longitude": -122.332,
      "Elevation": {
        "Metric": {
          "Value": 54,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 177,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "King",
        "EnglishName": "King"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyPollenForecast",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "355989",
    "Type": "City",
    "Rank": 40,
    "LocalizedName": "St. John's",
    "EnglishName": "St. John's",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "CAC",
      "LocalizedName": "Central America",
      "EnglishName": "Central America"
    },
    "Country": {
      "ID": "AG",
      "LocalizedName": "Antigua and Barbuda",
      "EnglishName": "Antigua and Barbuda"
    },
    "AdministrativeArea": {
      "ID": "04",
      "LocalizedName": "Saint John",
      "EnglishName": "Saint John",
      "Level": 1,
      "LocalizedType": "Parish",
      "EnglishType": "Parish",
      "CountryID": "AG"
    },
    "TimeZone": {
      "Code": "AST",
      "Name": "America/Antigua",
      "GmtOffset": -4,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 17.117,
      "Longitude": -61.85,
      "Elevation": {
        "Metric": {
          "Value": 1,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 3,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "27581",
    "Type": "City",
    "Rank": 40,
    "LocalizedName": "Brussels",
    "EnglishName": "Brussels",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "BE",
      "LocalizedName": "Belgium",
      "EnglishName": "Belgium"
    },
    "AdministrativeArea": {
      "ID": "BRU",
      "LocalizedName": "Brussels",
      "EnglishName": "Brussels",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "BE"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Europe/Brussels",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 50.85,
      "Longitude": 4.353,
      "Elevation": {
        "Metric": {
          "Value": 35,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 114,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "47205",
    "Type": "City",
    "Rank": 40,
    "LocalizedName": "Bujumbura",
    "EnglishName": "Bujumbura",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "AFR",
      "LocalizedName": "Africa",
      "EnglishName": "Africa"
    },
    "Country": {
      "ID": "BI",
      "LocalizedName": "Burundi",
      "EnglishName": "Burundi"
    },
    "AdministrativeArea": {
      "ID": "BM",
      "LocalizedName": "Bujumbura Mairie",
      "EnglishName": "Bujumbura Mairie",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "BI"
    },
    "TimeZone": {
      "Code": "CAT",
      "Name": "Africa/Bujumbura",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -3.372,
      "Longitude": 29.356,
      "Elevation": {
        "Metric": {
          "Value": 783,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 2568,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "190390",
    "Type": "City",
    "Rank": 40,
    "LocalizedName": "Reykjavik",
    "EnglishName": "Reykjavik",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ARC",
      "LocalizedName": "Arctic",
      "EnglishName": "Arctic"
    },
    "Country": {
      "ID": "IS",
      "LocalizedName": "Iceland",
      "EnglishName": "Iceland"
    },
    "AdministrativeArea": {
      "ID": "1",
      "LocalizedName": "Greater Reykjavik",
      "EnglishName": "Greater Reykjavik",
      "Level": 1,
      "LocalizedType": "Region",
      "EnglishType": "Region",
      "CountryID": "IS"
    },
    "TimeZone": {
      "Code": "GMT",
      "Name": "Atlantic/Reykjavik",
      "GmtOffset": 0,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 64.137,
      "Longitude": -21.902,
      "Elevation": {
        "Metric": {
          "Value": 36,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 118,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "361929",
    "Type": "City",
    "Rank": 40,
    "LocalizedName": "Vientiane",
    "EnglishName": "Vientiane",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "LA",
      "LocalizedName": "Laos",
      "EnglishName": "Laos"
    },
    "AdministrativeArea": {
      "ID": "VT",
      "LocalizedName": "Vientiane",
      "EnglishName": "Vientiane",
      "Level": 1,
      "LocalizedType": "Capital City",
      "EnglishType": "Capital City",
      "CountryID": "LA"
    },
    "TimeZone": {
      "Code": "ICT",
      "Name": "Asia/Vientiane",
      "GmtOffset": 7,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 17.965,
      "Longitude": 102.612,
      "Elevation": {
        "Metric": {
          "Value": 173,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 567,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "5003",
    "Type": "City",
    "Rank": 40,
    "LocalizedName": "Male",
    "EnglishName": "Male",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "MV",
      "LocalizedName": "Maldives",
      "EnglishName": "Maldives"
    },
    "AdministrativeArea": {
      "ID": "MLE",
      "LocalizedName": "Male",
      "EnglishName": "Male",
      "Level": 1,
      "LocalizedType": "District",
      "EnglishType": "District",
      "CountryID": "MV"
    },
    "TimeZone": {
      "Code": "MVT",
      "Name": "Indian/Maldives",
      "GmtOffset": 5,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 4.175,
      "Longitude": 73.51,
      "Elevation": {
        "Metric": {
          "Value": 0,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 0,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "250938",
    "Type": "City",
    "Rank": 40,
    "LocalizedName": "Wellington",
    "EnglishName": "Wellington",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "OCN",
      "LocalizedName": "Oceania",
      "EnglishName": "Oceania"
    },
    "Country": {
      "ID": "NZ",
      "LocalizedName": "New Zealand",
      "EnglishName": "New Zealand"
    },
    "AdministrativeArea": {
      "ID": "WGN",
      "LocalizedName": "Wellington",
      "EnglishName": "Wellington",
      "Level": 1,
      "LocalizedType": "Region",
      "EnglishType": "Region",
      "CountryID": "NZ"
    },
    "TimeZone": {
      "Code": "NZDT",
      "Name": "Pacific/Auckland",
      "GmtOffset": 13,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-04-04T14:00:00Z"
    },
    "GeoPosition": {
      "Latitude": -41.286,
      "Longitude": 174.776,
      "Elevation": {
        "Metric": {
          "Value": 24,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 78,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Wellington City",
        "EnglishName": "Wellington City"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts"
    ]
  },
  {
    "Version": 1,
    "Key": "309398",
    "Type": "City",
    "Rank": 40,
    "LocalizedName": "Paramaribo",
    "EnglishName": "Paramaribo",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "SAM",
      "LocalizedName": "South America",
      "EnglishName": "South America"
    },
    "Country": {
      "ID": "SR",
      "LocalizedName": "Suriname",
      "EnglishName": "Suriname"
    },
    "AdministrativeArea": {
      "ID": "PM",
      "LocalizedName": "Paramaribo",
      "EnglishName": "Paramaribo",
      "Level": 1,
      "LocalizedType": "District",
      "EnglishType": "District",
      "CountryID": "SR"
    },
    "TimeZone": {
      "Code": "SRT",
      "Name": "America/Paramaribo",
      "GmtOffset": -3,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 5.824,
      "Longitude": -55.174,
      "Elevation": {
        "Metric": {
          "Value": 3,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 9,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "3484",
    "Type": "City",
    "Rank": 40,
    "LocalizedName": "Dili",
    "EnglishName": "Dili",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "TL",
      "LocalizedName": "Timor-Leste",
      "EnglishName": "Timor-Leste"
    },
    "AdministrativeArea": {
      "ID": "DI",
      "LocalizedName": "Díli",
      "EnglishName": "Díli",
      "Level": 1,
      "LocalizedType": "Municipality",
      "EnglishType": "Municipality",
      "CountryID": "TL"
    },
    "TimeZone": {
      "Code": "TLT",
      "Name": "Asia/Dili",
      "GmtOffset": 9,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -8.571,
      "Longitude": 125.581,
      "Elevation": {
        "Metric": {
          "Value": 115,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 377,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Vera Cruz",
        "EnglishName": "Vera Cruz"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "205110",
    "Type": "City",
    "Rank": 41,
    "LocalizedName": "Banda Aceh",
    "EnglishName": "Banda Aceh",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "ASI",
      "LocalizedName": "Asia",
      "EnglishName": "Asia"
    },
    "Country": {
      "ID": "ID",
      "LocalizedName": "Indonesia",
      "EnglishName": "Indonesia"
    },
    "AdministrativeArea": {
      "ID": "AC",
      "LocalizedName": "Aceh",
      "EnglishName": "Aceh",
      "Level": 1,
      "LocalizedType": "Province",
      "EnglishType": "Province",
      "CountryID": "ID"
    },
    "TimeZone": {
      "Code": "WIT",
      "Name": "Asia/Jakarta",
      "GmtOffset": 7,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": 5.573,
      "Longitude": 95.348,
      "Elevation": {
        "Metric": {
          "Value": 11,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 35,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts"
    ]
  },
  {
    "Version": 1,
    "Key": "124697",
    "Type": "City",
    "Rank": 50,
    "LocalizedName": "Nicosia",
    "EnglishName": "Nicosia",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "CY",
      "LocalizedName": "Cyprus",
      "EnglishName": "Cyprus"
    },
    "AdministrativeArea": {
      "ID": "01",
      "LocalizedName": "Nicosia",
      "EnglishName": "Nicosia",
      "Level": 1,
      "LocalizedType": "District",
      "EnglishType": "District",
      "CountryID": "CY"
    },
    "TimeZone": {
      "Code": "EET",
      "Name": "Asia/Nicosia",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 35.171,
      "Longitude": 33.369,
      "Elevation": {
        "Metric": {
          "Value": 128,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 419,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "ParentCity": {
      "Key": "124699",
      "LocalizedName": "Strovolos",
      "EnglishName": "Strovolos"
    },
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts"
    ]
  },
  {
    "Version": 1,
    "Key": "178535",
    "Type": "City",
    "Rank": 50,
    "LocalizedName": "Gibraltar",
    "EnglishName": "Gibraltar",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "GI",
      "LocalizedName": "Gibraltar",
      "EnglishName": "Gibraltar"
    },
    "AdministrativeArea": {
      "ID": "00",
      "LocalizedName": "Gibraltar",
      "EnglishName": "Gibraltar",
      "Level": 1,
      "LocalizedType": "Overseas Territory of the UK",
      "EnglishType": "Overseas Territory of the UK",
      "CountryID": "GI"
    },
    "TimeZone": {
      "Code": "CET",
      "Name": "Europe/Gibraltar",
      "GmtOffset": 1,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2020-03-29T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 36.116,
      "Longitude": -5.345,
      "Elevation": {
        "Metric": {
          "Value": 0,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 0,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "ForecastConfidence",
      "MinuteCast",
      "Radar"
    ]
  },
  {
    "Version": 1,
    "Key": "2094",
    "Type": "City",
    "Rank": 80,
    "LocalizedName": "Pago Pago",
    "EnglishName": "Pago Pago",
    "PrimaryPostalCode": "96799",
    "Region": {
      "ID": "OCN",
      "LocalizedName": "Oceania",
      "EnglishName": "Oceania"
    },
    "Country": {
      "ID": "AS",
      "LocalizedName": "American Samoa",
      "EnglishName": "American Samoa"
    },
    "AdministrativeArea": {
      "ID": "ET",
      "LocalizedName": "Eastern",
      "EnglishName": "Eastern",
      "Level": 1,
      "LocalizedType": "District",
      "EnglishType": "District",
      "CountryID": "AS"
    },
    "TimeZone": {
      "Code": "SST",
      "Name": "Pacific/Pago_Pago",
      "GmtOffset": -11,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -14.278,
      "Longitude": -170.703,
      "Elevation": {
        "Metric": {
          "Value": 195,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 639,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Ma'oputasi",
        "EnglishName": "Ma'oputasi"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts"
    ]
  }
]

const namesX = citiesList.map(city => {
    
    return city.LocalizedName;
});
function changeCity(city) {
  if(city != window.localStorage.currentCity){
    window.localStorage.setItem('currentCity', city);
    document.getElementById('cityName').innerHTML = city;
  }
}

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:
  it's being called from the onload of the body*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

