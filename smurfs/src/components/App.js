import React, { useState, useEffect } from "react";
import { getSmurfs, deleteSmurf } from '../actions/smurfActions';
import { connect } from 'react-redux';
import SmurfForm from '../components/SmurfForm';
import "./App.css";

//1
//add input
//add button 
//add handleChanges method
//in button, add onClick that calls a function that adds the input to the smurts object
//import form method from actions 
//add method to connect in HOC

function App(props) {
  console.log(props.smurfAsProps);
  const [ editSmurf, setEditSmurf ] = useState()
  useEffect(() => {
    props.getSmurfs();
  }, [])

    return (
      <div className="App SmurfList">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state eagles version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {props.isFetching ? (
          <div>...fetching...</div>
        ) : ( 
          props.smurfAsProps && props.smurfAsProps.map(item => 
              <div key={item.id} className="row">
                <div className="column">
                  <div onClick={() => {setEditSmurf(item)}} className="card">
                    <h3>Name: {item.name}</h3>
                    <p>Age: {item.age}</p>
                    <p>Height: {item.height}cm</p>
                    <span className="deleteIcon" onClick={() => {props.deleteSmurf(item.id)}}>x</span>
                  </div>
                </div>
              </div>
          )
        )}
        <SmurfForm editSmurf={editSmurf} />
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    smurfAsProps: state.data,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect (mapStateToProps, {getSmurfs, deleteSmurf})(App)
