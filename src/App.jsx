import "./App.css";
import Floc from "./components/Floc";
import { useState, useEffect } from "react";
function App() {
  /* let array = ["❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄"]; */

  let [flocs, setFlocs] = useState(crearFlocs());

  function crearFlocs() {
    return [
      nouFloc(),
      nouFloc(),
      nouFloc(),
      nouFloc(),
      nouFloc(),
      nouFloc(),
      nouFloc(),
      nouFloc(),
      nouFloc(),
      nouFloc(),
      nouFloc(),
      nouFloc(),
    ];
  }
  function nouFloc() {
    return { x: -10, y: -10 };
  }

  setFlocs((tots) => moureFlocs(tots));

  function moureFlocs(flocs) {
    return flocs.map((floc) => moureFloc(floc));
  }

  function moureFloc({ x, y }) {
    return { x: x + 1, y: y + 1 };
  }

  return (
    <div className="App">
      <Floc />
    </div>
  );
}

export default App;
