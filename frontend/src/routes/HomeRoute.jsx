import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";

import photos from "mocks/photos";
import useApplicationData from "hooks/useApplicationData";

const HomeRoute = () => {
  const initialValues = {liked:[], modalaOpen:false, selectedPhoto:null}
  const [liked, setLiked, openModal, modalOpen, selectedPhoto, closeModal] = useApplicationData(initialValues)
  //too many imports?
  //import in each file instead of giving it through props?

  return (
    <div className="home-route">
      <TopNavigation liked={liked} setLiked={setLiked} />
      <PhotoList photoData={photos} liked={liked} setLiked={setLiked} openModal={openModal} />
      
      {modalOpen && (
        <PhotoDetailsModal isOpen={modalOpen} closeModal={closeModal} selectedPhoto={selectedPhoto} liked={liked} setLiked={setLiked} openModal={openModal}/>
      )}
    </div>
  );
};

export default HomeRoute;
