const initialState = {
  prizes: [
    { id: 1, name: "ambo", checked: true },
    { id: 2, name: "terno", checked: true },
    { id: 3, name: "quaterna", checked: true },
    { id: 4, name: "cinquina", checked: true },
    { id: 5, name: "tombola", checked: true },
    { id: 6, name: "tombolino", checked: true }
  ],
  automaticDraw: false,
  showInGameSettings: false
};

const managePrizesSettings = (state = initialState, action) => {
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
    case "SWITCH_IN_GAME_SETTINGS":{
      return{
        ...state,
        showInGameSettings: !state.showInGameSettings
      };
    } 
    default: {
      return { ...state };
    }
  }
};

export default managePrizesSettings;
