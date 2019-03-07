import { combineReducers } from "redux";
import footerReducer from "./footerReducer";
import scheduleReducer from "./scheduleReducer";
import teamReducer from "./teamReducer";
import pollReducer from "./pollReducer";
import newsReducer from "./newsReducer";
import { reducer as jPlayers } from "react-jplayer";

export default combineReducers({
  team:teamReducer,
  poll:pollReducer,
  news:newsReducer,
  jPlayers,
  footer: footerReducer,
  schedule:scheduleReducer,
});
