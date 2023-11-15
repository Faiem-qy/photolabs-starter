import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import photos from "mocks/photos";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const similarPhotosObj={}
const getSimilarPhotos = photos.map((photo) => {
  let id = photo.id;
  similarPhotosObj[id] = {
    id: photo.id,
    similar_photos: photo.similar_photos,
  }
  return similarPhotosObj[id];
});


const PhotoDetailsModal = ({ modalState, togglePhotoModal, selectedPhoto, liked, likedPhoto }) => {
  console.log("Selected photo in modal:", selectedPhoto);
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
            <div className="photo-details-modal__photographer-details">
            <>   
            {Object.values(similarPhotosObj).map((photoData, i) => {
              if (photoData.id === selectedPhoto.id) {
                  return(
                    <PhotoList key={selectedPhoto.id} photoData={Object.values(photoData.similar_photos)} liked={liked} likedPhoto={likedPhoto}/>
                  )
                }
              })}
            </>
            </div>
          </div>
    </div>
  );
};

export default PhotoDetailsModal;
