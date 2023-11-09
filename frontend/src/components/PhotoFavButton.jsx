import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const colorIt = () => {
    console.log("red")
  };

  return (
    <div className={`photo-list__fav-icon ${isActive ? 'active' : 'inactive'}`}
    onClick={handleClick}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon onClick={colorIt} icon="fa-solid fa-heart" />
      </div>
    </div>
  );
}

export default PhotoFavButton;
