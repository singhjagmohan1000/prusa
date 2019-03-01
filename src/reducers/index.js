import { combineReducers } from "redux";
import defaultReducer from "./defaultReducer";
import footerReducer from "./footerReducer";
import { reducer as jPlayers } from "react-jplayer";

export default combineReducers({
  defualt: defaultReducer,
  jPlayers,
  footer: footerReducer
});
