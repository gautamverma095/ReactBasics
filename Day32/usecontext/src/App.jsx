import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import {AppContext} from "./Context/ContextProvider"
import Toggle from './Component/Toggle';

function App() {

  // step 3 consuming
  const {theme} = useContext(AppContext)

  return (
    <div className="App">
<h1>theme: {theme}</h1>
      <Toggle/>
    </div>
  );
}

export default App;
