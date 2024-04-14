import './App.css';
import React from 'react';
import { Main } from './main';
import { MainScreen } from './MainScreen';
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/:username" element={<MainScreen />}/>
      </Routes>
    </div>
  );
}

export default App;
