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


const PhotoDetailsModal = ({ isOpen, closeModal, selectedPhoto, liked, setLiked ,openModal }) => {
  console.log("Selected photo in modal:", selectedPhoto);
  if (!isOpen || !selectedPhoto) {
    return null;
  }
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {selectedPhoto && (
        <div className="photo-details-modal__header">
          <div className="photo-details-modal__top-bar">
            <div className="photo-details-modal__images">
              <PhotoFavButton id={selectedPhoto.id} liked={liked} setLiked={setLiked} />
            <img className="photo-details-modal__image"
              src={selectedPhoto.urls.regular}
              alt={`Large version of ${selectedPhoto.id}`}
              // display large photo when modal is opened
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
            <hr></hr>


          <div className="similar-photos">
            <h3 className="photo-details-modal__images">Similar Photos</h3>
            <div className="photo-details-modal__photographer-details">
            <>   
            {Object.values(similarPhotosObj).map((photoData, i) => {
              if (photoData.id === selectedPhoto.id) {
                // return Object.values(photoData.similar_photos).map((similar, i) => (
                  return(
                    // console.log("Photodata of Clicked Photo", Object.values(photoData.similar_photos))
                    <PhotoList key={selectedPhoto.id} photoData={Object.values(photoData.similar_photos)} liked={liked} setLiked={setLiked} openModal={openModal} />
                  )
                    // <li className="photo-details-modal__images" key={similar.id}>
                      // <PhotoFavButton id={similar.id} liked={liked} setLiked={setLiked} />
                    //     <img className="photo-details-modal__image"
                    //       src={similar.urls.regular}
                    //       alt={`Similar version of ${similar.id}`}
                    //     />
                    //   <div className="photo-details-modal__photographer-info">
                    //     <img
                    //       className="photo-details-modal__photographer-profile"
                    //       src={similar.user.profile}
                    //     />
                    //     <span>{selectedPhoto.user.name}</span>
                    //     <div className="photo-details-modal__photographer-location">
                    //       {similar.location.city}, {similar.location.country}
                    //     </div>
                    //   </div>
                    // </li>
                  // ));
                }
              })}
            </>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;
