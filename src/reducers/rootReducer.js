const initState = {
    prizes: [
    {id:1,name:'ambo',activated:true},
    {id:2,name:'terna',activated:true}
]};

const rootReducer = (state = initState, action) => {
    console.log(action);
    if (action.type === 'DEACTIVATE_PRIZE') {
        
    }
};

export default rootReducer;