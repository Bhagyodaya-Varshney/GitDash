import './App.css';
import React from 'react';
import { Main } from './main';
import { MainScreen } from './MainScreen';
import { Route,Routes } from "react-router-dom";
import { Repo } from './mainRepo';
import { Follower } from './followers';
import { Following } from './following';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/username" element={<MainScreen />}/>
        <Route path="/username/repo" element={<Repo />}/>
        <Route path="/username/follower" element={<Follower />}/>
        <Route path="/username/following" element={<Following />}/>
      </Routes>
    </div>
  );
}

export default App;
