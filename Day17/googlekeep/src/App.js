import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Createnote from "./Createnote";
import Note from "./Note";
import { useState } from "react";

function App() {
  const [allitems, setAllitems] = useState([]);

  const addItems = (note) => {
    setAllitems((preVal) => {
      return [...preVal, note];
    });
  };

  const deleteItem = (id) => {
    setAllitems((preVal) => {
      return preVal.filter((el, index) => {
        return id !== index;
      });
    });
  };

  return (
    <>
      <Header />
      <Createnote addText={addItems} />

      {allitems.map((el, index) => {
        return (
          <Note
            key={index}
            title={el.title}
            content={el.content}
            id={index}
            deleteitem={deleteItem}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
