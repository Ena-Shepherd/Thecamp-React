import React from 'react';
import Body from './Body';
import Places from "./Places"
import "./Places.css"
import Navbar from './Navbar';

class Fetch extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'React',
            ApiData: [],
            number: 0
        };
    }

    componentDidMount() {
        console.log('app mounted');
        /*global fetch */
        fetch('https://api-gw.thecamp.fr/webflow/places')
            .then(data => data.json())
            .then(data => this.setState({ ApiData: data }));
    }

    render() {
      const data = this.state.ApiData;
      Places.data = this.data;
        return (
          <>
            {(data && data[2]) &&
              <div>
                <Body data={data} />
                <Places data={data} />
                <Navbar />
              </div>
            }
          </>
        );
    }
}

export default Fetch;