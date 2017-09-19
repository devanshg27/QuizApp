import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';

class Profile extends React.Component {
	render() {
		return (
			<div style={{
				width: '100%',
			}}>
				<div style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					fontSize: '24px'
				}}>
					<span>{JSON.parse(this.props.userDetails).name}</span>
					{this.props.sameUser && 
						<a href="/users/edit"><span className='glyphicon glyphicon-pencil'></span></a>
					}
				</div>
				<div style={{
					height: '2px',
					marginBottom: '10px',
					width: '100%',
					backgroundColor: '#E0E0E0'
				}}></div>
				Name: {JSON.parse(this.props.userDetails).name}
				<br />
				E-mail: {JSON.parse(this.props.userDetails).email}
				<br />
				Registered: <Moment fromNow date={JSON.parse(this.props.userDetails).created_at} />
				<br />
			</div>
		)
	}
}

export default Profile;