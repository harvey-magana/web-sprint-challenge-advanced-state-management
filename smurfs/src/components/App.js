import React, { Component, useEffect } from "react";
import { fetchData } from '../actions/smurfActions';
import { connect } from 'react-redux';
import "./App.css";

function App(props) {
  useEffect(() => {
    props.fetchData();
  }, [])

    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    //exhibitsAsProps: state.data,
    //isFetching: state.isFetching,
    //error: state.error
  }
}

export default connect (mapStateToProps, {fetchData})(App)
