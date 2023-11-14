import React, { useState , useEffect} from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({id, liked, setLiked}) {
  const [isActive, setIsActive] = useState(false);

  function handleClick(){
    setIsActive(!isActive);
    setLiked((prev) => [...prev, id]);
    console.log(liked)
  };


  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isActive}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
