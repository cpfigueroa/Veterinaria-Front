
// Carousel.jsx
import React from 'react';
import './Slider.css'; // Asegúrate de importar correctamente el componente Slider
import './Carousel.css'; // Si tienes un archivo de estilos para Carousel, asegúrate de importarlo aquí

const Carousel = () => {
  return (
    <div className="slider-container">
      <Slider /> {/* Utiliza el componente Slider aquí */}
    </div>
  );
}

export default Carousel;

