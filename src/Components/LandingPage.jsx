// LandingPage.jsx
import React from "react";
import Slider from "./Slider"; // Importa el componente Slider como export predeterminado
import {Bienvenida} from "./Bienvenida";
import {Nosotros} from "./Nosotros";
import {Adoption} from "./Adoption";
import {Planes} from "./Planes";
import {Veterinario} from "./Veterinario";
import {Testimonios} from "./Testimonios";

const LandingPage = () => {
    return (
        <div>
            {/* <Bienvenida/>
        <Slider />
        <Nosotros/>
      
         */}{" "}
                 <Adoption/>

            <Planes />
            <Veterinario />
            <Testimonios />
        </div>
    );
};

export default LandingPage;
