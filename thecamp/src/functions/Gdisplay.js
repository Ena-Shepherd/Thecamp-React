import React from "react";
import { useState } from "react";
import ImageSlider from "../components/ImageSlider";
import Gallery from "./Gallery";
import { SliderData } from "../components/SliderData";

function Gdisplay(props) {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <p>toto{props.nb}</p>
            <button onClick={() => setButtonPopup(true)}>Gallerie</button>
            <Gallery trigger={buttonPopup} setTrigger={setButtonPopup}>
                {/* carousel */}
                <ImageSlider
                    slides={SliderData}
                    data={props.data}
                    nb={props.nb}
                />
            </Gallery>
        </div>
    );
}

export default Gdisplay;