import ComC from "./ComC";
import { FirstName,LastName } from "./App";
import { useContext } from "react";

function ComB() {

  const fname = useContext(FirstName)
  const lname = useContext(LastName)

    return (
      <>
      <h1>My name is {fname} {lname} </h1>
      </>
    );
  }
  
  export default ComB;