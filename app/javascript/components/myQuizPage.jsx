import PropTypes from 'prop-types';
import React from 'react';

class MyQuizPage extends React.Component {

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
					{JSON.stringify(this.props)}
				</div>
				<div style={{
					height: '2px',
					marginBottom: '20px',
					width: '100%',
					backgroundColor: '#E0E0E0'
				}}></div>
				The following subgenres of quizzes are available, choose any of them to start the quiz:
				<ul>
				
				</ul>
			</div>
		)
	}
}

export default MyQuizPage;