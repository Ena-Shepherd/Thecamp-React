import React from "react";
import { useState } from "react";
import ImageSlider from "../components/ImageSlider";
import Gallery from "./Gallery";
import './Gdisplay.css';

function Gdisplay(props) {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <button className="button-31" onClick={() => setButtonPopup(true)}>Gallerie</button>
            <Gallery trigger={buttonPopup} setTrigger={setButtonPopup}>
                {/* carousel */}
                <ImageSlider
                    data={props.data}
                    nb={props.nb}
                />
            </Gallery>
        </div>
    );
}

export default Gdisplay;