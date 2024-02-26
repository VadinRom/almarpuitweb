import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>TERE TULEMAST</h1>
      <p>OÜ Almar Puit kodulehele!</p>
    </div>
  );
}

export default HeroSection;
