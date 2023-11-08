import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */
  const { username, imageSource, id, location, profile } = props;

return (
  <div className="photo-list-item">
    <img src={imageSource} alt={`Photo ${id}`}/>
    <div className="photo-info">
      <img src={profile} alt={`Profile of ${username}`}/>
      <h3>{username}</h3>
      <p>{location.city}, {location.country}</p>
    </div>
  </div>
)

};

export default PhotoListItem;
