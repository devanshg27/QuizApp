import PropTypes from 'prop-types';
import React from 'react';

class QuestionPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {answer: '', isOption1: false, isOption2: false, isOption3: false, isOption4: false};
		this.toggleChange1 = this.toggleChange1.bind(this);
		this.toggleChange2 = this.toggleChange2.bind(this);
		this.toggleChange3 = this.toggleChange3.bind(this);
		this.toggleChange4 = this.toggleChange4.bind(this);
	}

	toggleChange1(event) {
		if(this.state.isOption1){
			this.setState({isOption1: false, answer: this.state.answer.replace('1', '')});
		}
		else{
			this.setState({isOption1: true, answer: this.state.answer + '1'});
		}
	}

	toggleChange2(event) {
		if(this.state.isOption2){
			this.setState({isOption2: false, answer: this.state.answer.replace('2', '')});
		}
		else{
			this.setState({isOption2: true, answer: this.state.answer + '2'});
		}
	}

	toggleChange3(event) {
		if(this.state.isOption3){
			this.setState({isOption3: false, answer: this.state.answer.replace('3', '')});
		}
		else{
			this.setState({isOption3: true, answer: this.state.answer + '3'});
		}
	}

	toggleChange4(event) {
		if(this.state.isOption4){
			this.setState({isOption4: false, answer: this.state.answer.replace('4', '')});
		}
		else{
			this.setState({isOption4: true, answer: this.state.answer + '4'});
		}
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
					<div>Quiz(Current Score: {JSON.parse(this.props.quizDetails).score})</div>
					<div>{this.props.isSingleChoice ? 'Single choice' : 'Multiple choice'}</div>
				</div>
				<div style={{
					height: '2px',
					marginBottom: '20px',
					width: '100%',
					backgroundColor: '#E0E0E0'
				}}></div>
				<h4>
					{JSON.parse(this.props.quizDetails).question.question}
				</h4>
				{JSON.parse(this.props.quizDetails).question.image_file_name &&
					<div style={{width: "100%", marginBottom: "10px"}}>
						<img 
							src={this.props.imageFilePath}
							style={{display: "block", width: "80%", margin: '0 auto'}}
						/>
					</div>
				}
				{JSON.parse(this.props.quizDetails).question.audio_file_name &&
					<div style={{width: "100%", marginBottom: "10px"}}>
						<audio style={{display: "block", margin: '0 auto'}} controls>
							<source src={this.props.audioFilePath} type={JSON.parse(this.props.quizDetails).question.audio_content_type} />
							Your browser does not support the audio element.
						</audio>
					</div>
				}
				<div className="quiz-options">
					<p>
						A. <input checked={this.state.isOption1} onChange={this.toggleChange1} id="active1" type="checkbox" className="check" />
						<label htmlFor="active1" className="check">{JSON.parse(this.props.quizDetails).question.option1}</label>
					</p>
					
					<p>
						B. <input checked={this.state.isOption2} onChange={this.toggleChange2} id="active2" type="checkbox" className="check" />
						<label htmlFor="active2" className="check">{JSON.parse(this.props.quizDetails).question.option2}</label>
					</p>

					<p>
						C. <input checked={this.state.isOption3} onChange={this.toggleChange3} id="active3" type="checkbox" className="check" />
						<label htmlFor="active3" className="check">{JSON.parse(this.props.quizDetails).question.option3}</label>
					</p>

					<p>
						D. <input checked={this.state.isOption4} onChange={this.toggleChange4} id="active4" type="checkbox" className="check" />
						<label htmlFor="active4" className="check">{JSON.parse(this.props.quizDetails).question.option4}</label>
					</p>
				</div>
				<div style={{
					width: "100%",
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-around',
				}}>
					<form
						action={"/genres/" + JSON.parse(this.props.quizDetails).question.subgenre.genre.id + "/subgenres/" + JSON.parse(this.props.quizDetails).question.subgenre.id + "/quizzes/" + JSON.parse(this.props.quizDetails).id}
						acceptCharset="UTF-8"
						method="post"
					>
						<input name="utf8" value="✓" type="hidden" />
						<input name="_method" value="patch" type="hidden" />
						<input name="authenticity_token" value={this.props.form_authenticity_token} type="hidden" />
						<input value={this.state.answer} name="quiz[answer]" id="quiz_answer1" type="text" type="hidden" />
						<input name="quiz[doubleTryUse]" id="quiz_doubleTryUse1" value="1" type="checkbox" style={{display: "none"}} />
						<input readOnly checked="checked" name="quiz[skipQuestionUse]" id="quiz_skipQuestionUse1" value="1" type="checkbox" style={{display: "none"}} />
						{!JSON.parse(this.props.quizDetails).skipQuestionLeft && 
							<button className="btn btn-primary" type="button" disabled>Skip This Question</button>
						}
						{JSON.parse(this.props.quizDetails).skipQuestionLeft && 
							<button className="btn btn-primary" type="submit">Skip This Question</button>
						}
					</form>
					<form
						action={"/genres/" + JSON.parse(this.props.quizDetails).question.subgenre.genre.id + "/subgenres/" + JSON.parse(this.props.quizDetails).question.subgenre.id + "/quizzes/" + JSON.parse(this.props.quizDetails).id}
						acceptCharset="UTF-8"
						method="post"
					>
						<input name="utf8" value="✓" type="hidden" />
						<input name="_method" value="patch" type="hidden" />
						<input name="authenticity_token" value={this.props.form_authenticity_token} type="hidden" />
						<input value={this.state.answer} name="quiz[answer]" id="quiz_answer2" type="text" type="hidden" />
						<input readOnly checked="checked" name="quiz[doubleTryUse]" id="quiz_doubleTryUse2" value="1" type="checkbox" style={{display: "none"}} />
						<input name="quiz[skipQuestionUse]" id="quiz_skipQuestionUse2" value="1" type="checkbox" style={{display: "none"}} />
						{!JSON.parse(this.props.quizDetails).doubleTryLeft && 
							<button className="btn btn-warning" type="button" disabled>Submit with Double Try</button>
						}
						{JSON.parse(this.props.quizDetails).doubleTryLeft && 
							<button className="btn btn-warning" type="submit">Submit with Double Try</button>
						}
					</form>
					<form
						action={"/genres/" + JSON.parse(this.props.quizDetails).question.subgenre.genre.id + "/subgenres/" + JSON.parse(this.props.quizDetails).question.subgenre.id + "/quizzes/" + JSON.parse(this.props.quizDetails).id}
						acceptCharset="UTF-8"
						method="post"
					>
						<input name="utf8" value="✓" type="hidden" />
						<input name="_method" value="patch" type="hidden" />
						<input name="authenticity_token" value={this.props.form_authenticity_token} type="hidden" />
						<input value={this.state.answer} name="quiz[answer]" id="quiz_answer3" type="text" type="hidden" />
						<input name="quiz[doubleTryUse]" id="quiz_doubleTryUse3" value="1" type="checkbox" style={{display: "none"}} />
						<input name="quiz[skipQuestionUse]" id="quiz_skipQuestionUse3" value="1" type="checkbox" style={{display: "none"}} />
						<button name="button" type="submit" className="btn btn-success">Submit Answer</button>
					</form>
				</div>
			</div>
		)
	}
}

export default QuestionPage;