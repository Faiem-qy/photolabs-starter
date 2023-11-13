import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';


const PhotoDetailsModal = ({ isOpen }) => {
  if (!isOpen) {
    return null;
  }  
  // add if statement for isOpen

    return (
      
      <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
        <p> modal open</p>
    </div>
  )
};

export default PhotoDetailsModal;
