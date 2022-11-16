import logo from './logo.svg';
import './App.css';
import react,{useState} from "react"

function App() {
  let time = new Date().toLocaleTimeString()

  const [ctime,setCtime] = useState(time)

  // function tt() {
  //   time = new Date().toLocaleTimeString();
  //   setCtime(time);
  // }
  // setInterval(tt,1000)

  setInterval(function tt(){
     time = new Date().toLocaleTimeString();
    setCtime(time)
  },1000)


  return (
    <>
  <h1>{ctime}</h1>
    </>
  );
}

export default App;
