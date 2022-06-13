import { MENU_ITEMS } from "../actions/actionType";

const initialState = {
    menus: []
}

export default function menusReducer(state = initialState, action) {
    switch (action.type) {
        case MENU_ITEMS:
            return {
                ...state,
                menus: action.payload,
            };
        default:
            return state;
    }
}