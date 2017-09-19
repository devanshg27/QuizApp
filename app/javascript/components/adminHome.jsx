import PropTypes from 'prop-types';
import React from 'react';

class AdminHome extends React.Component {
  render() {
    return <div>
             AdminHome, I am {this.props.name}!
           </div>
  }
}

export default AdminHome;