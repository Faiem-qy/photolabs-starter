import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photoData, liked, likedPhoto, modalState, togglePhotoModal, selectedPhoto,modalData}) => {
  return (
    <ul className="photo-list">
      {photoData.map((photo) => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          location={photo.location}
          urls={photo.urls}
          user={photo.user}
          liked={liked}
          likedPhoto={likedPhoto}
          modalState={modalState}
          togglePhotoModal={togglePhotoModal}
          selectedPhoto={selectedPhoto}
          modalData={modalData}
        />
      ))}
    </ul>
  );
};

export default PhotoList;