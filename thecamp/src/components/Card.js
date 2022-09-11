import React from 'react';
import './Card.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Gdisplay from '../functions/Gdisplay';

class Card extends React.Component {
    render () {
        return (
        <>
            {/* <img src={require('../images/logo-2.svg')} alt="logo" width="250" height="80" class="hide d-inline-block align-text-top" /> */}
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
            <p className="flex-name">{this.props.data[this.props.nb].name}</p>
        </>
        );
    }
}
export default Card;