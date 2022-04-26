import React from 'react';
import Proptypes from 'prop-types';
import './cards.css';

    function Card({ title, imagenes, text, id }) {
    return (
        <div className="Padre" key={id}>

            <img src={imagenes} alt="" className="" />
            <h3 className="Titulo">{title}</h3>
            <p className="Texto-Horizontal">
                {text}

            </p>
        </div>

    );
}
Card.propTypes = {
    title: Proptypes.string.isRequired,
    id: Proptypes.number,
    imagenes: Proptypes.string,
    text: Proptypes.string
};
export default Card;






    

   
