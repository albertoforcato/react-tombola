const initState = {
  prizes: [
    { id: 1, name: "ambo", checked: true },
    { id: 2, name: "terna", checked: true },
    { id: 3, name: "quaterna", checked: true },
    { id: 4, name: "cinquina", checked: true },
    { id: 5, name: "tombola", checked: true },
    { id: 6, name: "tombolino", checked: true }
  ],
  automaticDraw: false,
  numbers: null,
  currentNumber: "#"
};

const rootReducer = (state = initState, action) => {
  console.log("ACTION", action);

  switch (action.type) {
    case "CHANGE_PRIZE_ACTIVATION": {
      let newPrizes = state.prizes.map(p => {
        if (p.id === action.id) {
          p.checked = !p.checked;
        }
        return p;
      });
      
      return {
        ...state,
        prizes: newPrizes
      };
    }
    case "CHANGE_AUTOMATIC_DRAW_STATE": {
      return {
        ...state,
        automaticDraw: !state.automaticDraw
      };
    }
    case "ADD_INITIAL_NUMBERS": {
      console.log(action.numbers);
      return {
        ...state,
        numbers: action.numbers
      }
    }
    case "CHANGE_CURRENT_NUMBER": {
      let cn = action.currentNumber;
      return {
        ...state,
        currentNumber: cn
      }
    }
    default: {
      return {...state};
    }
  }
};

export default rootReducer;
