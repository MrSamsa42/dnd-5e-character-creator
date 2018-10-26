const initState = {
    character: {
        playerName: 'Guest'
    }
};

const attributeReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_NAMES' : 
        return {
            ...state, 
            character: {
                playerName: action.info.playerName, 
                characterName: action.info.characterName, 
                characterDescription: action.info.characterDescription
            }
        }
        default: return state;
    }
}

export default attributeReducer;
