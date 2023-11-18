import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";
import { getSimilarPhotos } from "helpers/modalhelpers";



const PhotoDetailsModal = ({ modalState, togglePhotoModal, selectedPhoto, liked, likedPhoto, photoData }) => {

  const similar = getSimilarPhotos(photoData)

  if (!modalState || !selectedPhoto) {
    return null;
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={togglePhotoModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {selectedPhoto && (
        <div className="photo-details-modal__header">
          <div className="photo-details-modal__top-bar">
            <div className="photo-details-modal__images">
              <PhotoFavButton id={selectedPhoto.id} liked={liked} likedPhoto={likedPhoto} />
            <img className="photo-details-modal__image"
              src={selectedPhoto.urls.regular}
              alt={`Large version of ${selectedPhoto.id}`}
            />
            </div>
          </div>


          <div className="photo-details-modal__header photo-details-modal__photographer-details">
            <img
              src={selectedPhoto.user.profile}
              className="photo-details-modal__photographer-profile"
            />
            <div className="photo-details-modal__photographer-info">
              <span>{selectedPhoto.user.name}</span>
              <div className="photo-details-modal__photographer-location">
                {selectedPhoto.location.city}, {selectedPhoto.location.country}
              </div>
            </div>
          </div>


        </div>
      )}
        <hr></hr>
          <div className="similar-photos">
            <h3 className="photo-details-modal__images">Similar Photos</h3>
            <div className="photo-details-modal__header">
              <PhotoList key={similar.id} photoData={Object.values(similar.similar_photos)} liked={liked} likedPhoto={likedPhoto}/>
            </div>
          </div>
    </div>
  );
};

export default PhotoDetailsModal;
