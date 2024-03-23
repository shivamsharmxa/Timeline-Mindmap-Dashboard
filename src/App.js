import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/activitySection/sidebar/Sidebar';
import { Body } from './components/activitySection/body Section/Body';


function App() {
  const [activePhase, setActivePhase] = useState('');

  const handlePhaseSelect = (phase) => {
    setActivePhase(phase);
  };

  return (
    <div className='container'>
   
      <Sidebar onPhaseSelect={handlePhaseSelect} />
      <Body activePhase={activePhase} />
    </div>
  );
}

export default App;