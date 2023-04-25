import { ActionTypes } from "../constans/actionTypes"

const initialState = {
    darkMode: false
}

export const themeReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case ActionTypes.CHANGE_THEME:

            return {
                ...state,
                darkMode: !state.darkMode,
            };
        default:
            return state
    }
}