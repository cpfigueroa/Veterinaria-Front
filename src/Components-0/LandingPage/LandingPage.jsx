import React from "react";
import "./LandingPage.css";

function LandingPage() {
    return (
        <div>
            <main className="main">
                {/* Sección HOME */}
                <section className="home section" id="home">
                    <div className="home__container container grid">
                        <div>
                            <img src="assets/img/home.png" alt="" className="home__img" />
                        </div>
                        
                        <div className="home__data">
                            <div className="home__header">
                                <h1 className="home__title">Veterinaria Javapet</h1>
                                <h2 className="home__subtitle">Beats 3</h2>
                            </div>

                            <div className="home__footer">
                                <h3 className="home__title-description">Overview</h3>
                                <p className="home__description">Enjoy award-winning Beats sound with wireless listening freedom and a sleek, 
                                    streamlined design with comfortable padded earphones, delivering first-rate playback.
                                </p>
                                <a href="#" className="button button--flex">
                                    <span className="button--flex">
                                        <i className="ri-shopping-bag-line button__icon"></i></i> Add to Bag
                                    </span>
                                    <span className="home__price">$299</span>
                                </a>
                            </div>
                        {/* </div> */}
                    </div>
                </section>
                
                {/* Sección SPECS */}
                <section className="specs section grid" id="specs">
                    <h2 className="section__title section__title-gradient">Services</h2>

                    <div className="specs__container container grid">
                        <div className="specs__content grid">
                            <div className="specs__data">
                                <i className="ri-bluetooth-line specs__icon"></i>
                                <h3 className="specs__title">Connection</h3>
                                <span className="specs__subtitle">Bluetooth v5.2</span>
                            </div>
        
                            <div className="specs__data">
                                <i className="ri-battery-charge-line specs__icon"></i>
                                <h3 className="specs__title">Battery</h3>
                                <span className="specs__subtitle">Duration 40h</span>
                            </div>
        
                            <div className="specs__data">
                                <i className="ri-plug-line specs__icon"></i>
                                <h3 className="specs__title">Load</h3>
                                <span className="specs__subtitle">Fast charge 4.2-AAC</span>
                            </div>
        
                            <div className="specs__data">
                                <i className="ri-mic-line specs__icon"></i>
                                <h3 className="specs__title">Microphone</h3>
                                <span className="specs__subtitle">Supports Apple Siri <br/> and Google</span>
                            </div>
                        </div>
                        
                        <div>
                            <img src="assets/img/specs.png" alt="" className="specs__img" />
                        </div>
                    </div>
                </section>
                
                {/* Sección CASE */}
                <section className="case section grid" id="case">
                    <h2 className="section__title section__title-gradient">Products</h2>

                    <div className="case__container container grid">
                        <div>
                            <img src="assets/img/case.png" alt="" className="case__img" />
                        </div>

                        <div className="case__data">
                            <p className="case__description">With a comfortable and adaptable case so that you can 
                                store it whenever you want, and keep your durability forever.
                            </p>
                            <a href="#" className="button button--flex">
                                <i className="ri-information-line button__icon"></i> More info
                            </a>
                        </div>
                    </div>
                </section>
                
                {/* Sección DISCOUNT */}
                <section className="discount section">
                    <div className="discount__container container grid">
                        <div className="discount__animate">
                            <h2 className="discount__title">Immerse yourself in <br/> your music</h2>
                            <p className="discount__description">Get it now, up to 50% off.</p>
                            <a href="#" className="button button--flex">
                                <i className="ri-shopping-bag-line button__icon"></i> Publicity
                            </a>
                        </div>

                        <img src="assets/img/discount.png" alt="" className="discount__img" />
                    </div>
                </section>
                
                {/* Sección PRODUCTS */}
                <section className="products section" id="products">
                    <h2 className="section__title section__title-gradient products__line">
                        Adoption <br/> 
                    </h2>

                    <div className="products__container container grid">
                        {/* Aquí van tus artículos de productos */}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default LandingPage;
