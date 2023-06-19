import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import cors from "cors";
// import setAuthToken from "../utils/setAuthToken";
// import jwt_decode from "jwt-decode";

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/users/register", userData, { mode: cors })
    .then((res) => history.push("/login"))
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

//login user
export const loginUser = (userData, error) => (dispatch) => {
  if (error) {
    return dispatch({
      type: GET_ERRORS,
      payload: error,
    });
  }
  dispatch(setCurrentUser(userData));
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

//log user out
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  // setAuthToken(false);
  dispatch(setCurrentUser({}));
};
