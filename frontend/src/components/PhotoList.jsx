import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PhotoDetailsModal from "routes/PhotoDetailsModal";


const PhotoList = ({ photoData, liked, likedPhoto, modalState, togglePhotoModal, selectedPhoto,modalData, topicId, photoByTopicData}) => {

  const photos = topicId ? photoByTopicData : photoData;
  // console.log("PHOHTOS",photos)
  // console.log("ID TOPIC",topicId)
  // console.log("BY TOPIC",photoByTopicData)
  
  // Check if photos is not null or undefined before mapping
  //This prevents the subsequent map function from being called on a null value
  if (!photos) {
    return <p>Loading...</p>;
  }

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
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