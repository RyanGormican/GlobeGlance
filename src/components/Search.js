import React, { useContext } from "react";
import { Context } from "../App";
function Search() {
 const { search, setSearch} = useContext(Context);
function change(e){
setSearch(e.target.value);
 var searcht = { search };
 console.log( searcht);
}
  return (
   <div>
   <input type = "text" className="search-tag" onChange={"change(e)" }
    value ={search} />
    
</div>
);
}

export default Search;
