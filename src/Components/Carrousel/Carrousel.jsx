// app.jsx
import React, { useState } from 'react';
import alimentoGato from '../../assets/img/alimentogato.png';
import alimentoGato1 from '../../assets/img/alimentogato1.png';
import alimentoGato2 from '../../assets/img/alimentogato2.jpg';
import alimentoGato3 from '../../assets/img/alimentogato3.jpg';
import alimentoGato4 from '../../assets/img/alimentogato4.jpg';
import alimentoGato5 from '../../assets/img/alimentogato5.jpg';
import alimentoGato6 from '../../assets/img/alimentogato6.jpg';
import alimentoPerro1 from '../../assets/img/alimentoperro1.jpg';
import alimentoPerro2 from '../../assets/img/alimentoperro2.jpg';
import alimentoPerro3 from '../../assets/img/alimentoperro3.jpg';
import alimentoPerro4 from '../../assets/img/alimentoperro4.jpg';
import alimentoPerro5 from '../../assets/img/alimentoperro5.jpg';
import alimentoPerro6 from '../../assets/img/alimentoperro6.jpg';

function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    alimentoGato,
    alimentoGato1,
    alimentoGato2,
    alimentoGato3,
    alimentoGato4,
    alimentoGato5,
    alimentoGato6,
    alimentoPerro1,
    alimentoPerro2,
    alimentoPerro3,
    alimentoPerro4,
    alimentoPerro5,
    alimentoPerro6
  ];

  const totalImages = images.length;

  const handleLeftArrowClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="app-container-carousel">
      
      <div className="carousel" style={{ marginTop: '3cm', width:"100%"}}>
        <div className="left-arrow" onClick={handleLeftArrowClick}>&#9664;</div>
        <div className="carousel-content">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index}`} style={{ width: `${100 / totalImages}%`, transform: `translateX(-${100 * currentIndex}%)` }} />
          ))}
        </div>
        <div className="right-arrow" onClick={handleRightArrowClick}>&#9654;</div>
      </div>
    </div>



  );
}

export default Carrousel;
