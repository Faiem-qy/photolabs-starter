import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({liked}) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={liked.length > 0} selected={liked.length > 0}/>
    </div>
  ) 
};

export default FavBadge;