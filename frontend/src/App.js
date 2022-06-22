//import React from 'react';
import data from "./data";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomeScreen from "./Screen/HomeScreen";


function App() {
  return (
    <BrowserRouter>
    <div >
      <header >
        <main>
          <Routes>
              <Route path="/" element={<HomeScreen />}/>
          </Routes>
        </main>
      </header>
    </div>
  </BrowserRouter>
  );
}

export default App;
