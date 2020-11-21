import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from 'redux';
import { smurfReducer } from './reducers/smurfReducer';
import { Provider } from 'react-redux';
import "./index.css";
import App from "./components/App";

// I. Creating a store
// 1. import { createStore } from 'redux'
// 2. import { reducerName } from '../reducers/reducerName'
// 3. create reducer function 
// 4. create store variable const store = createStore(reducerName)

// II. Add Provider
// 1. import { Provider } from 'react-redux';
// 2. wrap <App /> in <Provider></Provider>
// 3. Inject store into <Provider> => <Provider store={store}></Provider>

// III. Reducer 
// 1. Create reducers directory 
// 2. Create reducer.js in directory 
// 3. Create initialState object, const initialState = {}
// 4. Create a reducer function 
// 5. pass in state = initialState, action into action function 

// IV. Actions 
// 1. Create Actions directory 
// 2. Create actions.js in directory 
// 3. Create actions variable, export const ACTION_NAME = 'ACTION_NAME'
// 4. Create action function, export function actionFeature(newFeature) {}
// 5. Pass action Creator into child component
// export default connect (mapStateToProps, { actionCreator: actionCreatore })(Component)

// V. Connect 
// 1. create a child component 
// 2. import { connect } from 'react-redux'
// 3. At the bottom of the child component, add the following: 
// export default connect(() => {}, {})(ChildComponent)
// 4. Create mapStateToProps
// 5. Pass mapStateToProps into connect: 
// export default connect (mapStateToProps, {})(Component)

const store = createStore(smurfReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById("root"));
