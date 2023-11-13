import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";

const HomeRoute = () => {
  const [liked, setLiked] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photoData) => {
    console.log("Selected photo data", photoData);
    setSelectedPhoto(photoData);
    setModalOpen(true);
    // added console.log to log the data of the photo when the photo is clicked and the modal is open
  };

  const closeModal = () => {
    console.log("closing modal");
    setSelectedPhoto(null);
    setModalOpen(false);
  };
  // function to close modal

  return (
    <div className="home-route">
      <TopNavigation liked={liked} setLiked={setLiked} />
      <PhotoList liked={liked} setLiked={setLiked} openModal={openModal} />
      {/* <PhotoDetailsModal isOpen={modalOpen} onClose={closeModal} /> */}
      {modalOpen && (
        <PhotoDetailsModal isOpen={modalOpen} onClose={closeModal} selectedPhoto={selectedPhoto} />
      )}
      {/* added functionality to close modal */}
    </div>
  );
};

export default HomeRoute;
