import React, {useState} from 'react';
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
		<Autosuggest />
		</div>
		</div>
		
	</div>
)



}