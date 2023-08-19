import React, {useState} from 'react';
import { Icon } from '@iconify/react';
export default function Home() {
const [search, setSearch] = useState('');
return (
	<div className= "Home">
	 <div className="links">
        <a href="https://www.linkedin.com/in/ryangormican/">
          <Icon icon="mdi:linkedin" color="#0e76a8" width="60" />
        </a>
        <a href="https://github.com/RyanGormican/CardCache">
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
		<input type ="text"   onChange={(event) => setSearch(event.target.value)}/>
		<button onClick > Search <button />
		</div>
		</div>
		
	</div>
)



}