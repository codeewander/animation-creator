import { combineReducers } from "redux";
import palette from "./paletteReducer";
import frames from "./framesReducer";
export default combineReducers({ palette, frames });
