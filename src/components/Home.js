import React, {useState, useEffect} from 'react';
import { Icon } from '@iconify/react';
import {useNavigate} from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
export default function Home() {
const [search, setSearch] = useState('');
const [suggestions, setSuggestions] = useState ([]);
const navigate = useNavigate();
const sendSearch = () => {
	if (!search)
	{
		return;
	}else{
		navigate(`/dashboard/${search}`)
	}
}
const getSuggestions = async () => {
  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a8d8ec1be0msh966006cb3a2cc91p117112jsne0110c5c10f0',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
      },
    };

  try {
      const response = await fetch(url, options);
      const data = await response.json();

      return data.data.map((city) => city.city);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      return [];
    }

};
const debouncedGetSuggestions = debounce(getSuggetions,300);

const onSuggestionsFetchRequested = async ({ value}) => {
  const suggestions = await debouncedGetSuggestions(value);
  setSuggestions(suggestions);  
};
const onSuggestionsClearRequest = () => {
    setSuggestions([]);
};

const getSuggestionsValue = (suggestion) => suggestion;

const renderSuggestion = (suggestion) => <div>{suggestion} </div>;
const onSuggestionSelected = (event, { suggestion }) => {
    navigate(`/dashboard/${suggestion}`);
};

const inputProps = {
    value: search,
    onChange: (event, { newValue}) => setSearch(newValue),
};

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
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionsValue={getSuggestionsValue}
            renderSuggestion={renderSuggestion}
            onSuggestionSelected={onSuggestionSelected}
            inputProps={inputProps}
         />
		</div>
		</div>
		
	</div>
)



}