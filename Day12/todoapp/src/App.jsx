import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Todolist from "./Todolist";

function App() {
  const [inputlist, setInputlist] = useState("");

  const [itemList, setItemlist] = useState([]);

  const onInput = (event) => {
    // console.log(event.target.value);
    setInputlist(event.target.value);
  };

  const listofItem = () => {
    setItemlist((oldItem) => {
      return [...oldItem, inputlist];
    });
    setInputlist("");
  };
  const deleteItem = (id) => {
    setItemlist((oldItem) => {
      return oldItem.filter((el, index) => {
        // console.log(index,id);
        return index != id;
      });
    });
  };
  return (
    <>
      <div className="mainDiv">
        <div className="box">
          <br />
          <h1>Todo List</h1>

          <input
            type="text"
            placeholder="Enter Item"
            onChange={onInput}
            value={inputlist}
          />
          <button onClick={listofItem}>+</button>
          <ol>
            {itemList.map((el, index) => {
              return (
                <Todolist
                  item={el}
                  onClick={deleteItem}
                  key={index}
                  id={index}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
