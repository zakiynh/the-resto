import { MENU_ITEMS } from "./actionType";
const BASE_URL = "https://clg1-p3-resto.herokuapp.com";

export function setMenuItems(menus) {
    return {
        type: MENU_ITEMS,
        payload: menus,
    };
}

export function getMenuItems() {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + "/menus", {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const menus = await response.json();
            if (!response.ok) throw menus.message
            return dispatch(setMenuItems(menus));
        } catch (error) {
            console.log(error)
        }
    };
}

export function getMenuId(id) {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + "/menus/" + id, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const menu = await response.json();
            if (!response.ok) throw menu.message
            return dispatch(setMenuItems(menu));
        } catch (error) {
            console.log(error)
        }
    };
}