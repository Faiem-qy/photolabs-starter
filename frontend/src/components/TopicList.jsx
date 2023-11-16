import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topicData}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((topic) => (
        <TopicListItem
          key={topic.id}
          slug={topic.slug}
          title={topic.title}
          id={topic.id}
        />
        ))}
    </div>
  );
};

export default TopicList;
