import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';

class Profile extends React.Component {
	render() {
		return (
			<div>
				<h3>{this.props.name}</h3>
				<div style={{
					height: "2px",
					marginBottom: "10px",
					width: "100%",
					backgroundColor: "#E0E0E0"
				}}></div>
				{false && JSON.stringify(this.props)}
				Name: {this.props.name}
				<br />
				E-mail: {this.props.email}
				<br />
				Registered: <Moment fromNow date={this.props.created_at} />
				<br />
			</div>
		)
	}
}

export default Profile;