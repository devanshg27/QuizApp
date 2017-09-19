import PropTypes from 'prop-types';
import React from 'react';

class QuizRow extends React.Component {
	render() {
		return (
			<tr>
				<td style={{textAlign: "center", padding: "5px"}}>{this.props.rowData.subgenre.genre.name}</td>
				<td style={{textAlign: "center", padding: "5px"}}>{this.props.rowData.subgenre.name}</td>
				<td style={{textAlign: "center", padding: "5px"}}>{this.props.rowData.score}</td>
				<td style={{textAlign: "center", padding: "5px"}}>
					<a href={
						'/genres/' + this.props.rowData.subgenre.genre.id + 
						'/subgenres/' + this.props.rowData.subgenre.id + 
						'/quizzes/' + this.props.rowData.id + '/edit'} className="btn btn-info">Continue</a>
				</td>
			</tr>
		)
	}
}

export default QuizRow;