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
										<form
											action={'/genres/' + JSON.parse(this.props.Genre).id + '/subgenres/' + subgenre.id + '/quizzes/'}
											method='post'
											acceptCharset='UTF-8'
										>
											<input type='hidden' name='utf8' value='✓' />
											<input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
											<input style={{textSize: "16px"}} className="btn btn-success" name="commit" value="Start new quiz" type="submit" />
										</form>
									)}
									{JSON.parse(this.props.userDetails).quizzes.find(function(quiz) {
										return (subgenre.id == quiz.subgenre.id && !quiz.hasFinished);
									}) !== undefined && (
										<a
											href={'/genres/' + JSON.parse(this.props.Genre).id + '/subgenres/'
												+ subgenre.id + '/quizzes/' + 
												JSON.parse(this.props.userDetails).quizzes.find(function(quiz) {
													return (subgenre.id == quiz.subgenre.id && !quiz.hasFinished);
												}).id + '/edit'}
											style={{textSize: "16px"}}
											className="btn btn-info"
										>Continue</a>
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