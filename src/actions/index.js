import { ADD_VIDEO, ADD_VIDEOS, REMOVE_VIDEO, REMOVE_ALL_VIDEOS, VIDEO_PROGRESS, VIDEO_COMPLETE } from "./types";


export const addVideos = videos => dispatch => {

};

export const convertVideos = () => (dispatch, getState) => {

};

export const showInFolder = outputPath => dispatch => {

};

export const addVideo = video => {
  return {
    type: ADD_VIDEO,
    payload: {
      ...video
    }
  };
};

export const setFormat = (video, format) => {
  return {
    type: ADD_VIDEO,
    payload: {
      ...video,
      format,
      err: ""
    }
  };
};

export const removeVideo = video => {
  return {
    type: REMOVE_VIDEO,
    payload: video
  };
};

export const removeAllVideos = () => {
  return {
    type: REMOVE_ALL_VIDEOS
  };
};
