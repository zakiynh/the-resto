import { combineReducers } from "redux";
import itemReducer from "./itemReduce";
import categoryReducer from "./categoriesReducer";

const rootReducer = combineReducers({
    items: itemReducer,
    categories: categoryReducer,
})

export default rootReducer;