const {
  LOGIN_SUCCESS,
  GET_CURRENT_USER_SUCCESS,
  LOGOUT,
  FORGOT_PASSWORD_LOADING,
  RESET_PASSWORD_LOADING,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_FAIL,
} = require("../const/auth");

const initialState = { loading: false, error: null, User: {} };

export const auth = (state = initialState, { type, payload }) => {
  switch (type) {

    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return { ...state, User: payload.user };
    case GET_CURRENT_USER_SUCCESS:
      return { ...state, User: payload };
    case LOGOUT:
      localStorage.removeItem("token");
      return { loading: false, User: {}, error: null };
    
    case FORGOT_PASSWORD_LOADING:
    case RESET_PASSWORD_LOADING:
      return { ...state, loading:true}
    case FORGOT_PASSWORD_SUCCESS:
        return {...state, loading: false, message: payload };
    case RESET_PASSWORD_SUCCESS:
        return {...state, loading: false, success: payload };
    case FORGOT_PASSWORD_FAIL:
    case RESET_PASSWORD_FAIL:
        return {...state, loading: false, error: payload };
    default:
      return state;
  }
};
