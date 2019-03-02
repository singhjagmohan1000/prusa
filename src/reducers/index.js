import { combineReducers } from "redux";
import footerReducer from "./footerReducer";
import scheduleReducer from "./scheduleReducer";
import teamReducer from "./teamReducer";
import { reducer as jPlayers } from "react-jplayer";

export default combineReducers({
  team:teamReducer,
  jPlayers,
  footer: footerReducer,
  schedule:scheduleReducer,
});
