import React from "react"
import ReactDOM from "react-dom"

let time = new Date()
time = time.getHours()

const css ={
  color:"green"
}
 
let greet = ""
if(time > 1 && time < 12){
  greet = "Good Morning"
  // css.color = "green"
}
else if(time >= 12 && time < 19){
 greet = "Good Afternoon";
}
else{
   greet = "Good Night";
}

ReactDOM.render(
  <h1>
    Hello sir, <span style={css}>{greet}</span>{" "}
  </h1>,
  document.getElementById("root")
);
