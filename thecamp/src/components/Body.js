import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../images/thecamp-logo.svg'
import './Body.css'

class Body extends React.Component {
    render() {
          return (
            <>
                <nav class="navbar bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                    <img src={require('../images/thecamp-logo.svg')} alt="thecamp-logo" width="250" height="80" class="d-inline-block align-text-top" />

                    {/* radio Component to make */}
                    </a>
                </div>
                </nav>
            </>
          );
      }
}

export default Body;