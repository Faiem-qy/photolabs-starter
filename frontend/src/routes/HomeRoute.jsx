import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = () => {
  const [liked, setLiked] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };



  return (
    <div className="home-route">
      <TopNavigation liked={liked} setLiked={setLiked} />
      <PhotoList liked={liked} setLiked={setLiked} openModal={openModal} />
      <PhotoDetailsModal isOpen={modalOpen} />
    </div>
  );
};

export default HomeRoute;