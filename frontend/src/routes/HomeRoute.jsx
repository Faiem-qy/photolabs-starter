import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";

import photos from "mocks/photos";

const HomeRoute = () => {
  const [liked, setLiked] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photoData) => {
    setModalOpen(true);
    setSelectedPhoto(photoData);
  };

  const closeModal = () => {
    console.log("closing modal");
    setModalOpen(false);
    // setSelectedPhoto(null);
  };
  // function to close modal

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
