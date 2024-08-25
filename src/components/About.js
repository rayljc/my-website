import React from 'react';
import aboutImage from '../assets/about-image.jpg';

const About = () => {
  return (
    <div>
      <h2>About page title in h2 (optional)</h2>
      <img src={aboutImage} alt="About" style={{ width: '80%', height: 'auto', marginTop: '20px' }} />
      <p>This is the About page description.</p>
    </div>
  );
};

export default About;
