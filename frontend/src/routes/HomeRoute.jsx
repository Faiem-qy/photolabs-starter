import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = () => {
  const [liked, setLiked] = useState([]);

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation liked={liked} setLiked={setLiked}/>
      <PhotoList liked={liked} setLiked={setLiked}/>
    </div>
  );
};

export default HomeRoute;
