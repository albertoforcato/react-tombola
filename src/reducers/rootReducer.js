const initState = {
  prizes: [
    { id: 1, name: "ambo", activated: true },
    { id: 2, name: "terna", activated: true },
    { id: 3, name: "quaterna", activated: true },
    { id: 4, name: "cinquina", activated: true },
    { id: 5, name: "tombola", activated: true },
    { id: 6, name: "tombolino", activated: true }
  ]
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  if (action.type === "CHANGE_PRIZE_ACTIVATION") {
    let prize = state.prizes.find(p => p.id === action.id);
    if (prize) {
      prize.activated = !prize.activated;
    }

    let newPrize = state.prizes.filter(prize => {
      return action.id !== prize.id;
    });

    return {
      ...state,
      newPrize,
      prize
    };
  }
  return state;
};

export default rootReducer;
