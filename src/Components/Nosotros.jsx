import React from 'react';
import "./Nosotros.css"

export const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <h2 className="titulo-destacado">Sobre Nosotros</h2>
      <div className="contenido">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim, mauris at commodo hendrerit, dui nisi congue arcu, sit amet tincidunt elit libero nec turpis. Quisque eget lorem eu elit tempus lobortis a eu eros. Nulla non orci nec eros eleifend efficitur. Integer non tincidunt elit. Pellentesque id dui vel nulla .
        </p>
        <p>
          Duis nec vestibulum nunc. Phasellus egestas nec ligula in lacinia. Sed malesuada dapibus dolor nec viverra. Sed placerat augue eget suscipit pellentesque. Nulla facilisi. Phasellus vestibulum, metus eu vehicula eleifend, eros sem finibus est, non rhoncus tortor leo id nisl. Cras vehicula congue erat, et blandit risus venenatis vel. Proin tempus eleifend arcu, at cursus libero rutrum et. Vivamus non feugiat metus. 
        </p>
        {/* Agrega más párrafos aquí si es necesario */}
      </div>
    </div>
  );
};

