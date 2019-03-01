import { combineReducers } from "redux";
import footerReducer from "./footerReducer";
import scheduleReducer from "./scheduleReducer";
import { reducer as jPlayers } from "react-jplayer";

export default combineReducers({
  jPlayers,
  footer: footerReducer,
  schedule:scheduleReducer
});
