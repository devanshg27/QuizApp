import PropTypes from 'prop-types';
import React from 'react';
import QuizRow from './quizRow';

class UserHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pausedQuizzes: []
		}
	};

	componentDidMount() {
		this.setState({
			pausedQuizzes: JSON.parse(this.props.userDetails).quizzes.filter(function(quiz){
				return !quiz.hasFinished;
			})
		});
	}

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
					Welcome to QuizApp
				</div>
				<div style={{
					height: '2px',
					marginBottom: '20px',
					width: '100%',
					backgroundColor: '#E0E0E0'
				}}></div>
				{this.state.pausedQuizzes.length > 0 &&
					(
					<div style={{
						width: "100%"
					}}>
						<h4>Paused Quizzes:</h4>
						<table style={{
							marginLeft: "10px"
						}}className="table-striped table-bordered">
							<thead>
								<tr>
									<th style={{textAlign: "center", padding: "5px"}}>Genre Name</th>
									<th style={{textAlign: "center", padding: "5px"}}>Subgenre Name</th>
									<th style={{textAlign: "center", padding: "5px"}}>Current Score</th>
									<th style={{textAlign: "center", padding: "5px"}}>Continue the Quiz</th>
								</tr>
							</thead>
							<tbody>
								{this.state.pausedQuizzes.map(function(quiz, i){
									return <QuizRow rowData={quiz} key={i}/>;
								}, this)}
							</tbody>
						</table>
					</div>)
				}
				<h4>Genres</h4>
				The following genres of quizzes are available, choose any of them to start a new quiz:
				{JSON.parse(this.props.allGenres).map(function(genre, i){
					return (<div key={i}>
						<ul>
							<li>
							<h4><a href={"/genres/" + genre.id}>{genre.name}</a></h4>
								{genre.description}
							</li>
						</ul>
					</div>);
				}, this)}
			</div>
		)
	}
}

export default UserHome;