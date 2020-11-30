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

const initialState = {
    smurfs: [], 
    smurf: {}
}

export const smurfReducer = (state = initialState, action) => {
    console.log(action.payload)
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
                data: state.smurfs.filter(smurf => smurf.id !== action.payload)
            }
        case ADD_NEW_SMURF: 
            return {
                ...state, 
                smurfs: [...state.smurfs, action.payload]
            }
        case UPDATE_SMURF: 
            return {
                ...state, 
                smurfs: state.smurfs.map(smurf => smurf.id === action.payload.id ? (smurf = action.payload) : smurf)
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