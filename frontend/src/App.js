//import React from 'react';
import data from "./data";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomeScreen from "./Screen/HomeScreen";
import List from "./Screen/List";
import Cart from "./Screen/Cart";
import Login from "./Screen/Login";


function App() {
  return (
    <BrowserRouter>
    <div >
      <header >
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />}/>
            <Route path="/list" element={<List />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/login" element={<Login />}/>
          </Routes>
        </main>
      </header>
    </div>
  </BrowserRouter>
  );
}

export default App;
