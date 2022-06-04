import React, { useContext } from "react";
import { Context } from "../App";
function Time() {
 const { search, time, setTime, timezone, setTimeZone} = useContext(Context);
const updateTime = useCallback((event) => {
 
})
  useEffect(() => {
      document.addEventListener("onChange",updateTime)
      return ( ) => { 
         document.removeEventListener("onChange",updateTime)
      };
   }, [updateTime]);
  return (
    
   <div className="time">
   { time }  { timezone } 
</div>



);
}

export default Search;
