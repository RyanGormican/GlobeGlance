import React, {useState, useEffect} from 'react';
import { Icon } from '@iconify/react';
import {useNavigate} from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
export default function Home() {
const [search, setSearch] = useState('');
const navigate = useNavigate();
const sendSearch = () => {
	if (!search)
	{
		return;
	}else{
		navigate(`/dashboard/${search}`)
	}
}
const grabCities = async () => {
  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a8d8ec1be0msh966006cb3a2cc91p117112jsne0110c5c10f0',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

}
useEffect(() =>{
grabCities();
},[]);
return (
	<div className= "Home">
	 <div className="links">
        <a href="https://www.linkedin.com/in/ryangormican/">
          <Icon icon="mdi:linkedin" color="#0e76a8" width="60" />
        </a>
        <a href="https://github.com/RyanGormican/GlobeGlance">
          <Icon icon="mdi:github" color="#e8eaea" width="60" />
        </a>
        <a href="https://ryangormicanportfoliohub.vercel.app/">
          <Icon icon="teenyicons:computer-outline" color="#199c35" width="60" />
        </a>
      </div>
		<div className= "Title">
		<Icon icon="mdi:globe" />
		GlobeGlance
		<Icon icon="mdi:globe" />
		<div>
		</div>
		</div>
		
	</div>
)



}