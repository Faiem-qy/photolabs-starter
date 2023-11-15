import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photoData, liked, setLiked, toggleLiked, openModal }) => {
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
          setLiked={setLiked}
          toggleLiked={toggleLiked}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;