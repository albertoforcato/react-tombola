import { combineReducers } from "redux";
import drewNumbers from "./drewNumbers";
import managePrizesSettings from "./managePrizesSettings";
import manageDrewNumbers from "./manageDrewNumbers";

const tombolaApp = combineReducers({
  drewNumbers,
  managePrizesSettings,
  manageDrewNumbers
});

export default tombolaApp;
