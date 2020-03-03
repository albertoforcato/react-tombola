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

const drewPrize = (state, action) => {
  switch (action.type) {
    case "ADD_ASSIGNED_PRIZE":
      return action.drewPrize;
    default:
      return state;
  }
};

const undoRedoManagement = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DREW_NUMBER": {
      return [...state, drewNumber(undefined, action)];
    }
    case "ADD_ASSIGNED_PRIZE": {
      return [...state, drewPrize(undefined, action)];
    }
    default:
      return state;
  }
};

const undoableDrewNumbers = undoable(undoRedoManagement);

export default undoableDrewNumbers;
