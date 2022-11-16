import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [fullname, setFullname] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const textChange = (event) => {
    // console.log(event.target.name);
    const name = event.target.name;
    const value = event.target.value;

    setFullname((preValue) => {
      return {
        ...preValue,
        [name]:value
      }

    // console.log(ddd);
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: ddd.lname,
      //     email: ddd.email
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: ddd.fname,
      //     lname: value,
      //     email: ddd.email
      //   };
      // }
      // else if (name === "email") {
      //   return {
      //     fname: ddd.fname,
      //     lname: ddd.lname,
      //     email: value
      //   };
      // }
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmits}>
        <div>
          <h1>
            Hello {fullname.fname} {fullname.lname} {fullname.email} {" "}
          </h1>
          <input
            name="fname"
            type="text"
            placeholder="Enter your name"
            onChange={textChange}
            value={fullname.fname}
          />
          <input
            name="lname"
            type="text"
            placeholder="Enter your lastname"
            onChange={textChange}
            value={fullname.lname}
          />
          <input
            name="email"
            type="text"
            placeholder="Enter email"
            onChange={textChange}
            value={fullname.email}
          />
          <button type="submit">Click me</button>
        </div>
      </form>
    </>
  );
}

export default App;
