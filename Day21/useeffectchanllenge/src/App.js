import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    document.title= `You clicked me ${num}`
  });

  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Clicked me {num}
      </button>
    </>
  );
}

export default App;
