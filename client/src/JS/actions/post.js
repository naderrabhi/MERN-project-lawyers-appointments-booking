import API from '../../Api/API';
import {
  DELETE_POST_FAIL,
  DELETE_POST_SUCCESS,
  EDIT_POST_FAIL,
  EDIT_POST_SUCCESS,
  GET_POST_FAIL,
  GET_POST_LOADING,
  GET_POST_SUCCESS,
  POST_FAIL,
  POST_SUCCESS,
} from "../const/post";

export const addPost = (post) => async (dispatch) => {
  console.log(post);
  const token = localStorage.getItem("token");
  try {
    const response = await API.post(
      `post`,
      post,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: POST_SUCCESS, payload: response.data });
    dispatch(getPost(post.lawyerID))
  } catch (error) {
    dispatch({ type: POST_FAIL, payload: error });
    console.log(error);
  }
};

export const getPost = (lawyerID) => async (dispatch) => {
  dispatch({ type: GET_POST_LOADING });
  const token = localStorage.getItem("token");
  try {
    const response = await API.get(
      `post/${lawyerID}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: GET_POST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_POST_FAIL, payload: error });
    console.log(error);
  }
};

export const delPost = (postID, lawyerID) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await API.delete(
      `post/${postID}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: DELETE_POST_SUCCESS, payload: response.data });
    dispatch(getPost(lawyerID));
  } catch (error) {
    dispatch({ type: DELETE_POST_FAIL, payload: error });
    console.log(error);
  }
};

export const editPost = (postID, newPost, lawyerID) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await API.put(
      `post/${postID}`,
      {newPost},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: EDIT_POST_SUCCESS, payload: response.data });
    dispatch(getPost(lawyerID));
  } catch (error) {
    dispatch({ type: EDIT_POST_FAIL, payload: error });
    console.log(error);
  }
};
