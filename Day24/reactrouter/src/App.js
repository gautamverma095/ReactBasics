import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Error from './Error';
import User from './User';

function App() {
  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route  path='/' element = {<Home/>}>
        <Route  path='/about' element = {<About/>}/>
        <Route  path='/contact' element = {<Contact/>}/>
        <Route path='/user/:name' element = {<User/>}/>
        <Route path='*' element = {<Error/>}/>
        </Route>
      </Routes>

      </BrowserRouter>
    </>
    
  );
}

export default App;
