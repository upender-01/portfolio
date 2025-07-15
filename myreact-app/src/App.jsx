import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import { Connecting } from "./Components/connect";
import { Footer } from "./Components/Footer";
function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/Connecting" element={<Connecting/>} ></Route>
      <Route path="/footer" element={<Footer/>} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;