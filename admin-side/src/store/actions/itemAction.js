import { FETCH_ITEMS, ADD_ITEMS, FETCH_ITEMS_ID, EDIT_ITEMS } from "./actionType";
import swal from "../../helpers/swal"
const BASE_URL = "https://clg1-p3-resto.herokuapp.com";
// const BASE_URL = "http://localhost:3000";

export const fetchedItems = (payload) => {
    return {
        type: FETCH_ITEMS,
        payload,
    };
};

export const fetchedItemsId = (payload) => {
    return {
        type: FETCH_ITEMS_ID,
        payload,
    };
};

export const editItems = (payload) => {
    return {
        type: EDIT_ITEMS,
        payload,
    };
};

export const addItems = (payload) => {
    return {
        type: ADD_ITEMS,
        payload,
    };
};

export function fetchItems() {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + "/items", {
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem("access_token"),
                },
                mode: "cors",
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(response.message);
            }
            return dispatch({ type: FETCH_ITEMS, payload: data });
        } catch (err) {
            console.log(err);
        }
    };
}

export function addItem(item) {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + "/items/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem("access_token"),
                },
                mode: "cors",
                body: JSON.stringify(item),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(response.message);
            }
            swal("success", "Add item success", "success");
            return dispatch({ type: ADD_ITEMS, payload: data });
        } catch (err) {
            swal("error", err, "error");
        }
    };
}

export function fetchItemsById(id) {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + "/items/" + id, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem("access_token"),
                },
                mode: "cors",
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(response.message);
            }

            let populateIngredient = [];
            data.Ingredients.forEach((el) => {
                populateIngredient.push(el.name);
            });
            populateIngredient = populateIngredient.join(",");

            return dispatch({
                type: FETCH_ITEMS,
                payload: data,
                populateIngredient,
            });
        } catch (err) {
            console.log(err);
        }
    };
}

export function editItem(id, item) {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + "/items/update/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem("access_token"),
                },
                mode: "cors",
                body: JSON.stringify(item),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(response.message);
            }
            swal("success", "Edit item success", "success");
            return dispatch({ type: EDIT_ITEMS, payload: data });
        } catch (err) {
            swal("error", err, "error");
        }
    };
}

export function deleteItem(id) {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + "/items/delete/" + id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem("access_token"),
                },
                mode: "cors",
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(response.message);
            }
            dispatch(fetchItems());
            swal("success", "Delete item success", "success");
        } catch (err) {
            swal("error", err, "error");
        }
    };
}
