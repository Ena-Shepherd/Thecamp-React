import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Body.css'
import videoBg from '../images/videoBg.mp4'

class Body extends React.Component {
    render() {
          return (
            <>
                <div className='body-fixed'>
                    <video src={videoBg} autoPlay loop muted />
                </div>
            </>
          );
      }
}

export default Body;