import { FETCH_ITEMS, EDIT_ITEMS, ADD_ITEMS, LOGIN_SUCCESS, REGISTER_SUCCESS } from "../actions/actionType";

const initialState = {
    items: [],
    populateIngredient: "",
};

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                items: action.payload,
                populateIngredient: action.payload.populateIngredient,
            };
        case EDIT_ITEMS:
            return {
                ...state,
                items: action.payload,
            }
        default:
            return state;
    }
}

export default counterReducer;
