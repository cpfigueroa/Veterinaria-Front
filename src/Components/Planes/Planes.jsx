
// import React from 'react';
// import '../Planes/Planes.css'; 
 import plan0 from '../../assets/img/plan0.jpg'; 
// import plan1 from '../../assets/img/plan1.jpg'; 
// import plan2 from '../../assets/img/plan2.jpg'; 
// import plan3 from '../../assets/img/plan3.jpg'; 

// function Planes() {
//   return (
//     <div className='planesContainer'>
//       <div className="background-left-image">
//         <img src={plan0} alt="Campaña" />
//       </div>
      
//       <div className="plan-planes">
      
//         <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
//           <img src={plan1} alt="Plan 1" />
//         </a>
//         <a href="https://www.gmail.com/" target="_blank" rel="noopener noreferrer">
//           <img src={plan2} alt="Plan 2" />
//         </a>
//         <a href="https://www.bbva.com/" target="_blank" rel="noopener noreferrer">
//           <img src={plan3} alt="Plan 3"/>
//         </a>

        
//         </div>
//      </div>
//    );
//  }
//  export default Planes;





import React from 'react';
import '../Planes/Planes.css'; // Asegúrate de importar el archivo CSS

function Planes() {
  return (
    <div className='planesContainer'>
      <div className="background-left-image">
        <img src={plan0} alt="Campaña" />
      </div>
      
      <div className="plan-planes">
        {/* Usa el elemento 'a' para enlazar a páginas externas */}
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <button>Primeros Pasos</button>
        </a>
        <a href="https://www.gmail.com/" target="_blank" rel="noopener noreferrer">
          <button>Madurando</button>
        </a>
        <a href="https://www.bbva.com/" target="_blank" rel="noopener noreferrer">
          <button>Adultos</button>
        </a>
      </div>
    </div>
  );
}

export default Planes;
