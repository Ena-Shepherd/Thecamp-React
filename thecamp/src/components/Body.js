import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Body.css'
import videoBg from '../images/videoBg.mp4'
import Fader from './Fader';

class Body extends React.Component {
    render() {
          return (
            <>
                <div className='body-fixed'>
                    <video src={videoBg} autoPlay loop muted />
                </div>
                <div className='page-title'>
                    <Fader
                        text="Bienvenue."
                        time="2000"
                    />
                    <Fader
                        text="Passez votre souris sur un lieu"
                        time="4000"
                    />
                    <Fader
                        text="pour débuter."
                        time="4000"
                    />
                </div>
            </>
          );
      }
}

export default Body;