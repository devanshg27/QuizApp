import PropTypes from 'prop-types';
import React from 'react';

class Hello extends React.Component {
  render() {
    return <div>
             Hello, I am {this.props.name}!
           </div>
  }
}

export default Hello;