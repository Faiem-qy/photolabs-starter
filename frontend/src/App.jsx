import React from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";

// add variable to reuse photos template
// const photos = new Array(3).fill(0);

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    // Topics
    <div className="App">
      <div className="topics-container">
        <h2>Topics</h2>
        <ul>
          {topics.map((topic) => (
            <li key={topic.id}>
              <a href={`/topics/${topic.slug}`}>{topic.title}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* photos */}
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.urls.full} alt={`Photo ${photo.id}`} />
          {Object.values(photo.similar_photos).map((similarPhoto) => (
            <img
              key={similarPhoto.id}
              src={similarPhoto.urls.full}
              alt={`Similar Photo ${similarPhoto.id}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
