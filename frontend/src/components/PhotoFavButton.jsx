import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };


  return (
    <div className={`photo-list__fav-icon ${isActive ? 'active' : 'inactive'}`}
    onClick={handleClick}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
