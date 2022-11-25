import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [data,setData] = useState([])
  const [load,setLoad]  =useState(false)


  useEffect(() => {
     renderData()
  },[])



const renderData = async () => {

  try{
    setLoad(true)
    let res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
     res = await res.json()
     console.log(res);
     setData(res)
     setLoad(false)

  }
  catch(error){
    console.log(error);
    setLoad(false)
  }

}
if(load)
{
  return <h1>Loading</h1>
}
  

 
  return (
    <div className="App">
    <h1>Posts</h1>
    <button onClick={renderData}>Show data</button>

   {
      data.map((el,index) => (
        <li key={index}>{el.title}</li>
      ))
    }
    
    </div>
  );
}

export default App;
