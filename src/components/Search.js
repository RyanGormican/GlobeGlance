import React, { useContext } from "react";
import { Context } from "../App";
import { getDate } from "./Date.js";
import { getTemp } from "./Weather.js";
function Search() {
 const { search, setSearch} = useContext(Context);

  return (
    
   <div className="searching">
   <input type = "text" className="search-tag" onChange={ e => setSearch.value)}
    value ={search}
    onKeyPress: function(event){ 
     getDate();
     getTemp();
    }
    


</div>



);
}

export default Search;
