import React, {useState} from 'react';
import { Icon } from '@iconify/react';
import {useNavigate} from 'react-router-dom';
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
		<span className="flicker-title">G</span>
  <span className="flicker-title">l</span>
  <span className="flicker-title">o</span>
  <span className="flicker-title">b</span>
  <span className="flicker-title">e</span>
  <span className="flicker-title">G</span>
  <span className="flicker-title">l</span>
  <span className="flicker-title">a</span>
  <span className="flicker-title">n</span>
  <span className="flicker-title">c</span>
  <span className="flicker-title">e</span>
		<Icon icon="mdi:globe" />
		<div>
		<input type ="text"   onChange={(event) => setSearch(event.target.value)}/>
		<button onClick={sendSearch} > Search </button >
		</div>
		</div>
		
	</div>
)



}