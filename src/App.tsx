import { Routes, Route } from "react-router-dom";
import Header from './Header'
import Home from "./Home";
import About from "./About";
import { Fragment } from "react";
import Catalog from "./Catalog";

function App() {  
  return (
    <Fragment>
    <Header />
    <Routes>
    <Route path ='/' element =  {<Home />}/>
    <Route path ='/about' element =  {<About />}/>
    <Route path ='/catalog' element =  {<Catalog />}/>
    </Routes>
    </Fragment>
  )
}

export default App
