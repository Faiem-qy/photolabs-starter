import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import Button from './Button';

const TopNavigation = ({liked, topicData, topicIdChosen, toggleMode, mode}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">
        PhotoLabs
      </span>
      <TopicList topicData={topicData} topicIdChosen={topicIdChosen}/> 
      <div className="right-nav">
        <FavBadge liked={liked}/>
        <Button toggleMode={toggleMode} mode={mode}/>
      </div>
    </div>
  )
}

export default TopNavigation;