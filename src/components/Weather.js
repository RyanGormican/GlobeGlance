import React, { useCallback, useContext, useEffect } from "react";
import { Context } from "../App";
function Weather() {
 const { search, temp, setTemp} = useContext(Context);
const updateTemp = useCallback((event) => {
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=7bc27f1250aecc83d9e85aa10edc9203`)
        .then(res => res.json())
        .then(result => {
         setTemp(result);
     document.getElementById('temp').innerHTML = { temp }
        });
 
})
  useEffect(() => {
   searcht = document.querySelect('search-tag');
         searcht.addEventListener("onfocus",updateTemp());
      return ( ) => { 
          searcht.removeEventListener("onfocus",updateTemp())
      };
   }, [updateTemp]);
  return (
    
   <div className="temp">
|Temp|
</div>



);
}

export default Weather;

