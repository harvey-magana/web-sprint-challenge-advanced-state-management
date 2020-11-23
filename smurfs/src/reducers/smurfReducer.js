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

/*
const initialState = {
    "data": "",
    "error": "",
    "isFetching": false
}*/

const initialState = {
    smurfs: [
        {
            name: 'Brainey',
            age: 200,
            height: '5cm',
            id: 0
        }
    ]
}

export const smurfReducer = (state = initialState, action) => {
    console.log(state)
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
                smurfs: [
                    {
                        name: action.payload, 
                        age: action.payload,
                        height: action.payload,
                        id: action
                    }
                ]
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