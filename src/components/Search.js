import React, { useContext } from "react";
import { Context } from "../App";
function Search() {
 const { search, setSearch} = useContext(Context);
function change(){
 var searcht = { search };
 console.log( searcht);
}
  return (
   <div>
   <input type = "text" className="search-tag" onChange={e => setSearch(e.target.value)} 
    value ={search} onKeyPress="change()" />
    
</div>
);
}

export default Search;
