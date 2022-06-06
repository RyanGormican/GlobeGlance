import React, { useCallback, useContext, useEffect } from "react";
import { Context } from "../App";
function Weather() {
 const { search, temp, setTemp} = useContext(Context);
const updateTemp = useCallback((event) => {
  if(event.key === undefined) {return}
  if (event.key === "Enter") { 
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=7bc27f1250aecc83d9e85aa10edc9203`)
        .then(res => res.json())
        .then(result => {
         setTemp(result);
     document.getElementById('temp').innerHTML = { temp }
        });
  }
})
  useEffect(() => {
   var searcht = document.getElementById("search-tag");
   if(searcht){
         searcht.addEventListener("onKeyPress",updateTemp(event));
      return ( ) => { 
          searcht.removeEventListener("onKeyPress",updateTemp(event))
      };
   }
   }, [updateTemp]);
  return (
    
   <div className="temp">
|Temp|
</div>



);
}

export default Weather;

