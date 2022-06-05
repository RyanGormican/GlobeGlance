import React, {useCallback, useContext, useEffect } from "react";
import { Context } from "../App";
function Time() {
 const { search, time, setTime, timezone, setTimeZone} = useContext(Context);
const updateTime = useCallback(() => {
   var xmlHttp = new XMLHttpRequest();
   var searching = {search};
 
 xmlHttp.open("GET", "https://timezone.abstractapi.com/v1/current_time/?api_key=e4ff1ca165584a108b275349a35255a8&location=" + searching, true); // true for asynchronous
    xmlHttp.onreadystatechange = function(e) {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        {
        var json_obj = JSON.parse(xmlHttp.responseText);
       setTime(xmlHttp.datetime);
       setTimeZone(xmlHttp.timezone_abbreviation);
       document.getElementById('time').innerHTML = { time } + { timezone };
    }};
  xmlHttp.send(null);
    

});
  useEffect(() => {
      document.getElementsByClassName("search-tag").addEventListener("onChange",updateTime());
      return ( ) => { 
          document.getElementsByClassName("search-tag").removeEventListener("onChange",updateTime());
      };
   }, [updateTime]);
  return (
    
   <div className="time">
    |Time|
</div>
);
}

export default Time;
