import React, { useContext } from "react";
import { Context } from "../App";
function Search() {
 const { search, time, timezone, temp, setSearch} = useContext(Context);
function change(){
 var searcht = { search };
 var timet = { time };
 var timezonet = { timezone };
  var tempt = { temp };
 console.log( searcht);
  console.log( timet);
  console.log( timezonet);
  console.log( tempt);
}
  return (
   <div>
   <input type = "text" className="search-tag" id="search-tag" onChange={e => setSearch(e.target.value)} 
    value ={search} onKeyPress={change()} />
    
</div>
);
}

export default Search;
