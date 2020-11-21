import React, { Component } from "react";
import { connect } from 'react-redux';
import "./App.css";

// V. Connect 
// 1. create a child component 
// 2. import { connect } from 'react-redux'
// 3. At the bottom of the child component, add the following: 
// export default connect(() => {}, {})(ChildComponent)
// 4. Create mapStateToProps
// 5. Pass mapStateToProps into connect: 
// export default connect (mapStateToProps, {})(Component)


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //exhibitsAsProps: state.data,
    //isFetching: state.isFetching,
    //error: state.error
  }
}

export default connect (mapStateToProps, {})(App)
