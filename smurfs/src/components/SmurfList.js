import React, { useEffect } from "react";
import { fetchData } from '../actions/smurfActions';
import { connect } from 'react-redux';
import "./App.css";

//1
//add input
//add button 
//add handleChanges method
//in button, add onClick that calls a function that adds the input to the smurts object
//import form method from actions 
//add method to connect in HOC

function SmurfList(props) {
  useEffect(() => {
    props.fetchData();
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
            <div key={item.id}>{item.name}
            </div>
          )
        )}
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

export default connect (mapStateToProps, {fetchData})(SmurfList)
