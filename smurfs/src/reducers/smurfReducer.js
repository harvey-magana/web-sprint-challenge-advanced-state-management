//3
//import action name from actions
//update initialState
//add new actions that allow for form entries to update the form

import { 
    ADD_NEW_SMURF,
    GET_SMURFS,
    GET_SMURF,
    DELETE_SMURF,
    UPDATE_SMURF,
    GET_SMURF_SUCCESS,
    GET_SMURF_FAIL,
} from '../actions/smurfActions';

// you won't need the smurf object...
const initialState = {
    data: [],
    isFetching: false,
    error: ''
}

//you need to keep your naming convention uniform and replace smurf with  data since you are already using that name for your state
export const smurfReducer = (state = initialState, action) => {
    //console.log(action.payload)
    switch(action.type) {
        case GET_SMURFS: 
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case GET_SMURF_SUCCESS: 
            return {
                ...state, 
                isFetching: false,
                data: action.payload,
                error: ''
            }
        case GET_SMURF: 
            return {
                ...state, 
                data: action.payload,
            }
        case DELETE_SMURF: 
            return {
                ...state, 
                data: state.data.filter(smurf => smurf.id !== action.payload)
            }
        case ADD_NEW_SMURF: 
            return {
                ...state, 
                data: action.payload
            }
        case UPDATE_SMURF: 
            return {
                ...state, 
                data: action.payload
            }
        case GET_SMURF_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state
    }
}