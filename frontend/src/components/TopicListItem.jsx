import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, slug, title, topicIdChosen} = props;

  return (
    <>
      { topicIdChosen && (
          <div className="topic-list__item" onClick={()=>topicIdChosen(id)}>
          <span> {title} </span>
        </div>
        )
      }
    </>
  );
};

export default TopicListItem;
