// Otro archivo donde se importa Bienvenida.js
import React from 'react';
import { Bienvenida } from './Bienvenida';
import { Nosotros } from './Nosotros';
import { Adoption } from './Adoption';
import { Planes } from './Planes';
import { Carousel } from 'react-bootstrap';


const LandingPage = () => {
  return (
    <div>
        <Bienvenida/>
        <Nosotros/>
        <Adoption/>
        <Planes/>
        <Carousel/>
    </div>
  );
};

export default  LandingPage;

