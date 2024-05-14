// app.jsx
import React from "react";
import "../Home/Home.css"; // Asegúrate de importar el archivo CSS
import fondoperritos from "../../assets/img/fondoperritos.png";
// import {Propagandasalud} from "../PropagandaSalud/Propagandasalud";
import Carrousel from "../Carrousel/Carrousel";
import Planes from "../Planes/Planes";
function Home() {
    return (
        /** AQUI VA EL NAVBAR */
        <div className="app-container">
            {/* <Propagandasalud /> */}

            <div className="imagen-carrousel">
                <img className="background-image" src={fondoperritos} alt="Fondo FotoJavaPet" />
                <Carrousel />
            </div>
            {/* <Propagandasalud/>

<div className='imagen-carrousel'>
<img className="background-image" src={fondoperritos} alt="Fondo FotoJavaPet" />
<Carrousel/>
</div>

<Planes/> */}

            <Planes />
        </div>
    );
}

export default Home;
