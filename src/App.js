import './App.css';
import Date from "./components/Date";
import Weather from "./components/Weather";
import Search from "./components/Search";
import { createContext, useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [temp, setTemp] = useState("");
  return (
    <div className="App">
      <Context.Provider value ={{search, setSearch, date, setDate, temp, setTemp}}>
      <Search />
      <Date />
      <Weather />
      </Context.Provider>
    </div>
  );
}

export default App;
