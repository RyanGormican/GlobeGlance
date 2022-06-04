import React, { useContext } from "react";
import { Context } from "../App";
function Time() {
 const { search, time, setTime, timezone, setTimeZone} = useContext(Context);

  return (
    
   <div className="time">
   { time }  { timezone } 
</div>



);
}

export default Search;
