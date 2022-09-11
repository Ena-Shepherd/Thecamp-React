import React from 'react';
import './Card.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Gdisplay from '../functions/Gdisplay';

class Card extends React.Component {
    render () {
        return (
        <>
            <div className='grow'>
                <div className="card border-0 card-description">
                    <img src={this.props.data[this.props.nb].media.url} alt={this.props.data[this.props.nb].media.alt} className="item card" />
                </div>
                <Gdisplay
                    data={this.props.data}
                    nb={this.props.nb}
                />
                <div className='places-description' dangerouslySetInnerHTML={{__html: this.props.data[this.props.nb].description}} />
            </div>
            <div className='flex-name'>
                <p>{this.props.data[this.props.nb].name}</p>
                <p className="flex-description">{this.props.data[this.props.nb].baseline}</p>
            </div>
        </>
        );
    }
}
export default Card;