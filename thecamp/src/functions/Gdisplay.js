import React from "react";
import { useState } from "react";
import ImageSlider from "../components/ImageSlider";
import Gallery from "./Gallery";
import { SliderData } from "../components/SliderData";

function Gdisplay() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <button onClick={() => setButtonPopup(true)}>Gallerie</button>
            <Gallery trigger={buttonPopup} setTrigger={setButtonPopup}>
                {/* carousel */}
                <ImageSlider slides={SliderData}/>
            </Gallery>
        </div>
    );
}

export default Gdisplay;