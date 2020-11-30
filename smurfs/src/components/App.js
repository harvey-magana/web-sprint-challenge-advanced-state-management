import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getSmurfs } from '../actions/smurfActions';
import { connect } from 'react-redux';
import SmurfForm from '../components/SmurfForm';
import AddSmurf from '../components/AddSmurf';
import EditSmurf from '../components/EditSmurf';
import Smurfs from '../components/Smurfs';
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
        <Router>
          <Switch>
            <Route exact path="/" component={Smurfs} />
            <Route exact path="/smurf/add" component={AddSmurf} />
            <Route exact path="/smurf/edit/:id" component={EditSmurf} />
          </Switch>
        </Router>
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
