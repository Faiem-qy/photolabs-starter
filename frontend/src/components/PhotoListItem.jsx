import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  /* Insert React */
  const { username, imageSource, id, location, profile } = props;

  return (
    <>
    <div className="photo-list__item">
      
      <PhotoFavButton/>
      <img
        className="photo-list__image"
        src={imageSource}
        alt={`Photo ${id}`}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt={`Profile of ${username}`}
        />
        <div className="photo-list__user-info">
          <h3>{username}</h3>
          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default PhotoListItem;
