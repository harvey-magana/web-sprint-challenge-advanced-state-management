import React, { useState } from "react";
import { connect } from 'react-redux';
import { getSmurf, updateSmurf } from '../actions/smurfActions';


// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const EditSmurf = (props) => {
  console.log(props)
  const [values, setValues] = useState([]);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        props.updateSmurf(values);
    };

  return (
    <>
      <form onSubmit={handleSubmit}>
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

    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
    return {
      smurf: state.data
    }
  }

export default connect(() => {
  return {}
},{updateSmurf})(EditSmurf);
