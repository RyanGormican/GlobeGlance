import './App.css';
import Time from "./components/Time";
import Weather from "./components/Weather";
import Search from "./components/Search";
import { createContext, useEffect, useState } from "react";
export const Context = createContext();
function App() {
  const [search, setSearch] = useState("");
  const [time, setTime] = useState("");
  const [timezone, setTimeZone] = useState("");
  const [temp, setTemp] = useState("");
  return (
    <div className="App">
      <Context.Provider value ={{search, setSearch, time, setTime, timezone, setTimeZone, temp, setTemp}}>
      <Search />
      <Time />
      <Weather />
      </Context.Provider>
    </div>
  );
}

export default App;
