import logo from './logo.svg';
import './App.css';
import ComA from './ComA';
import { createContext } from 'react';
const FirstName = createContext()
const LastName = createContext()

function App() {
  return (
    <>
      <FirstName.Provider  value={"Gautam"}>
      <LastName.Provider value={"Verma"}>
  
        <ComA/>
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;

export {FirstName,LastName}
