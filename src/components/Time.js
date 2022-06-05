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
       setTime(json_obj.datetime);
       setTimeZone(json_obj.timezone_abbreviation);
       document.getElementById('time').innerHTML = { time } + { timezone };
    }};
  xmlHttp.send(null);
    

});
  useEffect(() => {
  var searcht = document.getElementsByClassName('search-tag');
   if (searcht){
      searcht.addEventListener("onfocus",updateTime());
      return ( ) => { 
          searcht.removeEventListener("onfocus",updateTime());
      };
   }
   }, [updateTime]);
  return (
    
   <div className="time">
    |Time|
</div>
);
}

export default Time;
