import axios from 'axios';

//2
//create add new smurf action, pass in reference value, create type and payload

// This is the action type
export const ADD_NEW_SMURF = 'ADD_NEW_SMURF';
export const FETCH_SMURF_START = 'FFETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';

// This is the action creator, it is a function that creates the action...
export const fetchData = () => dispatch => {

    dispatch({ type: FETCH_SMURF_START });
    setTimeout(() => {
        axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            const data = res.data
            //console.log(data)
          dispatch({ type: FETCH_SMURF_SUCCESS, payload: data })
        })
        .catch( err => dispatch({ type: FETCH_SMURF_FAIL, payload: err }))
    }, 3000);
  };

export const addSmurf = (newSmurf) => (dispatch) => {
    
    return {
        type: ADD_NEW_SMURF,
        payload: newSmurf
    }
    /*
    dispatch({ type: FETCH_SMURF_START });
    setTimeout(() => {
        axios
        .post('http://localhost:3333/smurfs')
        .then(res => {
            const data = res.data
            //console.log(data)
          dispatch({ type: FETCH_SMURF_SUCCESS, payload: data })
        })
        .catch( err => dispatch({ type: FETCH_SMURF_FAIL, payload: err }))
    }, 3000);
    */
}
