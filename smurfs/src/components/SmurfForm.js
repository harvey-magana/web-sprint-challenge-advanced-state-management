import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addSmurf, updateSmurf } from '../actions/smurfActions';
import "./App.css";


// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const SmurfForm = (props) => {
  console.log(props)
  const [values, setValues] = useState({
    name: '', 
    age: '', 
    height: ''
  });

  useEffect(() => {
    props.editSmurf && setValues(props.editSmurf)
  },[props.editSmurf])

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(values)
      props.addSmurf(values);
      setValues({
        name: '', 
        age: '', 
        height: ''
      })
  };

  return (
    <>
      <form className="SmurfForm" onSubmit={handleSubmit}>
        <h2>Smurf Form</h2>
        <label>
          Name:
          <input
            name="name"
            value={values.name}
            onChange={handleChanges}
          />
        </label>
        <label>
          Age:
          <input
            name="age"
            value={values.age}
            onChange={handleChanges}
          />
        </label>
        <label>
          Height:
          <input
            name="height"
            value={values.height}
            onChange={handleChanges}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {props.editSmurf && <button onClick={() => {props.updateSmurf(values)}}>Edit</button>}

    </>
  );
};

/*
const mapStateToProps = (state) => {
  console.log(state)
    return {
      smurfs: state.data,
    }
  }
*/

export default connect(
    () => {
        return {}
    },
{addSmurf, updateSmurf})(SmurfForm);
