import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

import photos from "mocks/photos";


const PhotoList = ({ liked, setLiked, openModal }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          username={photo.user.username}
          imageSource={photo.urls.regular}
          id={photo.id}
          location={photo.location}
          profile={photo.user.profile}
          liked={liked}
          setLiked={setLiked}
          openModal={openModal} // Pass the openModal
        />
      ))}
    </ul>
  );
};

export default PhotoList;