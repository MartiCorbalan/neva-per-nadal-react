import "./App.css";
import Floc from "./components/Floc";
import { useState, useEffect } from "react";

/* let array = ["❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄", "❄"]; */

export default function App() {
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
      nouFloc(),
      nouFloc(),
      nouFloc(),
      nouFloc(),
      nouFloc(),
    ];
  }

  function nouFloc() {
    return { x: Math.random() * 100 + 1, y: -10 };
  }

  function moureFlocs(flocs) {
    return flocs.map((floc) => moureFloc(floc));
  }

  function moureFloc({ x, y }) {
    if (y >= 100) {
      return {
        x: x + Math.random() * 1 - Math.random() * 1,
        y: -10 + Math.random(),
      };
    } else {
      return {
        x: x + Math.random() * 1 - Math.random() * 1,
        y: y + Math.random(),
      };
    }
  }

  let [flocs, setFlocs] = useState(crearFlocs());

  useEffect(() => {
    setInterval(() => {
      setFlocs((tots) => moureFlocs(tots));
    }, 50);
  }, []);

  return (
    <div className="App">
      <div className="Display">
        {flocs.map((floc) => (
          <>
            <Floc x={floc.x} y={floc.y} />
          </>
        ))}
      </div>
    </div>
  );
}
