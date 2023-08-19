import React, {useState, useEffect} from 'react';
import { Icon } from '@iconify/react';
import { Col, Row } from 'antd';
import {useNavigate, useParams} from 'react-router-dom';
export default function Dashboard() {
const params = useParams();
const [temperature, setTemperature] = useState('');
const navigate = useNavigate();
const search = params.search;
const [theLat, setTheLat] = useState('');
const [theLon, setTheLon] = useState('');
const grabWeather = async () => {
    const coords = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q={search}&limit=1&appid=7bc27f1250aecc83d9e85aa10edc9203`);
    const coordinates = await coords.json();
    const { lat, lon} = coordinates[0];
    setTheLat(lat);
    setTheLon(lon);
    const weather = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude=hourly,daily&appid=7bc27f1250aecc83d9e85aa10edc9203`);
    const weatherData = await weather.json();
    console.log(weatherData);
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
          <Col span={12}>
          {temperature}
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify="center">
          <Col span={20}>
         
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify="center">
          <Col span={20}>
        
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