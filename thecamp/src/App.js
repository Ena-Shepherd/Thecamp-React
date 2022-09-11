import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Places from './components/Fetcher';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Places />
              </>
            } />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
