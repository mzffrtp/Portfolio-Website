import { ActionTypes } from "../constans/actionTypes"


const initialState = {
    projects: [],
    isLoading: false,
}
export const projectsReducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case ActionTypes.GET_PROJESTS_START:
            return {
                ...state,
                isLoading:true
            }
        
            case ActionTypes.GET_PROJESTS_SUCCESS:
                return{
                    ...state,
                    projects:payload,
                    isLoading:false,
                }
            
        default:
            return state
    }
    
}