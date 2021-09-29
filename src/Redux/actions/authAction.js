import axios from "axios";
import {
  USER_LOADED,
  USER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  LOGOUT_SUCCESS,
  GET_ERROR,
} from "../types";

export const loading = () => {
  return {
    type: USER_LOADING,
  };
};

export const register = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};

export const registerFail = () => {
  return {
    type: REGISTER_FAIL,
  };
};

export const login = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFail = () => {
  return {
    type: LOGIN_FAIL,
  };
};

export function setError(error) {
  return {
    type: GET_ERROR,
    payload: error,
  };
}
