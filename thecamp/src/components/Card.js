import React from 'react';
import './Card.css'

class Card extends React.Component {
    render () {
        return (
        <>
            <div className="card border-0">
                <img src={this.props.data[this.props.nb].media.url} className="item card"/>
            </div>
            <p className="flex-name">{this.props.data[this.props.nb].name}</p>
            {/* <div className="container" dangerouslySetInnerHTML={{__html: this.state.data}} /> */}
        </>
        );
    }
}
export default Card;