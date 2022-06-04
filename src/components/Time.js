import React, {useCallback, useContext, useEffect } from "react";
import { Context } from "../App";
function Time() {
 const { search, time, setTime, timezone, setTimeZone} = useContext(Context);
const updateTime = useCallback((event) => {
   var xmlHttp = new XMLHttpRequest();
   var searching = {search};
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
         callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", "https://timezone.abstractapi.com/v1/current_time/?api_key=e4ff1ca165584a108b275349a35255a8&location=" + searching, true); // true for asynchronous
    xmlHttp.send(null);
 setTime(xmlHttp.datetime);
 setTimeZone(xmlHttp.timezone_abbreviation);
};
  useEffect(() => {
      document.addEventListener("onChange",updateTime);
      return ( ) => { 
         document.removeEventListener("onChange",updateTime);
      };
   }, [updateTime]);
  return (
    
   <div className="time">
   { time }  { timezone } 
</div>
);
}

export default Time;
