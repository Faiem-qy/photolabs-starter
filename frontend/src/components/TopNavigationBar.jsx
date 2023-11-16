import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({liked, topicData, topicIdChosen}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">
        PhotoLabs
      </span>
      <TopicList topicData={topicData} topicIdChosen={topicIdChosen}/> 
      <FavBadge liked={liked}/>
    </div>
  )
}

export default TopNavigation;