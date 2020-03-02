import { combineReducers } from "redux";
import managePrizesSettings from "./managePrizesSettings";
import manageDrewNumbers from "./manageDrewNumbers";
import undoRedoManagement from "./undoRedoManagement";

const tombolaApp = combineReducers({
  undoRedoManagement,
  managePrizesSettings,
  manageDrewNumbers
});

export default tombolaApp;
