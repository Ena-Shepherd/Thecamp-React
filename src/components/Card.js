import React from 'react';
import './Card.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Gdisplay from '../functions/Gdisplay';

class Card extends React.Component {
    render() {
        const { data, nb } = this.props;

         if (!data || data.length <= nb || !data[nb]) {
            // Les données ne sont pas trouvées, ne rien afficher
            return null;
        }

        // Les données ont été trouvées, affichez le contenu
        return (
            <div className='card-container'>
                <div className='grow'>
                    <div className="card border-0 card-description">
                        <img src={data[nb].media.url} alt={data[nb].media.alt} className="item card" />
                    </div>
                    <Gdisplay data={data} nb={nb} />
                    <div className='places-description' dangerouslySetInnerHTML={{ __html: data[nb].description }} />
                </div>
                <div className='flex-name'>
                    <p>{data[nb].name}</p>
                    <p className="flex-description">{data[nb].baseline}</p>
                </div>
            </div>
        );
    }
}
export default Card;