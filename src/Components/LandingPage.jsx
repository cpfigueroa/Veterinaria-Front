// Otro archivo donde se importa Bienvenida.js
import React from 'react';
import { Bienvenida } from './Bienvenida';
import { Nosotros } from './Nosotros';
import { Adoption } from './Adoption';

const LandingPage = () => {
  return (
    <div>
        <Bienvenida/>
        <Nosotros/>
        <Adoption/>
    </div>
  );
};

export default  LandingPage;

