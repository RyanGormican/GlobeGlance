import React, {useState, useEffect} from 'react';
import { Icon } from '@iconify/react';
import { Col, Row } from 'antd';
import {useNavigate, useParams} from 'react-router-dom';
export default function Dashboard() {
const params = useParams();
const [temperature, setTemperature] = useState('');
const navigate = useNavigate();
const search = params.search;
const [theLat, setTheLat] = useState(50.4452);
const [theLon, setTheLon] = useState(-104.618896);
const [windspeed,setWindSpeed] = useState(0);
const [weather, setWeather] = useState('');
const [humidity, setHumidity] = useState(0);
const [feelsliketemperature,setFeelsLikeTemperature] = useState(0);
const [population, setPopulation] = useState(0);
const [sunrise, setSunrise] = useState(0);
const [sunset, setSunset] = useState(0);
const [timezone, setTimezone] = useState(0);
const [kilometers, setKilometers] = useState(0);
const [country, setCountry] = useState('');
const getArea = async () => {

    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${theLat}&lon=${theLon}&format=json&zoom=10`);
    const data = await response.json();
    setCountry(data.address.country);
    const address = data.address;
     const city = address.city || address.town || address.village || address.hamlet;
     const state = address.state || address.region;
     const country = address.country;
    const boundingBox = data.boundingbox;
   const area = calculateArea(boundingBox);

    setKilometers(area);


};

const calculateArea = (boundingBox) => {
    const lat1= parseFloat(boundingBox[0]);
    const lat2= parseFloat(boundingBox[1]);
    const lon1= parseFloat(boundingBox[2]);
    const lon2= parseFloat(boundingBox[3]);
    const areaDegrees = ( lat2-lat1) * (lon2- lon1);
    const area = (areaDegrees) * 111.32 * 111.32;
     return area.toFixed(2);
};
const grabWeather = async () => {
    const coords = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q={search}&limit=1&appid=7bc27f1250aecc83d9e85aa10edc9203`);
    const coordinates = await coords.json();
    const { lat, lon} = coordinates[0];
    setTheLat(lat);
    setTheLon(lon);
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${theLat}&lon=${theLon}&appid=7bc27f1250aecc83d9e85aa10edc9203`);
    const weatherData = await weather.json();
    if (weatherData.cod === '200') {
        // Extract relevant weather information
        const currentWeather = weatherData.list[0];
        const weatherDescription = currentWeather.weather[0].description;
        const windSpeed = currentWeather.wind.speed;
        const temperature = currentWeather.main.temp;
        console.log(weatherData);
        // Update the state with the extracted data
        setTemperature(temperature);
        setWeather(weatherDescription);
        setWindSpeed(windSpeed);
        setHumidity(currentWeather.main.humidity)
        setFeelsLikeTemperature(currentWeather.main.feels_like)
        setPopulation(weatherData.city.population)
        const sunriseTime = new Date (weatherData.city.sunrise * 1000);
         const sunsetTime = new Date (weatherData.city.sunset * 1000);
         const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
        setSunrise(sunriseTime.toLocaleTimeString('en-US', timeOptions));
        setSunset(sunsetTime.toLocaleTimeString('en-US', timeOptions));
      } else {
        console.log('Error fetching weather data:', weatherData.message);
      }
};
const goHome = () => {
		navigate('/')
	}

useEffect(() =>{

getArea();
},[search]);
return (
	<div className="Home">
		<div className= 'return' onClick={goHome} >
			<Icon icon="icon-park-outline:return" height="60" color="white"/>
			</div>
		<div className="Dashboard">
		 <div>
         <Row justify="center">
          <Col span={24}>
            <h1>{search}, {country}</h1>
          </Col>
           <Col span={24}>
            <h1>Geographical <Icon icon="material-symbols:map" /></h1>
          </Col>
        </Row>
           <Row gutter={[16, 16]}>
          <Col span={12}>
            Latitude
          </Col>
          <Col span={12}>
          {theLat}
          </Col>
        </Row>
             <Row gutter={[16, 16]}>
          <Col span={12}>
            Longitude
          </Col>
          <Col span={12}>
          {theLon}
          </Col>
        </Row>
           <Row gutter={[16, 16]}>
          <Col span={12}>
            Timezone
          </Col>
          <Col span={12}>
       
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            Sunrise:
          </Col>
          <Col span={6} style={{ fontFamily: 'Arial, sans-serif' }}>
            {sunrise}
          </Col>
            <Col span={6}>
            Sunset:
          </Col>
          <Col span={6} style={{ fontFamily: 'Arial, sans-serif' }}>
            {sunset}
          </Col>
        </Row>
         <Row gutter={[16, 16]}>
          <Col span={12}>
            Population
          </Col>
          <Col span={12}>
          {population}
          </Col>
        </Row>
         <Row gutter={[16, 16]}>
          <Col span={12}>
            Area
          </Col>
          <Col span={12}>
          {kilometers} KM^2
          </Col>
        </Row>
          
             <Row gutter={[16, 16]}>
          <Col span={24}>
           <h1> Weather Conditions <Icon icon="mdi:weather-sunny" /></h1>
          </Col>
        </Row>
           <Row gutter={[16, 16]}>
          <Col span={12}>
            Temperature:
          </Col>
          <Col span={12} style={{ fontFamily: 'Arial, sans-serif' }}>
          {`${temperature-273.15}\u00B0C`}
          </Col>
        </Row>
          <Row gutter={[16, 16]}>
          <Col span={12}>
            Feels Like:
          </Col>
          <Col span={12} style={{ fontFamily: 'Arial, sans-serif' }}>
          {`${(feelsliketemperature-273.15)}\u00B0C`}
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify="center">
          <Col span={12}>
            Weather:
          </Col>
            <Col span={12}>
                 {weather}
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify="center">
            <Col span={12}>
            Wind Speed:
          </Col>
            <Col span={12}>
                 {windspeed}
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify="center">
        <Col span={12}>
            Humidity:
          </Col>
            <Col span={12}>
                 {humidity}
          </Col>
        </Row>
      </div>
		</div>
	</div>
)



}