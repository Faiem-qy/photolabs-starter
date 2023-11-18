import React, { useEffect } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    id,
    location,
    urls,
    user,
    liked,
    likedPhoto,
    togglePhotoModal,
    modalData,
    modalState
  } = props;

  const handleClick = () => {
    if(!modalState && modalState !== undefined){
      togglePhotoModal();
      modalData(props);
    }
  }

  return (
    <div className="photo-list__item" >
      <PhotoFavButton id={id} liked={liked} likedPhoto={likedPhoto} />
      <img
        className="photo-list__image"
        src={urls.regular}
        alt={`Photo ${id}`}
        onClick={() => handleClick()}
      />
      <div className="photo-list__user-details">
        <img
        className="photo-list__user-profile"
        src={user.profile}
        alt={`Profile of ${user.username}`}
      />
        <div className="photo-list__user-info">
          {user.name}
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
