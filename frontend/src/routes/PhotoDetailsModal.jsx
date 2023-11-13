import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ isOpen, onClose, selectedPhoto }) => {
  // added onClose
  console.log("Modal isOpen:", isOpen);
  console.log("Selected photo in modal:", selectedPhoto);
  if (!isOpen || !selectedPhoto) {
    return null;
  }


  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {selectedPhoto && (
        <div>
          <div className="main-photo">
            <img
              src={selectedPhoto.urls.regular}
              alt={`Large version of ${selectedPhoto.id}`}
              // display large photo when modal is opened
            />
            <p>{selectedPhoto.user.name}</p>
            <p>
              {selectedPhoto.location.city}, {selectedPhoto.location.country}
            </p>
          </div>
          {/* added name and location */}
          <div className="similar=photos">
            <h3>Similar Photos</h3>
            <ul>
              {Object.values(selectedPhoto.similar_photos).map(
                (similarPhoto) => (
                  <li key={similarPhoto.id}>
                    <img
                      src={similarPhoto.urls.regular}
                      alt={`Similar version of ${similarPhoto.id}`}
                    />
                    <p>{similarPhoto.user.name}</p>
                    <p>
                      {selectedPhoto.location.city},
                      {selectedPhoto.location.country}
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;
