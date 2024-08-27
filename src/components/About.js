import React from 'react';
import aboutImage from '../assets/about-image.png';

const About = () => {
  return (
    <div>
      <h2>Long-read TRomics Platform</h2>
      <img src={aboutImage} alt="About" style={{ width: '20%', height: 'auto', marginTop: '20px' }} />
      <p>This platform supports the quantification and genotyping of any types of TRs.</p>
    </div>
  );
};

export default About;
