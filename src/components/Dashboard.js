import React, {useState, useEffect} from 'react';
import { Icon } from '@iconify/react';
import { Col, Row } from 'antd';
import {useNavigate, useParams} from 'react-router-dom';
export default function Dashboard() {
const params = useParams();
const [temperature, setTemperature] = useState('');
const navigate = useNavigate();
const search = params.search;
const [theLat, setTheLat] = useState(0);
const [theLon, setTheLon] = useState(0);
const [windspeed,setWindSpeed] = useState(0);
const [weather, setWeather] = useState('');
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

        // Update the state with the extracted data
        setTemperature(temperature);
        setWeather(weatherDescription);
        setWindSpeed(windSpeed);
      } else {
        console.log('Error fetching weather data:', weatherData.message);
      }
};
const goHome = () => {
		navigate('/')
	}

useEffect(() =>{
grabWeather();
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
            <h1>{search}</h1>
          </Col>
           <Col span={24}>
            <h1>Geographical</h1>
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
            Temperature:
          </Col>
          <Col span={12} style={{ fontFamily: 'Arial, sans-serif' }}>
          {`${temperature-273.15}\u00B0C`}
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
            Wind Speed
          </Col>
            <Col span={12}>
                 {windspeed}
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify="center">
          <Col span={20}>
      
          </Col>
        </Row>
      </div>
		</div>
	</div>
)



}