import React, {useCallback, useContext, useEffect } from "react";
import { Context } from "../App";
function Time() {
 const { search, time, setTime, timezone, setTimeZone} = useContext(Context);
const updateTime = useCallback((e) => {
 if (e.keyCode === undefined){return}
  if (e.keyCode == 13) { 
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
    
 }
});
  useEffect(() => {
  var searcht = document.getElementById("search-tag");
   if (searcht){
      searcht.addEventListener('keydown' ,updateTime());
      return ( ) => { 
          searcht.removeEventListener('keydown' ,updateTime());
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
