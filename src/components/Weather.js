import React, { useContext } from "react";
import { Context } from "../App";
function Weather() {
 const { search, temp, setTemp} = useContext(Context);
const updateTemp = useCallback((event) => {

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

