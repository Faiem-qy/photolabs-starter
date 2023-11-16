// responsible for loading the initial data from the API and passing data to other components
// will also provide the actions to update the state, causing the component to render.
import React, { useEffect, useReducer } from "react";
import axios from "axios";

export const ACTIONS = {
  TOGGLE_MODAL: "TOGGLE_MODAL",
  MODAL_DATA: "MODAL_DATA",
  LIKED_PHOTO: "LIKED_PHOTO",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
};

const reducer = (state, action) => {
  // console.log("Current State:", state);
  switch (action.type) {
    case "SET_PHOTO_DATA":
      return {
        ...state,
        photoData: action.payload,
      };
      case "GET_PHOTOS_BY_TOPICS":
      return {
        ...state,
        topicData: action.payload,
      };
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

export default function useApplicationData() {
  const initialStates = {
    modalState: false,
    selectedPhoto: null,
    liked: [],
    photoData: [],
    topicData: [],
  };
  const [state, dispatch] = useReducer(reducer, initialStates);

  const togglePhotoModal = () => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL });
  };

  const modalData = (photoData) => {
    dispatch({ type: ACTIONS.MODAL_DATA, payload: photoData });
  };

  const likedPhoto = (photoId) => {
    dispatch({ type: ACTIONS.LIKED_PHOTO, payload: photoId });
    console.log(photoId);
  };

  useEffect(() => {
    axios.get("/api/photos")
    // .then((data) => console.log(data.data))
    .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data.data }))
    .catch((error) => console.error("Error fetching data:", error));
}, []);
    
  return {
    modalData,
    selectedPhoto: state.selectedPhoto,
    togglePhotoModal,
    modalState: state.modalState,
    likedPhoto,
    liked: state.liked,
    photoData: state.photoData
  };
}
