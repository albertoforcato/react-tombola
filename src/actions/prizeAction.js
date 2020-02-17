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