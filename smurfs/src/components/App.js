import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getSmurfs } from '../actions/smurfActions';
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
  useEffect(() => {
    props.getSmurfs();
  }, [])

    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {props.isFetching ? (
          <div>...fetching...</div>
        ) : ( 
          props.smurfAsProps && props.smurfAsProps.map(item => 
            <ul key={item.id}>
            <li>Name: {item.name} Age: {item.age} Height: {item.height}cm</li>
            </ul>
          )
        )}
        <SmurfForm />
      </div>
    );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    smurfs: state.data,
    smurf: state.data,
    smurfAsProps: state.data,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect (mapStateToProps, {getSmurfs})(App)
