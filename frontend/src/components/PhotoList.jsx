import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

import photos from "mocks/photos";

const PhotoList = ({liked, setLiked}) => {
  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          username={photo.user.username}
          imageSource={photo.urls.regular}
          id={photo.id}
          location={photo.location}
          profile={photo.user.profile}
          liked={liked} setLiked={setLiked}
        />
        ))}
    </ul>
  );
};

export default PhotoList;
