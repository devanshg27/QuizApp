import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';

class LeaderBoardPage extends React.Component {

	constructor(props) {
		super(props);
		this.getGenreData = this.getGenreData.bind(this);
		this.getSubgenreData = this.getSubgenreData.bind(this);
	}

	getGenreData(arr, genre) {
		var cnt = 0;
		var obj = {};
		var ans = [];
		for (var i = 0; (i < arr.length && cnt < 10); ++i) {
			if(genre.id == arr[i].subgenre.genre.id && !(arr[i].user.id in obj)){
				++cnt;
				obj[arr[i].user.id] = true;
				ans.push(
					<tr key={i}>
						<td style={{textAlign: "center", padding: "5px"}}>
							<a href={'/profile/' + arr[i].user.id}>{arr[i].user.name}</a>
						</td>
						<td style={{textAlign: "center", padding: "5px"}}>
							<Moment fromNow date={arr[i].created_at} />
						</td>
						<td style={{textAlign: "center", padding: "5px"}}>
							{arr[i].score}{!arr[i].hasFinished && "*"}
						</td>
					</tr>
				);
			}
		}
		return ans;
	}

	getSubgenreData(arr, subgenre) {
		var cnt = 0;
		var obj = {};
		var ans = [];
		for (var i = 0; (i < arr.length && cnt < 10); ++i) {
			if(subgenre.id == arr[i].subgenre.id && !(arr[i].user.id in obj)){
				++cnt;
				obj[arr[i].user.id] = true;
				ans.push(
					<tr key={i}>
						<td style={{textAlign: "center", padding: "5px"}}>
							<a href={'/profile/' + arr[i].user.id}>{arr[i].user.name}</a>
						</td>
						<td style={{textAlign: "center", padding: "5px"}}>
							<Moment fromNow date={arr[i].created_at} />
						</td>
						<td style={{textAlign: "center", padding: "5px"}}>
							{arr[i].score}{!arr[i].hasFinished && "*"}
						</td>
					</tr>
				);
			}
		}
		return ans;
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
					Leader Board
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
								{JSON.parse(this.props.allQuizzes).find(function(quiz) {
									return (genre.id == quiz.subgenre.genre.id);
								}) !== undefined && (
									<table style={{
										marginLeft: "10px"
									}} className="table-striped table-bordered">
										<thead>
											<tr>
												<th style={{textAlign: "center", padding: "5px"}}>Name of user</th>
												<th style={{textAlign: "center", padding: "5px"}}>Starting time</th>
												<th style={{textAlign: "center", padding: "5px"}}>Score</th>
											</tr>
										</thead>
										<tbody>
											{this.getGenreData(JSON.parse(this.props.allQuizzes).slice().sort(function(a, b) {
												return b.score - a.score;
											}), genre)}
										</tbody>
									</table>
								)}
								{JSON.parse(this.props.allQuizzes).find(function(quiz) {
									return (genre.id == quiz.subgenre.genre.id);
								}) === undefined && (
									<div className="alert alert-warning">
										There are no quizzes in this genre.
									</div>
								)}
								<ul>
								{
									genre.subgenres.map(function(subgenre, i) {
										return (
											<li key={i}>
												<h4>{subgenre.name}</h4>
												{subgenre.description}
												{JSON.parse(this.props.allQuizzes).find(function(quiz) {
													return (subgenre.id == quiz.subgenre.id);
												}) !== undefined && (
													<table style={{
														marginLeft: "10px"
													}} className="table-striped table-bordered">
														<thead>
															<tr>
																<th style={{textAlign: "center", padding: "5px"}}>Name of user</th>
																<th style={{textAlign: "center", padding: "5px"}}>Starting time</th>
																<th style={{textAlign: "center", padding: "5px"}}>Score</th>
															</tr>
														</thead>
														<tbody>
															{this.getSubgenreData(JSON.parse(this.props.allQuizzes).slice().sort(function(a, b) {
																return b.score - a.score;
															}), subgenre)}
														</tbody>
													</table>
												)}
												{JSON.parse(this.props.allQuizzes).find(function(quiz) {
													return (subgenre.id == quiz.subgenre.id);
												}) === undefined && (
													<div className="alert alert-warning">
														There are no quizzes in this subgenre.
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