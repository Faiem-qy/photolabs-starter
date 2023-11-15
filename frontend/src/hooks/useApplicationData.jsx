// responsible for loading the initial data from the API and passing data to other components
// will also provide the actions to update the state, causing the component to render.
import React, { useState, useReducer } from "react";

export const ACTIONS = {
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  MODAL_DATA: 'MODAL_DATA',
  LIKED_PHOTO: 'LIKED_PHOTO'
}

const reducer = (state, action) => {
  // console.log("Current State:", state);
  switch (action.type) {
  case "TOGGLE_MODAL":
    return {
      ...state,
      modalState: !state.modalState,
  };
  case "MODAL_DATA":
    return {
      ...state,
      selectedPhoto: action.payload,
  };
  case "LIKED_PHOTO":
    if (state.liked.includes(action.payload)) {
      return {
        ...state,
        liked: state.liked.filter((id) => id !== action.payload),
      };
    } else {
      return {
       ...state,
       liked: [...state.liked, action.payload],
      };
    }
  default:
    return state;
  }
};

export default function useApplicationData(){

  const initialStates = {modalState:false, selectedPhoto:null, liked:[]} 
  const [state, dispatch] = useReducer(reducer, initialStates);

  const togglePhotoModal = () => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL});
  };

  const modalData = (photoData) => {
    dispatch({ type: ACTIONS.MODAL_DATA, payload: photoData });
  };
  
  const likedPhoto = (photoId) => {
    dispatch({ type: ACTIONS.LIKED_PHOTO, payload: photoId });
    console.log(photoId)
  };


  return {    
    modalData,
    selectedPhoto: state.selectedPhoto,
    togglePhotoModal,
    modalState: state.modalState,
    likedPhoto, 
    liked: state.liked, 
  }
}