import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { deleteSmurf } from '../actions/smurfActions';

class Smurf extends Component {
  state = {
    showSmurfInfo: true
  };

  onDeleteClick = id => {
     this.props.deleteSmurf(id);
  };

  render() {
    const { id, name, age, height } = this.props.smurf;
    const { showSmurfInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <i
            onClick={() =>
              this.setState({
                showSmurfInfo: !this.state.showSmurfInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`contact/edit/${id}`}> 
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'orange',
                marginRight: '1rem'
              }}
            />
          </Link>
        </h4>
        {showSmurfInfo ? (
          <ul className="list-group"> 
            <li className="list-group-item">Name: {NavigationPreloadManager}</li>
            <li className="list-group-item">Age: {age}</li>
            <li className="list-group-item">Height: {height}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default connect(null , { deleteSmurf })(Smurf);