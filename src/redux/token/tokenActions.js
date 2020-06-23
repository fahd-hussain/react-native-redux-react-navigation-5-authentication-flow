// import axios from "axios";

// Local Imports
import baseUrl from "../../constants/baseUrl";
import { round } from "react-native-reanimated";

// Global Variables
const url = `${baseUrl}users`;

const fetchTokenRequest = () => {
    return {
        type: "TOKEN_REQUEST",
    };
};

const fetchTokenSuccess = (token) => {
    return {
        type: "TOKEN_SUCCESS",
        payload: token,
    };
};

const fetchTokenFailure = (error) => {
    return {
        type: "TOKEN_FAILURE",
        payload: error,
    };
};

export const purgeToken = () => (dispatch) => {
    dispatch(fetchTokenRequest());
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            dispatch(fetchTokenSuccess(null));
            resolve(null);
        }, 1500);
    });
};

export const loginRequest = (username, password) => (dispatch) => {
    dispatch(fetchTokenRequest());
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const token = "Bearer 123456789";
            dispatch(fetchTokenSuccess(token));
            resolve(token);
        }, 1000);
    });
};

export const registerRequest = (username, password, firstname, lastname, gender) => (dispatch) => {
    dispatch(fetchTokenRequest());
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const token = "Bearer 123456789";
            dispatch(fetchTokenSuccess(token));
            resolve(token);
        }, 1000);
    });
};
