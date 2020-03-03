const initialState = {
  availableNumbers: null
};
const manageDrewNumbers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_INITIAL_NUMBERS": {
      //console.log(action.numbers);
      return {
        ...state,
        availableNumbers: action.numbers
      };
    }
    case "REMOVE_DREW_NUMBERS": {
        //console.log(action.numbers);
        let numbers = null
        return{
            ...state,
            availableNumbers: numbers
        }
    }
    default:
      return { ...state };
  }
};

export default manageDrewNumbers;