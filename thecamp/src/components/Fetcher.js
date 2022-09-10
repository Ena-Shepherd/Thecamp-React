import React from 'react';
import Compo1 from './Compo1';

class Places extends React.Component {
  render () {
    console.log(this.data);
    return (  
      <>
        <img src={this.props.data[29].media.url} />
        <p>{this.props.data[29].baseline}</p>
        <img src={this.props.data[2].galerie[0].url} />
        <p>{this.props.data[2].name}</p>
      </>
    )
  }
}

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
            .then(data => this.setState({ ApiData: data }, () => console.log(this.state.ApiData)));
    }

    render() {
      const data = this.state.ApiData;
      Compo1.data = this.data;
        return (
          <>
            {(data && data[2]) &&
              <div>
                <Places data={data}/>

                {/* examples of code fetch */}
                {/* <p>{data[2].name}</p>
              <img src={data[2].galerie[0].url} alt={data.name}></img> */}
              </div>
            }
          </>
        );
    }
}

export default Fetch;