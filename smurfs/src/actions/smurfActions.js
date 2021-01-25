import axios from 'axios';

//2
//create add new smurf action, pass in reference value, create type and payload

// This is the action type
export const ADD_NEW_SMURF = 'ADD_NEW_SMURF';
export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURF = 'GET_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const GET_SMURF_SUCCESS = 'GET_SMURF_SUCCESS';
export const GET_SMURF_FAIL = 'GET_SMURF_FAIL';

///you can remove this...
const headers = {
    'Content-Type': 'application/json'
  }
// This is the action creator, it is a function that creates the action...
export const getSmurfs = () => dispatch => {

    dispatch({ type: GET_SMURFS });
    setTimeout(() => {
        axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            const data = res.data
          dispatch({ type: GET_SMURF_SUCCESS, payload: data })
        })
        .catch( err => dispatch({ type: GET_SMURF_FAIL, payload: err }))
    }, 3000);
  };

  //you might not need this one because the id is automatically generated from the server
  // this one may be skrapped
  export const getSmurf = (id) => dispatch => {
    axios
    .get(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
        const data = res.data
        console.log(res)
      dispatch({ type: GET_SMURF_SUCCESS, payload: data })
    })
    .catch( err => dispatch({ type: GET_SMURF_FAIL, payload: err }))
  };

export const addSmurf = (newSmurf) => (dispatch) => {
    let smurfData = newSmurf;
    console.log(smurfData);
    axios
    .post('http://localhost:3333/smurfs', smurfData, {
        headers: headers
    })
    .then(res => {
        const data = res.data
      dispatch({ type: ADD_NEW_SMURF, payload: data })
    })
    .catch( err => dispatch({ type: GET_SMURF_FAIL, payload: err }))
}

export const updateSmurf = (newSmurf) => (dispatch) => {
    let smurfData = newSmurf;
    //console.log(smurfData);
    axios
    .put(`http://localhost:3333/smurfs/${smurfData.id}`, smurfData, {
        headers: headers
    })
    .then(res => {
        const data = res.data
      dispatch({ type: UPDATE_SMURF, payload: data })
    })
    .catch( err => dispatch({ type: GET_SMURF_FAIL, payload: err })) 
}

export const deleteSmurf = (id) => (dispatch) => {
    axios
    .delete(`http://localhost:3333/smurfs/${id}`, {
        headers: headers
    })
    .then(res => {
      dispatch({ type: DELETE_SMURF, payload: id})
    })
    .catch( err => dispatch({ type: GET_SMURF_FAIL, payload: err })) 
}