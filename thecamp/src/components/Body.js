import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Body extends React.Component {
    render() {
          return (
            <>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/watch?v=eSYXrrB1DYM"></iframe>
                </div>
            </>
          );
      }
}

export default Body;