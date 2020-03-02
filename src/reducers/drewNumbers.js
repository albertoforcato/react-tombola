import undoable from "redux-undo";

const initialState = [];

const drewNumber = (state, action) => {
  switch (action.type) {
    case "ADD_DREW_NUMBER":
      return action.drewNumber;

    default:
      return state;
  }
};

const drewNumbers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DREW_NUMBER": {
      return [...state, drewNumber(undefined, action)];
    }
    default:
      return state;
  }
};

const undoableDrewNumbers = undoable(drewNumbers);

export default undoableDrewNumbers;
