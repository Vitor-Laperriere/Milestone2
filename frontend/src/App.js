//import React from 'react';
import data from "./data";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ToolBar from './components/ToolBar';


function App() {
  return (
    <BrowserRouter>
    <div >
      <header >
        <main>
          <Routes>
              <Route path="/" element={<ToolBar />}/>
          </Routes>
        </main>
      </header>
    </div>
  </BrowserRouter>
  );
}

export default App;
