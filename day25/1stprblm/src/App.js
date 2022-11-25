import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import  Singlepage  from "./SinglePage";

function App() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    renderData();
  }, [page]);

  const handlePage = (num) => {
    setPage(page + num);
  };

  const renderData = async () => {
    try {
      setLoad(true);
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      res = await res.json();
      setData(res);
      setLoad(false);
    } catch (error) {
      console.log(error);
      setLoad(false);
    }
  };
  if (load) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="App">
      <h1>Posts</h1>



      {data.map((el,index) => {
        return  <Singlepage title = {el.title}  key = {index} id = {el.id}/>
      }) }
      <button
        disabled={page == 1}
        onClick={() => {
          handlePage(-1);
        }}
      >
      
        Prev
      </button>
      <h1>{page}</h1>
      <button
        disabled={page == 10}
        onClick={() => {
          handlePage(1);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default App;
