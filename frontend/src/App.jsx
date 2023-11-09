import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";
import PhotoList from "./components/PhotoList";
import TopicList from "components/TopicList";

// const data = [
//   {
//     id: "1",
//     location: {
//       city: "Montreal",
//       country: "Canada",
//     },
//     imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//     username: "Joe Example",
//     profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
//   },
// ];

// add variable to reuse photos template
const photos = new Array(3).fill(0);

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <TopicList/>
      <PhotoList/>
       {/* {photos.map((_, index) => (
        <PhotoListItem
          key={index + 1}
          username={data[0].username}
          imageSource={data[0].imageSource}
          id={data[0].id}
          location={data[0].location}
          profile={data[0].profile}
        />
        ))} */}
       
    </div>
  );
};

export default App;
