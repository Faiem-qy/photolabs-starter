// responsible for loading the initial data from the API and passing data to other components
// will also provide the actions to update the state, causing the component to render.
import React, { useState } from "react";

export default function useApplicationData(){
  const [liked, setLiked] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleLiked = (photoId) => {
    setLiked((prev) => {
      if (prev.includes(photoId)) {
        return prev.filter((id) => id !== photoId);
      } else {
        return [...prev, photoId];
      }
    });
  };

  const openModal = (photoData) => {
    setModalOpen(true);
    setSelectedPhoto(photoData);
  };

  const closeModal = () => {
    console.log("closing modal");
    setModalOpen(false);
    // setSelectedPhoto(null);
  };

  return [liked, setLiked, toggleLiked, openModal, modalOpen,selectedPhoto, closeModal]
};