import swal from "../../helpers/swal";
import { LOGIN_SUCCESS, REGISTER_SUCCESS, SET_ERROR } from "./actionType";

const BASE_URL = "https://clg1-p3-resto.herokuapp.com";
// const BASE_URL = "http://localhost:3000";

export function setError(error) {
    return {
        type: SET_ERROR,
        payload: error ? error : { isError: false, type: "error", message: "" },
    };
}

export function login(user) {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + "/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(user),
            });
            const loginData = await response.json();
            if (!response.ok) throw loginData.message;
            localStorage.setItem("access_token", loginData.data.access_token);
            localStorage.setItem("name", loginData.data.name);
            swal("success", "Welcome " + loginData.data.name, "success");
            return dispatch({ type: LOGIN_SUCCESS, payload: loginData });
        } catch (error) {
            swal("error", error, "error");
        }
    };
}

export function register(user) {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + "/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(user),
            });
            const registerData = await response.json();
            if (!response.ok) throw registerData.message;
            swal("success", "Register success", "success");
            return dispatch({ type: REGISTER_SUCCESS, payload: registerData });
        } catch (error) {
            dispatch({ type: SET_ERROR, payload: error });
            swal("error", error, "error");
        }
    };
}