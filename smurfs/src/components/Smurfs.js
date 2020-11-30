import React, { Component } from 'react';
import Smurf from './Smurf';

import { connect } from 'react-redux';
import { getSmurfs } from '../actions/smurfActions';

class Smurfs extends Component {

  componentDidMount(){
    this.props.getSmurfs()
  }

  render() {
    const { smurfs } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-success">Smurfs</span> List
        </h1>
        {smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contacts : state.mySmurfs.smurfs
  }
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs);