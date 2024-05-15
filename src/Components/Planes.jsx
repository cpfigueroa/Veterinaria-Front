import React from "react";
import "./Planes.css"; // Asegúrate de importar tu archivo CSS
import perrito1 from "../assets/perrito1.avif";
import perrito2 from "../assets/perrito2.jpg";
import perrito3 from "../assets/perrito3.jpg";

export const Planes = () => {
    return (
        <div className="planes-container">
            {/* Primer div */}
            <div className="plan">
                <div className="plan-image">
                    <img src={perrito1} alt="Imagen 1" />
                </div>
                <div className="plan-description">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores quas et at error fugiat molestias
                    omnis inventore, dolores exercitationem aut voluptate distinctio neque repellendus reiciendis cum
                    vel porro, animi qui.{" "}
                  </p>
                    
                </div>
            </div>

            {/* Segundo div */}
            <div className="plan">
            <div className="plan-description">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores quas et at error fugiat molestias
                    omnis inventore, dolores exercitationem aut voluptate distinctio neque repellendus reiciendis cum
                    vel porro, animi qui.{" "}
                  </p>
                    
                </div>
                <div className="plan-image">
                    <img src={perrito2} alt="Imagen 2" />
                </div>
            </div>

            {/* Tercer div */}
            <div className="plan">
                <div className="plan-image">
                    <img src={perrito3} alt="Imagen 3" />
                </div>
                <div className="plan-description">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores quas et at error fugiat molestias
                    omnis inventore, dolores exercitationem aut voluptate distinctio neque repellendus reiciendis cum
                    vel porro, animi qui.{" "}
                  </p>
                    
                </div>
            </div>
        </div>
    );
};
