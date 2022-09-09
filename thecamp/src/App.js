import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Test from './components/Test';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
