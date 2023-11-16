// responsible for loading the initial data from the API and passing data to other components
// will also provide the actions to update the state, causing the component to render.
import React, { useEffect, useReducer,useCallback } from "react";
import axios from "axios";

export const ACTIONS = {
  TOGGLE_MODAL: "TOGGLE_MODAL",
  MODAL_DATA: "MODAL_DATA",
  LIKED_PHOTO: "LIKED_PHOTO",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  GET_TOPICS: 'GET_TOPICS',
  GET_TOPIC_ID:'GET_TOPIC_ID',
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
      case "GET_TOPICS":
      return {
        ...state,
        topicData: action.payload,
      };
      case "GET_TOPIC_ID":
      return {
        ...state,
        topicId: action.payload,
      };
      case "GET_PHOTOS_BY_TOPICS":
      return {
        ...state,
        photoByTopicData: action.payload,
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
    topicId:null,
    photoByTopicData:[]
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
    // console.log(photoId);
  };

  const topicIdChosen = (topicId) => {
    dispatch({ type: ACTIONS.GET_TOPIC_ID, payload: topicId });
  };


useEffect(() => {
  const photosPromise = axios.get("/api/photos");
  const topicsPromise = axios.get("/api/topics");
  const promisesArr = [photosPromise, topicsPromise];

  Promise.all(promisesArr)
  .then((responseArr) => {
    // console.log(responseArr)
    const photos = responseArr[0].data;
    const topics = responseArr[1].data;
    // console.log(topics)
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photos })
    dispatch({ type: ACTIONS.GET_TOPICS, payload: topics })
  })
  .catch((error) => console.error("Error fetching data:", error));
}, []);

useEffect(() => {
  axios.get(`api/topics/photos/${state.topicId}`)
  .then((response) => {
    // const data = response.data;
    dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: response.data })
    // console.log("USE APP DATA", response.data, state.photoByTopicData)
  })
  .catch((error) => console.error("Error fetching data:", error.message));
}, [state.topicId]);
    
  return {
    modalData,
    selectedPhoto: state.selectedPhoto,
    togglePhotoModal,
    modalState: state.modalState,
    likedPhoto,
    liked: state.liked,
    photoData: state.photoData,
    topicData: state.topicData,
    topicIdChosen,
    topicId: state.topicId,
    photoByTopicData: state.photoByTopicData
  };
}
