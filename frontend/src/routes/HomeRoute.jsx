import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";

// import photos from "mocks/photos";
import useApplicationData from "hooks/useApplicationData";
import useDarkMode from "hooks/useDarkMode";

const HomeRoute = () => {
  const {toggleMode, mode} = useDarkMode();
  const {modalData, selectedPhoto, togglePhotoModal, modalState, likedPhoto, liked, photoData, topicData, topicId, topicIdChosen, photoByTopicData} = useApplicationData()

  const photos = topicId ? photoByTopicData : photoData;

  return (
    <div className="home-route">
      <TopNavigation liked={liked} topicIdChosen={topicIdChosen} topicData={topicData} toggleMode={toggleMode} mode={mode}/>
      <PhotoList photoData={photos} liked={liked} likedPhoto={likedPhoto} togglePhotoModal={togglePhotoModal} modalData={modalData} modalState={modalState}/>
      
      {modalState && (
        <PhotoDetailsModal modalState={modalState} togglePhotoModal={togglePhotoModal} selectedPhoto={selectedPhoto} liked={liked} likedPhoto={likedPhoto} photoData={photoData}/>
      )}
    </div>
  );
};

export default HomeRoute;
