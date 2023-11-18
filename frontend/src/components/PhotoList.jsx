import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photoData, liked, likedPhoto, togglePhotoModal,modalData, modalState}) => {
  
  // Check if photos is not null or undefined before mapping
  //This prevents the map function from being called on a null value
  if (!photoData) {
    return <p>Loading...</p>;
  }

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
          togglePhotoModal={togglePhotoModal}
          modalData={modalData}
          modalState={modalState}
        />
      ))}
    </ul>
  );
};

export default PhotoList;