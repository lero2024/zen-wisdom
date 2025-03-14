import React from 'react';
import MeditationTimer from '../components/MeditationTimer';

const Meditation = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">定</h1>
      </div>
      
      <section className="meditation-timer-section">
        <MeditationTimer />
      </section>
    </div>
  );
};

export default Meditation;
