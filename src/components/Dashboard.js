import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Col, Row } from "antd";
import { useNavigate, useParams } from "react-router-dom";
export default function Dashboard() {
  const params = useParams();
  const [temperature, setTemperature] = useState("");
  const navigate = useNavigate();
  const search = params.search;
  const [theLat, setTheLat] = useState(40.7128);
  const [theLon, setTheLon] = useState(-73.935242);
  const [windspeed, setWindSpeed] = useState(0);
  const [weather, setWeather] = useState("Unknown");
  const [humidity, setHumidity] = useState(0);
  const [feelsliketemperature, setFeelsLikeTemperature] = useState(0);
  const [population, setPopulation] = useState(0);
  const [sunrise, setSunrise] = useState(0);
  const [sunset, setSunset] = useState(0);
  const [elevation, setElevation] = useState(0);
  const [timezone, setTimezone] = useState(0);
  const [kilometers, setKilometers] = useState(0);
  const [country, setCountry] = useState("Unknown");
  const getGeo = async () => {
    const response = await fetch(
      `https://geocode.maps.co/search?city=${search}`
    );
    const data = await response.json();
    setTheLat(data[0].lat);
    setTheLon(data[0].lon);
  };
  const getArea = async () => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${theLat}&lon=${theLon}&format=json&zoom=10`
    );
    const data = await response.json();
    if (data.address && data.address.country) {
      setCountry(data.address.country);
    } else {
      setCountry("Unknown");
    }
    const boundingBox = data.boundingbox;
    const area = calculateArea(boundingBox);

    setKilometers(area);
  };
  const getTimezone = async () => {
    try {
      const timezoneKey = process.env.REACT_APP_TIMEZONE_API_KEY;
      const response = await fetch(
        `http://api.timezonedb.com/v2.1/get-time-zone?key=${timezoneKey}&format=json&by=position&lat=${theLat}&lng=${theLon}`
      );
      const data = await response.json();
      const abbreviation = data.abbreviation;

      const timeZoneMapping = {
        CST: "Central Standard Time",
        MST: "Morocco Standard Time",
        CUT: "Coordinated Universal Time",
        GST: "Greenwich Standard Time",
        GMT: "GMT Standard Time",
        WET: "Western European Time",
        CET: "Central European Time",
        WEST: "Western European Summer Time",
        CEST: "Central European Summer Time",
        RST: "Romance Standard Time",
        CEST: "Central European Summer Time",
        WCAST: "West Central Africa Standard Time",
        NST: "Namibia Standard Time",
        JST: "Jordan Standard Time",
        GTB: "GTB Standard Time",
        MEST: "Middle East Standard Time",
        EST: "Egypt Standard Time",
        SST: "Syria Standard Time",
        SAST: "South Africa Standard Time",
        FST: "FLE Standard Time",
        TST: "Turkey Standard Time",
        JST: "Jerusalem Standard Time",
        EEST: "Eastern European Summer Time",
        AST: "Arabic Standard Time",
        KST: "Krasnoyarsk Standard Time",
        ACST: "Australian Central Standard Time",
        AEST: "Australian Eastern Standard Time",
        LHST: "Lord Howe Standard Time",
        SBT: "Solomon Islands Time",
        NZST: "New Zealand Time",
        AZOT: "Azores Time",
        "UTC-02": "Coordinated Universal Time-2",
        AT: "Atlantic Time",
        NST: "Newfoundland Standard Time",
        AST: "Atlantic Standard Time",
        VET: "Venezuela Time",
        EST: "Eastern Standard Time",
        MST: "Mountain Standard Time",
        PST: "Pacific Standard Time",
        AKT: "Alaska Time",
        MART: "Marquesas Islands Time",
        HST: "Hawaii-Aleutian Standard Time",
        "UTC-11": "Coordinated Universal Time-11",
      };
      setTimezone(timeZoneMapping[abbreviation] || "Unknown");
    } catch (error) {
      console.error("Error fetching timezone data:", error);
    }
  };

  const getElevation = async () => {
    try {
      const response = await fetch(
        `http://geogratis.gc.ca/services/elevation/cdem/altitude?lat=${theLat}&lon=${theLon}`
      );
      const data = await response.json();
      setElevation(data.altitude);
    } catch (error) {
      console.error("Error fetching elevation data:", error);
    }
  };
  const calculateArea = (boundingBox) => {
    const lat1 = parseFloat(boundingBox[0]);
    const lat2 = parseFloat(boundingBox[1]);
    const lon1 = parseFloat(boundingBox[2]);
    const lon2 = parseFloat(boundingBox[3]);
    const areaDegrees = (lat2 - lat1) * (lon2 - lon1);
    const area = areaDegrees * 111.32 * 111.32;
    return area.toFixed(2);
  };
  const grabWeather = async () => {
    const openWeatherAPIKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    console.log(theLat);
    console.log(theLon);
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${theLat}&lon=${theLon}&appid=${openWeatherAPIKey}`
    );
    const weatherData = await weather.json();
    if (weatherData.cod === "200") {
      // Extract relevant weather information
      const currentWeather = weatherData.list[0];
      const weatherDescription = currentWeather.weather[0].description;
      const windSpeed = currentWeather.wind.speed;
      const temperature = currentWeather.main.temp;
      // Update the state with the extracted data
      setTemperature(temperature.toFixed(1));
      setWeather(weatherDescription);
      setWindSpeed(windSpeed);
      setHumidity(currentWeather.main.humidity);
      setFeelsLikeTemperature(currentWeather.main.feels_like.toFixed(1));
      setPopulation(weatherData.city.population);
      const sunriseTime = new Date(weatherData.city.sunrise * 1000);
      const sunsetTime = new Date(weatherData.city.sunset * 1000);
      const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
      setSunrise(sunriseTime.toLocaleTimeString("en-US", timeOptions));
      setSunset(sunsetTime.toLocaleTimeString("en-US", timeOptions));
    } else {
      console.log("Error fetching weather data:", weatherData.message);
    }
  };

  const goHome = () => {
    navigate("/");
  };

  useEffect(() => {
    getGeo();
    getArea();
    grabWeather();
    getElevation();
    getTimezone();
  }, [search]);
  return (
    <div className="Home">
      <div className="return" onClick={goHome}>
        <Icon icon="icon-park-outline:return" height="60" color="white" />
      </div>
      <div className="Dashboard">
        <div>
          <Row justify="center">
            <Col span={24}>
              <h1>{search}</h1>
            </Col>
            <Col span={24}>
              <h1>
                Geographical <Icon icon="material-symbols:map" />
              </h1>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>Latitude</Col>
            <Col span={12}>{theLat}</Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>Longitude</Col>
            <Col span={12}>{theLon}</Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>Elevation:</Col>
            <Col span={12}>{elevation} m</Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>Timezone:</Col>
            <Col span={12}>{timezone}</Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={6}>Sunrise:</Col>
            <Col span={6} style={{ fontFamily: "Arial, sans-serif" }}>
              {sunrise}
            </Col>
            <Col span={6}>Sunset:</Col>
            <Col span={6} style={{ fontFamily: "Arial, sans-serif" }}>
              {sunset}
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>Population:</Col>
            <Col span={12}>{population}</Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>Area:</Col>
            <Col span={12}>
              {kilometers.toLocaleString()} km<sup>2</sup>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>Country:</Col>
            <Col span={12}>{country}</Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col span={24}>
              <h1>
                {" "}
                Weather Conditions <Icon icon="mdi:weather-sunny" />
              </h1>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>Temperature:</Col>
            <Col span={12} style={{ fontFamily: "Arial, sans-serif" }}>
              {`${(temperature - 273.15).toFixed(1)}\u00B0C`}
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>Feels Like:</Col>
            <Col span={12} style={{ fontFamily: "Arial, sans-serif" }}>
              {`${(feelsliketemperature - 273.15).toFixed(1)}\u00B0C`}
            </Col>
          </Row>
          <Row gutter={[16, 16]} justify="center">
            <Col span={12}>Weather:</Col>
            <Col span={12}>{weather}</Col>
          </Row>
          <Row gutter={[16, 16]} justify="center">
            <Col span={12}>Wind Speed:</Col>
            <Col span={12}>{windspeed}</Col>
          </Row>
          <Row gutter={[16, 16]} justify="center">
            <Col span={12}>Humidity:</Col>
            <Col span={12}>{humidity}</Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
