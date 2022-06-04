import React, { useContext } from "react";
import { Context } from "../App";
function Search() {
 const { search, setSearch} = useContext(Context);

  return (
   <div>
   <input type = "text" className="search-tag" onChange={ e => setSearch(e.target.value)}
    value ={search} />
    
</div>
);
}

export default Search;
