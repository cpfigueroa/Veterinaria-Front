import React, { useEffect, useState } from 'react';
import '../Bienvenida/B.css';
import fondoPerritos from '../../assets/fondoperritos.png';
import fondo1 from '../../assets/fondo1.jpg';
import fondo2 from '../../assets/fondo2.jpg';

const images = [fondoPerritos, fondo1, fondo2];

const B = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bienvenida">
      <div className="images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Fondo ${index + 1}`}
            className={`image ${index === currentImage ? 'visible' : 'hidden'}`}
          />
        ))}
      </div>
      <h1 className="title">Veterinaria JavaPet los amigos de tu mascota</h1>
    </div>
    
  );
};

export default B;
