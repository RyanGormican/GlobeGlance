import React, {useState} from 'react';
import { Icon } from '@iconify/react';
import {useNavigate} from 'react-router-dom';
import { Button } from 'antd';
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
	  <span className="flicker-title" style={{ "--letter-delay": "0.25s" }}>	<Icon icon="mdi:globe" /> </span>
		<span className="flicker-title"style={{ "--letter-delay": "0.5s" }}>G</span>
  <span className="flicker-title" style={{ "--letter-delay": "0.75s" }}>l</span>
  <span className="flicker-title"style={{ "--letter-delay": "1s" }}>o</span>
  <span className="flicker-title"style={{ "--letter-delay": "1.25s" }}>b</span>
  <span className="flicker-title"style={{ "--letter-delay": "1.5s" }}>e</span>
  <span className="flicker-title"style={{ "--letter-delay": "1.75s" }}>G</span>
  <span className="flicker-title"style={{ "--letter-delay": "2s" }}>l</span>
  <span className="flicker-title"style={{ "--letter-delay": "2.25s" }}>a</span>
  <span className="flicker-title"style={{ "--letter-delay": "2.5s" }}>n</span>
  <span className="flicker-title"style={{ "--letter-delay": "2.75s" }}>c</span>
  <span className="flicker-title"style={{ "--letter-delay": "3s" }}>e</span>
 <span className="flicker-title"style={{ "--letter-delay": "3.25s" }}>		<Icon icon="mdi:globe" /> </span>
		<div>
		<input type ="text" placeholder="enter a city..."  onChange={(event) => setSearch(event.target.value)}/>
		<Button onClick={sendSearch} > Search </Button >
		</div>
		</div>
		
	</div>
)



}