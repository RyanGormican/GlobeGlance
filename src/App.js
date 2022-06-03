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
      <header className="App-header">
   
      </header>
    </div>
  );
}

export default App;
