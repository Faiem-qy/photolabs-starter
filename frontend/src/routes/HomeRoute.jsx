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
    // console.log("HomeRoute - Selected photo data - comes from PhotoListItem", photoData);
    setModalOpen(true);
    setSelectedPhoto(photoData);
    // added console.log to log the data of the photo when the photo is clicked and the modal is open
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
      {/* <PhotoDetailsModal isOpen={modalOpen} onClose={closeModal} /> */}
      {modalOpen && (
        <PhotoDetailsModal isOpen={modalOpen} closeModal={closeModal} selectedPhoto={selectedPhoto} liked={liked} setLiked={setLiked} openModal={openModal}/>
      )}
      {/* added functionality to close modal */}
    </div>
  );
};

export default HomeRoute;
