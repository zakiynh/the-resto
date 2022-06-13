import { SET_CATEGORIES } from "./actionType";
import swal from "../../helpers/swal";
const BASE_URL = "https://clg1-p3-resto.herokuapp.com";
// const BASE_URL = "http://localhost:3000";

export function setCategories(categories) {
    return {
        type: SET_CATEGORIES,
        payload: categories,
    };
}

export function getCategories() {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + "/categories", {
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.getItem("access_token"),
                }
            });
            const categories = await response.json();
            if (!response.ok) 
            throw {
                message: categories.message,
                status: response.status
            } 
            return dispatch(setCategories(categories));
        } catch (error) {
            console.log(error)
        }
    };
}

export function addCategory(category) {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + "/categories/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.getItem("access_token"),
                },
                body: JSON.stringify(category)
            });
            const categoryData = await response.json();
            if (!response.ok) throw categoryData.message
            swal("success", "Add category success", "success");
            return dispatch({ type: SET_CATEGORIES, payload: categoryData });
        } catch (error) {
            swal("error", error, "error");
        }
    };
}

export function deleteCategory(id) {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + "/categories/delete/" + id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.getItem("access_token"),
                }
            });
            const categoryData = await response.json();
            if (!response.ok) throw categoryData.message
            swal("success", "Delete category success", "success");
            dispatch(getCategories())
        } catch (error) {
            swal("error", error, "error");
        }
    };
}