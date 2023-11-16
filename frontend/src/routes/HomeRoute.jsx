import React, { useEffect } from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";

// import photos from "mocks/photos";
import useApplicationData from "hooks/useApplicationData";

const HomeRoute = () => {
  const {modalData, selectedPhoto, togglePhotoModal, modalState, likedPhoto, liked, photoData, topicData} = useApplicationData()

  return (
    <div className="home-route">
      <TopNavigation liked={liked} topicData={topicData}/>
      <PhotoList photoData={photoData} liked={liked} likedPhoto={likedPhoto} modalState={modalState} togglePhotoModal={togglePhotoModal} selectedPhoto={selectedPhoto} modalData={modalData}/>
      
      {modalState && (
        <PhotoDetailsModal modalState={modalState} togglePhotoModal={togglePhotoModal} selectedPhoto={selectedPhoto} liked={liked} likedPhoto={likedPhoto}/>
      )}
    </div>
  );
};

export default HomeRoute;
