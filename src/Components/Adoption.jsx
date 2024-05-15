import React from "react";
import "./Adoption.css";

export const Adoption = () => {
    return (
        <div>
<h1 id="adoptanos-title" style={{textAlign: 'center', paddingBottom: '25px'}}>ADOPTANOS!!!</h1>
            <div className="adoption-container">
                <div className="card" id="card1">
                    <div className="card-background"></div>
                    <div className="card-content">
                        <h2>Título de la Card 1</h2>
                        <p>Breve descripción de la Card 1.</p>
                    </div>
                </div>

                <div className="card" id="card2">
                    <div className="card-background" style={{backgroundImage: 'url("imagen2.jpg")'}}></div>
                    <div className="card-content">
                        <h2>Título de la Card 2</h2>
                        <p>Breve descripción de la Card 2.</p>
                    </div>
                </div>
                <div className="card" id="card3">
                    <div className="card-background" style={{backgroundImage: 'url("imagen3.jpg")'}}></div>
                    <div className="card-content">
                        <h2>Título de la Card 3</h2>
                        <p>Breve descripción de la Card 3.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
