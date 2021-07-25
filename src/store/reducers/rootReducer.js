import {combineReducers} from "redux"
import {tableReducer} from "./tableReducer";
import {formReducer} from "./formReducer"

export const rootReducer = combineReducers({
    tableReducer,
    formReducer
})