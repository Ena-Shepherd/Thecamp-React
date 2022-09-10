import React from "react";
import { useState } from "react";
import Gallery from "./Gallery";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function Gdisplay() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <button onClick={() => setButtonPopup(true)}>Gallerie</button>
            <Gallery trigger={buttonPopup} setTrigger={setButtonPopup}>
                {/* carousel */}
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="..." class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </Gallery>
        </div>
    );
}

export default Gdisplay;