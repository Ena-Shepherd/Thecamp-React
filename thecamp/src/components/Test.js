import React from 'react';

class Test extends React.Component {
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
            .then(data => this.setState({ ApiData: data }, () => console.log(this.state.ApiData)));
    }

    render() {
        const data = this.state.ApiData;
        return (
          <>
            {(data && data[2]) &&
              <div>
                <p>{data[2].name}</p>
              <img src={data[2].galerie[0].url} alt={data.name}></img>
              </div>
            }
          </>
        );
    }
}
export default Test;