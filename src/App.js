import React, { useState } from 'react';
import Login from './components/Login/Login';
import Report from './components/Report/Report';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Login'>
      <Login/>
      </div>
      <div className='Report'>
      <Report/>
      </div>
    </div>
  );
}

export default App;
