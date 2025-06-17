import { Routes, Route } from "react-router-dom";
import Header from './Header/Header'
import Home from "./Home/Home";
import About from "./About/About";
import { Fragment } from "react";
import Catalog from "./Catalog/Catalog";
import Footer from "./Footer/Footer";

function App() {  
  return (
    <Fragment>
    <Header />
    <Routes>
    <Route path ='/' element =  {<Home />}/>
    <Route path ='/about' element =  {<About />}/>
    <Route path ='/catalog' element =  {<Catalog />}/>
    </Routes>
    <Footer/>
    </Fragment>
  )
}

export default App
