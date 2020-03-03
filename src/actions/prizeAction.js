export const changePrizeActivation = (id) => {
    return {
        type: "CHANGE_PRIZE_ACTIVATION",
        id
    }
};

export const changeAutomaticDrawState = () => {
    return {
        type: "CHANGE_AUTOMATIC_DRAW_STATE"
    }
};

export const addInitialNumbers = (numbers) => {
    return {
        type: "ADD_INITIAL_NUMBERS",
        numbers
    }
};

export const addDrewNumber = (drewNumber) => {
    return{
        type: "ADD_DREW_NUMBER",
        drewNumber
    }
};

export const addAssignedPrize = (assignedPrize) => {
    return {
        type: "ADD_ASSIGNED_PRIZE",
        assignedPrize
    }
}

export const switchInGameSettings = () => {
    return{
        type: "SWITCH_IN_GAME_SETTINGS"
    }
};

