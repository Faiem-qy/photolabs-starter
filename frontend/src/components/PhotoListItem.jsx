import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    id,
    location,
    urls,
    user,
    liked,
    setLiked,
    toggleLiked,
    openModal,
  } = props;

  return (
    <div className="photo-list__item" >
      <PhotoFavButton id={id} liked={liked} setLiked={setLiked} toggleLiked={toggleLiked} />
      <img
        className="photo-list__image"
        src={urls.regular}
        alt={`Photo ${id}`}
        onClick={() => {openModal(props)}}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile}
          alt={`Profile of ${user.username}`}
        />
        <div className="photo-list__user-info">
          <h3>{user.username}</h3>
          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
