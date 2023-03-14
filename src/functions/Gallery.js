import React from 'react';
import { CgClose } from 'react-icons/cg'
import './Gallery.css';

function Gallery(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>
                    <CgClose color='white' />
                </button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Gallery;