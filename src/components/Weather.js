import React, { useCallback, useContext, useEffect } from "react";
import { Context } from "../App";
function Weather() {
 const { search, temp, setTemp} = useContext(Context);
const updateTemp = useCallback((event) => {
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=7bc27f1250aecc83d9e85aa10edc9203`)
        .then(res => res.json())
        .then(result => {
         setTemp(result);
        });
})
  useEffect(() => {
      document.addEventListener("onChange",updateTemp)
      return ( ) => { 
         document.removeEventListener("onChange",updateTemp)
      };
   }, [updateTemp]);
  return (
    
   <div className="temp">
   { temp } 
</div>



);
}

export default Weather;

