import API from '../../Api/API';
import {
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_LOADING,
  FORGOT_PASSWORD_SUCCESS,
  GET_CURRENT_USER_FAIL,
  GET_CURRENT_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_LOADING,
  RESET_PASSWORD_SUCCESS,
} from "../const/auth";
import { setAlert } from "./alert";

export const registerLawyer = (newLawyer, navigate) => async (dispatch) => {
  dispatch({ type: REGISTER_LOADING });
  try {
    const response = await API.post(
      `auth/lawyer/register`,
      newLawyer
    );
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    dispatch(setAlert(response.data.msg,"success"));
    navigate("/connecter");
  } catch (error) {
    const { errors, msg } = error.response.data;
    console.log(errors);
    console.log(error);
    if (Array.isArray(errors)) {
      errors.map((err) => dispatch(setAlert(err.msg, "danger")));
    }
    if (msg) {
      dispatch(setAlert(msg, "danger"));
    }
    dispatch({ type: REGISTER_FAIL, payload: error });
  }
};

export const registerClient = (newClient, navigate) => async (dispatch) => {
  dispatch({ type: REGISTER_LOADING });
  try {
    const response = await API.post(
      `auth/client/register`,
      newClient
    );
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    dispatch(setAlert(response.data.msg,"success"));
    navigate("/connecter");
  } catch (error) {
    const { errors, msg } = error.response.data;
    console.log(errors);
    console.log(error);
    if (Array.isArray(errors)) {
      errors.map((err) => dispatch(setAlert(err.msg, "danger")));
    }
    if (msg) {
      dispatch(setAlert(msg, "danger"));
    }
    dispatch({ type: REGISTER_FAIL, payload: error });
  }
};

export const loginUser = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  try {
    const response = await API.post(
      `auth/login`,
      user
    );
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    dispatch(setAlert(response.data.msg,"success"));
    navigate("/profile");
  } catch (error) {
    const { errors, msg } = error.response.data;
    console.log(errors);
    console.log(error);
    if (Array.isArray(errors)) {
      errors.map((err) => dispatch(setAlert(err.msg, "danger")));
    }
    if (msg) {
      dispatch(setAlert(msg, "danger"));
    }
    dispatch({ type: LOGIN_FAIL, payload: error });
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_LOADING })
  try {
      const response = await API.post('auth/password/forgot',email);
      dispatch({type: FORGOT_PASSWORD_SUCCESS,payload: response.data,});

  } catch (error) {
    const { errors, msg } = error.response.data;
    console.log(errors);
    // console.log(error);
    if (Array.isArray(errors)) {
      errors.map((err) => dispatch(setAlert(err.msg, "danger")));
    }
    if (msg) {
      dispatch(setAlert(msg, "danger"));
    }
    dispatch({ type: FORGOT_PASSWORD_FAIL, payload: error });
  }
};

// Reset Password
export const resetPassword = (password) => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({ type: RESET_PASSWORD_LOADING });
  try {
      const response = await API.put(`auth/password/reset/${token}`,password);

      dispatch({
          type: RESET_PASSWORD_SUCCESS,
          payload: response.data,
      });

  } catch (error) {
    const { errors, msg } = error.response.data;
    console.log(errors);
    console.log(error);
    if (Array.isArray(errors)) {
      errors.map((err) => dispatch(setAlert(err.msg, "danger")));
    }
    if (msg) {
      dispatch(setAlert(msg, "danger"));
    }
    dispatch({ type: RESET_PASSWORD_FAIL, payload: error });
  }
};


export const getCurrentUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await API.get(
      `auth/current`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_CURRENT_USER_FAIL, payload: error });
    console.log(error);
  }
};



export const logOut = () => {
  return {
    type: LOGOUT,
  };
};
