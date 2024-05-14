import React, { useState } from 'react';
import './App.css'; 
import LandingPage from './Components-0/LandingPage/LandingPage';
import ScrollReveal from 'scrollreveal';


function App() {
  useEffect(() => {
    ScrollReveal().reveal('.my-element', { delay: 200 });
  }, []);

  return (
    <div className='my-element'>
      <LandingPage/>
    </div>

  );
}

export default App;
