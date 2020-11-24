//3
//import action name from actions
//update initialState
//add new actions that allow for form entries to update the form

import { 
    ADD_NEW_SMURF,
    FETCH_SMURF_START, 
    FETCH_SMURF_SUCCESS, 
    FETCH_SMURF_FAIL 
} from '../actions/smurfActions';

const initialState = {
    smurfs: [
        {
            name: 'Brainy',
            age: 200,
            height: '5cm',
            id: Date.now()
        }
    ]
}

export const smurfReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch(action.type) {
        case FETCH_SMURF_START: 
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SMURF_SUCCESS: 
            return {
                ...state, 
                isFetching: false,
                data: action.payload,
                error: ''
            }
        case ADD_NEW_SMURF: 
            return {
                ...state, 
                smurfs: [...state.smurfs, action.payload]
            }
        case FETCH_SMURF_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state
    }
}