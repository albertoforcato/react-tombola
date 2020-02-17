const initState = {
  prizes: [
    { id: 1, name: "ambo", checked: true },
    { id: 2, name: "terna", checked: true },
    { id: 3, name: "quaterna", checked: true },
    { id: 4, name: "cinquina", checked: true },
    { id: 5, name: "tombola", checked: true },
    { id: 6, name: "tombolino", checked: true }
  ]
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

      console.log("New Prizes ", newPrizes);

      return {
        ...state,
        prizes: newPrizes
      };
    }
    default: {
      return {...state};
    }
  }
};

export default rootReducer;
