// var React = require("react")
// var ReactDom = require("react-dom")

import React  from "react"
import ReactDom from "react-dom"
import "./index.css"

//Babel is a javascript compiler so that browser can understand
//render means to show => (what to show,where to show,callback function)
//JSX -> javascript extension or javascript xml

const fname = "Gautam"
const lname = "verma"
const img1 = "https://picsum.photos/500/300?random=1";
const img2 = "https://picsum.photos/500/300?random=2";
const img3 = "https://picsum.photos/500/300?random=3";

const css = {
  
  display: "flex",
  width: "80px"
}

   // jsx expression in react ->  <h1>Hello World</h1> 

ReactDom.render(
  <>
    <h1>{`my name is ${fname} ${lname}`}</h1>
    {/* <h1>My lucky number is {2+3}</h1> */}
    <div style={css}>
      <img src={img1} alt="error" />
      <img src={img2} alt="error" />
      <img src={img3} alt="error" />
    </div>

    {/* <h1>Hello World</h1> 
    <p> again</p> 
    <p> again</p> */}
  </>,

  document.getElementById("root")
);