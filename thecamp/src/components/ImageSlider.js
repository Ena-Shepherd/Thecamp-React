import React from "react";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import './ImageSlider.css'

const ImageSlider = (props) => {
    const [current, setCurrent] = useState(0)

    if (props.data[props.nb].galerie === undefined) {
        return (
            <>
                <img src={props.data[props.nb].media.url} alt="whatever" className="image"/>
            </>
        );
    }

    const length = props.data[props.nb].galerie.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    // if(!Array.isArray(props.slides) || props.slides.length <= 0) {
    //     return null;
    // }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {props.data[props.nb].galerie.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                            <>
                                <img src={props.data[props.nb].galerie[index].url} alt="whatever" className="image"/>
                                <p style={{color: "white"}}>{index+1}/{length}<br/></p>
                            </>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider;