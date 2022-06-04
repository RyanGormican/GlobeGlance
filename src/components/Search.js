import React, { useContext } from "react";
import { Context } from "../App";
function Search() {
 const { search, setSearch} = useContext(Context);

  return (
   <div className="searching">
   <input type = "text" className="search-tag" onChange={ e => setSearch.value)}
    value ={search}>
    
</div>
);
}

export default Search;