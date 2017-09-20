import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';

class LeaderBoardPage extends React.Component {

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
					My Quizzes
				</div>
				<div style={{
					height: '2px',
					marginBottom: '20px',
					width: '100%',
					backgroundColor: '#E0E0E0'
				}}></div>

				<ul>
					{JSON.parse(this.props.allGenres).map(function(genre, i){
						return (
							<li key={i}>
								<h4><a href={"/genres/" + genre.id}>{genre.name}</a></h4>
								{genre.description}
								<ul>
								{
									genre.subgenres.map(function(subgenre, i) {
										return (
											<li key={i}>
												<h4>{subgenre.name}</h4>
												{subgenre.description}
												{JSON.parse(this.props.userDetails).quizzes.find(function(quiz) {
													return (subgenre.id == quiz.subgenre.id);
												}) !== undefined && (
													<table style={{
														marginLeft: "10px"
													}} className="table-striped table-bordered">
														<thead>
															<tr>
																<th style={{textAlign: "center", padding: "5px"}}>Starting time</th>
																<th style={{textAlign: "center", padding: "5px"}}>Score</th>
																<th style={{textAlign: "center", padding: "5px"}}>Delete</th>
															</tr>
														</thead>
														<tbody>
															{JSON.parse(this.props.userDetails).quizzes.map(function(quiz, i) {
																if(subgenre.id == quiz.subgenre.id){
																	return (
																		<tr key={i}>
																			<td style={{textAlign: "center", padding: "5px"}}>
																				<Moment fromNow date={quiz.created_at} />
																			</td>
																			<td style={{textAlign: "center", padding: "5px"}}>
																				{quiz.score}{!quiz.hasFinished && "*"}
																			</td>
																			<td style={{textAlign: "center", padding: "5px"}}>
																				<a  className="btn btn-danger" data-remote="true" rel="nofollow" data-method="delete" href="/genres/1/subgenres/1/quizzes/4">
																					Delete
																				</a>
																			</td>
																		</tr>
																	);
																}
																else{
																	return <tr key={i} style={{display: "none"}}></tr>;
																}
															}, this)}
														</tbody>
													</table>
												)}
												{JSON.parse(this.props.userDetails).quizzes.find(function(quiz) {
													return (subgenre.id == quiz.subgenre.id);
												}) === undefined && (
													<div className="alert alert-warning">
														You haven't attempted any quizzes in this Subgenre.
													</div>
												)}
											</li>
										);
									}, this)
								}
								</ul>
							</li>
						);
					}, this)}
				</ul>
			</div>
		)
	}
}

export default LeaderBoardPage;