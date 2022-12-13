import API from '../../Api/API';
import {POST_PROFILE_FAIL, POST_PROFILE_SUCCESS , GET_PROFILES_FAIL, GET_PROFILES_LOADING, GET_PROFILES_SUCCESS, GET_ONE_PROFILE_LOADING, GET_ONE_PROFILE_SUCCESS, GET_ONE_PROFILE_FAIL, GET_My_PROFILE_SUCCESS, GET_My_PROFILE_FAIL, GET_My_PROFILE_LOADING, DEL_PROFILE_SUCCESS, DEL_PROFILE_FAIL} from "../const/profile.js";
import {getCurrentUser} from './auth'
export const postProfile = (profile,avocatID) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await API.put(
      `profiles`,
      profile,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({type : POST_PROFILE_SUCCESS, payload: response.data})
    dispatch(getAllProfiles())
    dispatch(getMyProfile())
    dispatch(getOneProfile(avocatID))
    dispatch(getCurrentUser())
  } catch (error) {
    dispatch({ type: POST_PROFILE_FAIL, payload: error });
    console.log(error);
  }
};


export const getAllProfiles = (serchInput) => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({type : GET_PROFILES_LOADING})
  try {
    const response = await API.get(
      `profiles/?search=${serchInput}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({type : GET_PROFILES_SUCCESS, payload: response.data})
  } catch (error) {
    dispatch({ type: GET_PROFILES_FAIL, payload: error });
    console.log(error);
  }
};

export const getMyProfile = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({type : GET_My_PROFILE_LOADING})
  try {
    const response = await API.get(
      `profiles/my_profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({type : GET_My_PROFILE_SUCCESS, payload: response.data})
  } catch (error) {
    dispatch({ type: GET_My_PROFILE_FAIL, payload: error });
    console.log(error);
  }
};

export const getOneProfile = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({type : GET_ONE_PROFILE_LOADING})
  try {
    const response = await API.get(
      `profiles/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({type : GET_ONE_PROFILE_SUCCESS, payload: response.data})
  } catch (error) {
    dispatch({ type: GET_ONE_PROFILE_FAIL, payload: error });
    console.log(error);
  }
};

export const deleteProfile = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await API.delete(
      `profiles/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: DEL_PROFILE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: DEL_PROFILE_FAIL, payload: error });
    console.log(error);
  }
};