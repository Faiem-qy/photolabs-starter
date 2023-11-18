import React, { useState , useEffect} from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({id, liked, likedPhoto}) {

  function handleClick(){
    likedPhoto(id)
  };


  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={liked.includes(id)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
