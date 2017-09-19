import PropTypes from 'prop-types';
import React from 'react';

class GenrePage extends React.Component {

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
					{JSON.parse(this.props.Genre).name}
				</div>
				<div style={{
					height: '2px',
					marginBottom: '20px',
					width: '100%',
					backgroundColor: '#E0E0E0'
				}}></div>
				The following subgenres of quizzes are available, choose any of them to start the quiz:
				<ul>
					{JSON.parse(this.props.Genre).subgenres.map(function(subgenre, i){
						return (
							<li key={i}>
								<div style={{
									width: '100%',
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center'
								}}>
									<h4>{subgenre.name}</h4>
									{JSON.parse(this.props.userDetails).quizzes.find(function(quiz) {
										return (subgenre.id == quiz.subgenre.id && !quiz.hasFinished);
									}) === undefined && (
										<a style={{textSize: "16px"}} className="btn btn-success">New Quiz</a>
									)}
									{JSON.parse(this.props.userDetails).quizzes.find(function(quiz) {
										return (subgenre.id == quiz.subgenre.id && !quiz.hasFinished);
									}) !== undefined && (
										<a style={{textSize: "16px"}} className="btn btn-info">Continue</a>
									)}
								</div>
								{subgenre.description}
							</li>
						);
					}, this)}
				</ul>
			</div>
		)
	}
}

export default GenrePage;