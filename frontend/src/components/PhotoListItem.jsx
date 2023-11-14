import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    id,
    location,
    urls,
    user,
    // username,
    // imageSource,
    // profile,
    liked,
    setLiked,
    openModal,
  } = props; // added openModal

  return (
    <div className="photo-list__item" >
      {/* added onclick listener to open modal */}
      <PhotoFavButton id={id} liked={liked} setLiked={setLiked} />
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
